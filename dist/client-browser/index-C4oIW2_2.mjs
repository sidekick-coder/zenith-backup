import "vue-router";
import { ref as Vh } from "vue";
import { isNotNestedPath as Xh, cleanupNonNestedPath as Kh, useForm as Jh } from "vee-validate";
let ct;
const Yh = {
  lang: void 0,
  message: void 0,
  abortEarly: void 0,
  abortPipeEarly: void 0
};
function Qh(e) {
  ct = {
    ...ct,
    ...e
  };
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return !e && !ct ? Yh : {
    lang: e?.lang ?? ct?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? ct?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? ct?.abortPipeEarly
  };
}
function Zh() {
  ct = void 0;
}
let Kt;
function ed(e, t) {
  Kt || (Kt = /* @__PURE__ */ new Map()), Kt.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function Vu(e) {
  return Kt?.get(e);
}
function td(e) {
  Kt?.delete(e);
}
let Jt;
function rd(e, t) {
  Jt || (Jt = /* @__PURE__ */ new Map()), Jt.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function Xu(e) {
  return Jt?.get(e);
}
function nd(e) {
  Jt?.delete(e);
}
let lt;
function id(e, t, r) {
  lt || (lt = /* @__PURE__ */ new Map()), lt.get(e) || lt.set(e, /* @__PURE__ */ new Map()), lt.get(e).set(r, t);
}
// @__NO_SIDE_EFFECTS__
function Ku(e, t) {
  return lt?.get(e)?.get(t);
}
function od(e, t) {
  lt?.get(e)?.delete(t);
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function b(e, t, r, n, i) {
  const o = i && "input" in i ? i.input : r.value, a = i?.expected ?? e.expects ?? null, s = i?.received ?? /* @__PURE__ */ se(o), u = {
    kind: e.kind,
    type: e.type,
    input: o,
    expected: a,
    received: s,
    message: `Invalid ${t}: ${a ? `Expected ${a} but r` : "R"}eceived ${s}`,
    requirement: e.requirement,
    path: i?.path,
    issues: i?.issues,
    lang: n.lang,
    abortEarly: n.abortEarly,
    abortPipeEarly: n.abortPipeEarly
  }, l = e.kind === "schema", c = i?.message ?? e.message ?? /* @__PURE__ */ Ku(e.reference, u.lang) ?? (l ? /* @__PURE__ */ Xu(u.lang) : null) ?? n.message ?? /* @__PURE__ */ Vu(u.lang);
  c !== void 0 && (u.message = typeof c == "function" ? c(u) : c), l && (r.typed = !1), r.issues ? r.issues.push(u) : r.issues = [u];
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return {
    typed: e.typed,
    value: e.value,
    issues: e.issues && [...e.issues]
  };
}
// @__NO_SIDE_EFFECTS__
function nr(e, t, r, n) {
  let i = "", o = !0, a = 0, s = 0, u = 0;
  const l = (c) => {
    if (c > a) {
      let h = e.slice(a, c).toLowerCase();
      if (o ? r : n) {
        const O = h.charCodeAt(0);
        if (O >= 97 && O <= 122) h = String.fromCharCode(O - 32) + h.slice(1);
        else {
          const d = O >= 55296 && O <= 56319 ? 2 : 1;
          h = h.slice(0, d).toUpperCase() + h.slice(d);
        }
      }
      i += o ? h : t + h, o = !1;
    }
  };
  for (let c = 0; c < e.length; c++) {
    const h = e.charCodeAt(c);
    let O;
    if (h === 32 || h === 9 || h === 10 || h === 11 || h === 12 || h === 13 || h === 45 || h === 95)
      l(c), a = c + 1, O = 0;
    else if (h < 128) O = h >= 65 && h <= 90 ? 1 : h >= 97 && h <= 122 ? 2 : 3;
    else {
      const d = e[c], m = d.toLowerCase();
      O = m === d.toUpperCase() ? 3 : d === m ? 2 : 1;
    }
    O === 1 && (s === 2 || s === 3) && c > a ? (l(c), a = c) : O === 2 && s === 1 && u === 1 && c - 1 > a && (l(c - 1), a = c - 1), u = s, s = O;
  }
  return l(e.length), i;
}
let un;
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return un || (un = new TextEncoder()), un.encode(e).length;
}
let ln;
// @__NO_SIDE_EFFECTS__
function or(e) {
  ln || (ln = new Intl.Segmenter());
  const t = ln.segment(e);
  let r = 0;
  for (const n of t) r++;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t) {
  if ("pipe" in e) {
    const r = [];
    for (let n = e.pipe.length - 1; n >= 0; n--) {
      const i = e.pipe[n];
      if (i.kind === "schema" && "pipe" in i) r.push(i);
      else if (i.kind === "metadata" && i.type === t) return i[t];
    }
    for (const n of r) {
      const i = /* @__PURE__ */ Dr(n, t);
      if (i !== void 0) return i;
    }
  }
}
const zo = /* @__PURE__ */ new WeakMap();
// @__NO_SIDE_EFFECTS__
function I(e) {
  let t = zo.get(e);
  return t || (t = {
    version: 1,
    vendor: "valibot",
    validate(r) {
      return e["~run"]({ value: r }, /* @__PURE__ */ St());
    }
  }, zo.set(e, t)), t;
}
let Gt;
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
  Gt || (Gt = /* @__PURE__ */ new Map()), Gt.get(e) || Gt.set(e, new Intl.Segmenter(e, { granularity: "word" }));
  const r = Gt.get(e).segment(t);
  let n = 0;
  for (const i of r) i.isWordLike && n++;
  return n;
}
const ad = /\D/gu;
// @__NO_SIDE_EFFECTS__
function to(e) {
  const t = e.replace(ad, "");
  let r = t.length, n = 1, i = 0;
  for (; r; ) {
    const o = +t[--r];
    n ^= 1, i += n ? [
      0,
      2,
      4,
      6,
      8,
      1,
      3,
      5,
      7,
      9
    ][o] : o;
  }
  return i % 10 === 0;
}
// @__NO_SIDE_EFFECTS__
function ht(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  const r = [...new Set(e)];
  return r.length > 1 ? `(${r.join(` ${t} `)})` : r[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function sd(e, t) {
  const r = {};
  for (const n of e) r[n] = t;
  return r;
}
// @__NO_SIDE_EFFECTS__
function ud(e) {
  const t = {};
  for (const r of e) Object.assign(t, r.entries);
  return t;
}
// @__NO_SIDE_EFFECTS__
function Ir(e) {
  if (e.path) {
    let t = "";
    for (const r of e.path) if (typeof r.key == "string" || typeof r.key == "number") t ? t += `.${r.key}` : t += r.key;
    else return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function ld(e, t) {
  return t.kind === e;
}
// @__NO_SIDE_EFFECTS__
function cd(e, t) {
  return t.type === e;
}
// @__NO_SIDE_EFFECTS__
function fd(e) {
  return e instanceof ze;
}
var ze = class extends Error {
  /**
  * Creates a Valibot error with useful information.
  *
  * @param issues The error issues.
  */
  constructor(e) {
    super(e[0].message), this.name = "ValiError", this.issues = e;
  }
};
// @__NO_SIDE_EFFECTS__
function Ju(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: Ju,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = (...i) => {
        const o = this.schema["~run"]({ value: i }, r);
        if (o.issues) throw new ze(o.issues);
        return n(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yu(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: Yu,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = async (...i) => {
        const o = await e["~run"]({ value: i }, r);
        if (o.issues) throw new ze(o.issues);
        return n(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qu() {
  return {
    kind: "transformation",
    type: "await",
    reference: Qu,
    async: !0,
    async "~run"(e) {
      return e.value = await e.value, e;
    }
  };
}
const Zu = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu, el = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u, tl = /^[a-z][\da-z]*$/u, rl = /^[+-]?(?:\d*\.)?\d+$/u, nl = /^\d+$/u, il = /^(?=.{1,253}$)(?:(?![Xx][Nn]--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/u, ol = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu, al = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$", "u"), sl = /^(?:0[hx])?[\da-fA-F]+$/u, ul = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u, ll = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u, cl = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u, fl = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, pl = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, yl = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u, hl = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u, dl = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, ml = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u, vl = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, gl = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z| ?[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u, bl = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u, wl = /^(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?$/u, _l = /^(?:[A-Z]{2}[A-Z\d]{3}\d{7}|[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5})$/u, Ol = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$/u, xl = /^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, El = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$|^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Al = /^[\w-]+$/u, kl = /^(?:0o)?[0-7]+$/u, Sl = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Pl = /^[\da-z]+(?:[-_][\da-z]+)*$/u, jl = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u, Dl = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
// @__NO_SIDE_EFFECTS__
function Il(e) {
  return {
    kind: "validation",
    type: "base64",
    reference: Il,
    async: !1,
    expects: null,
    requirement: Zu,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "Base64", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rl(e) {
  return {
    kind: "validation",
    type: "bic",
    reference: Rl,
    async: !1,
    expects: null,
    requirement: el,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "BIC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ml(e) {
  return {
    kind: "transformation",
    type: "brand",
    reference: Ml,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fl(e, t) {
  return {
    kind: "validation",
    type: "bytes",
    reference: Fl,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ir(r.value);
        i !== this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $l(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: $l,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement(r.value) && b(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tl(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: Tl,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(r, n) {
      return r.typed && !await this.requirement(r.value) && b(this, "input", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nl(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: Nl,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) for (let i = 0; i < r.value.length; i++) {
        const o = r.value[i];
        this.requirement(o, i, r.value) || b(this, "item", r, n, {
          input: o,
          path: [{
            type: "array",
            origin: "value",
            input: r.value,
            key: i,
            value: o
          }]
        });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: Cl,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(r, n) {
      if (r.typed) {
        const i = await Promise.all(r.value.map(this.requirement));
        for (let o = 0; o < r.value.length; o++) if (!i[o]) {
          const a = r.value[o];
          b(this, "item", r, n, {
            input: a,
            path: [{
              type: "array",
              origin: "value",
              input: r.value,
              key: o,
              value: a
            }]
          });
        }
      }
      return r;
    }
  };
}
const pd = /^(?:\d{13,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u, yd = /[- ]/gu, hd = [
  /^3[47]\d{13}$/u,
  /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
  /^6(?:011|5\d{2})\d{12,15}$/u,
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  /^(?:5[1-5]\d{2}|222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
  /^4\d{12}(?:\d{3,6})?$/u
];
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return {
    kind: "validation",
    type: "credit_card",
    reference: ql,
    async: !1,
    expects: null,
    requirement(t) {
      let r;
      return pd.test(t) && (r = t.replace(yd, "")) && hd.some((n) => n.test(r)) && /* @__PURE__ */ to(r);
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "credit card", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wl(e) {
  return {
    kind: "validation",
    type: "cuid2",
    reference: Wl,
    async: !1,
    expects: null,
    requirement: tl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "Cuid2", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ll(e) {
  return {
    kind: "validation",
    type: "decimal",
    reference: Ll,
    async: !1,
    expects: null,
    requirement: rl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "decimal", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zl(e) {
  return {
    kind: "metadata",
    type: "description",
    reference: zl,
    description: e
  };
}
// @__NO_SIDE_EFFECTS__
function Bl(e) {
  return {
    kind: "validation",
    type: "digits",
    reference: Bl,
    async: !1,
    expects: null,
    requirement: nl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "digits", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gl(e) {
  return {
    kind: "validation",
    type: "domain",
    reference: Gl,
    expects: null,
    async: !1,
    requirement: il,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "domain", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ul(e) {
  return {
    kind: "validation",
    type: "email",
    reference: Ul,
    expects: null,
    async: !1,
    requirement: ol,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "email", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hl(e) {
  return {
    kind: "validation",
    type: "emoji",
    reference: Hl,
    async: !1,
    expects: null,
    requirement: al,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "emoji", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vl(e) {
  return {
    kind: "validation",
    type: "empty",
    reference: Vl,
    async: !1,
    expects: "0",
    message: e,
    "~run"(t, r) {
      return t.typed && t.value.length > 0 && b(this, "length", t, r, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xl(e, t) {
  return {
    kind: "validation",
    type: "ends_with",
    reference: Xl,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.endsWith(this.requirement) && b(this, "end", r, n, { received: `"${r.value.slice(-this.requirement.length)}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kl(e, t) {
  return {
    kind: "validation",
    type: "entries",
    reference: Kl,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i !== this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jl(e, t) {
  return {
    kind: "validation",
    type: "every_item",
    reference: Jl,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.every(this.requirement) && b(this, "item", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yl(e) {
  return {
    kind: "metadata",
    type: "examples",
    reference: Yl,
    examples: e
  };
}
// @__NO_SIDE_EFFECTS__
function Ql(e, t) {
  const r = /* @__PURE__ */ se(e);
  return {
    kind: "validation",
    type: "excludes",
    reference: Ql,
    async: !1,
    expects: `!${r}`,
    requirement: e,
    message: t,
    "~run"(n, i) {
      return n.typed && n.value.includes(this.requirement) && b(this, "content", n, i, { received: r }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zl(e) {
  return {
    kind: "transformation",
    type: "filter_items",
    reference: Zl,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.filter(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ec(e) {
  return {
    kind: "transformation",
    type: "find_item",
    reference: ec,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.find(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tc(e) {
  return {
    kind: "validation",
    type: "finite",
    reference: tc,
    async: !1,
    expects: null,
    requirement: Number.isFinite,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "finite", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rc(e) {
  return {
    kind: "transformation",
    type: "flavor",
    reference: rc,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nc(e, t) {
  return {
    kind: "validation",
    type: "graphemes",
    reference: nc,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ or(r.value);
        i !== this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ic(e, t) {
  return {
    kind: "validation",
    type: "gt_value",
    reference: ic,
    async: !1,
    expects: `>${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value > this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oc(e, t) {
  return {
    kind: "transformation",
    type: "guard",
    reference: oc,
    async: !1,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement(r.value) && (b(this, "input", r, n), r.typed = !1), r;
    }
  };
}
const dd = {
  md4: 32,
  md5: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8,
  adler32: 8
};
// @__NO_SIDE_EFFECTS__
function ac(e, t) {
  return {
    kind: "validation",
    type: "hash",
    reference: ac,
    expects: null,
    async: !1,
    requirement: RegExp(e.map((r) => `^[a-fA-F0-9]{${dd[r]}}$`).join("|"), "u"),
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.test(r.value) && b(this, "hash", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sc(e) {
  return {
    kind: "validation",
    type: "hexadecimal",
    reference: sc,
    async: !1,
    expects: null,
    requirement: sl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "hexadecimal", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uc(e) {
  return {
    kind: "validation",
    type: "hex_color",
    reference: uc,
    async: !1,
    expects: null,
    requirement: ul,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "hex color", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lc(e) {
  return {
    kind: "validation",
    type: "imei",
    reference: lc,
    async: !1,
    expects: null,
    requirement(t) {
      return ll.test(t) && /* @__PURE__ */ to(t);
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "IMEI", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cc(e, t) {
  const r = /* @__PURE__ */ se(e);
  return {
    kind: "validation",
    type: "includes",
    reference: cc,
    async: !1,
    expects: r,
    requirement: e,
    message: t,
    "~run"(n, i) {
      return n.typed && !n.value.includes(this.requirement) && b(this, "content", n, i, { received: `!${r}` }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ro(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: ro,
    async: !1,
    expects: null,
    requirement: Number.isInteger,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "integer", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fc(e) {
  return {
    kind: "validation",
    type: "ip",
    reference: fc,
    async: !1,
    expects: null,
    requirement: pl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "IP", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pc(e) {
  return {
    kind: "validation",
    type: "ipv4",
    reference: pc,
    async: !1,
    expects: null,
    requirement: cl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "IPv4", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yc(e) {
  return {
    kind: "validation",
    type: "ipv6",
    reference: yc,
    async: !1,
    expects: null,
    requirement: fl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "IPv6", t, r), t;
    }
  };
}
function md(e) {
  const t = e.split("").map((n) => n === "X" ? 10 : parseInt(n));
  let r = 0;
  for (let n = 0; n < 10; n++) r += t[n] * (10 - n);
  return r % 11 === 0;
}
function vd(e) {
  const t = e.split("").map((n) => parseInt(n));
  let r = 0;
  for (let n = 0; n < 13; n++) r += t[n] * (n % 2 === 0 ? 1 : 3);
  return r % 10 === 0;
}
const gd = /[- ]/gu, bd = /^\d{9}[\dX]$/u, wd = /^\d{13}$/u;
// @__NO_SIDE_EFFECTS__
function hc(e) {
  return {
    kind: "validation",
    type: "isbn",
    reference: hc,
    async: !1,
    expects: null,
    requirement(t) {
      const r = t.replace(gd, "");
      return bd.test(r) ? md(r) : wd.test(r) ? vd(r) : !1;
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "ISBN", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dc(e) {
  return {
    kind: "validation",
    type: "isrc",
    reference: dc,
    async: !1,
    expects: null,
    requirement: _l,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "ISRC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mc(e) {
  return {
    kind: "validation",
    type: "iso_date",
    reference: mc,
    async: !1,
    expects: null,
    requirement: yl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "date", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vc(e) {
  return {
    kind: "validation",
    type: "iso_date_time",
    reference: vc,
    async: !1,
    expects: null,
    requirement: hl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "date-time", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gc(e) {
  return {
    kind: "validation",
    type: "iso_date_time_second",
    reference: gc,
    async: !1,
    expects: null,
    requirement: dl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "date-time-second", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bc(e) {
  return {
    kind: "validation",
    type: "iso_time",
    reference: bc,
    async: !1,
    expects: null,
    requirement: ml,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "time", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wc(e) {
  return {
    kind: "validation",
    type: "iso_time_second",
    reference: wc,
    async: !1,
    expects: null,
    requirement: vl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "time-second", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _c(e) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: _c,
    async: !1,
    expects: null,
    requirement: gl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "timestamp", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oc(e) {
  return {
    kind: "validation",
    type: "iso_week",
    reference: Oc,
    async: !1,
    expects: null,
    requirement: bl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "week", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xc(e) {
  return {
    kind: "validation",
    type: "jws_compact",
    reference: xc,
    async: !1,
    expects: null,
    requirement: wl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "JWS compact", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ec(e, t) {
  return {
    kind: "validation",
    type: "length",
    reference: Ec,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length !== this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ac(e, t) {
  return {
    kind: "validation",
    type: "lt_value",
    reference: Ac,
    async: !1,
    expects: `<${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value < this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kc(e) {
  return {
    kind: "validation",
    type: "mac",
    reference: kc,
    async: !1,
    expects: null,
    requirement: El,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sc(e) {
  return {
    kind: "validation",
    type: "mac48",
    reference: Sc,
    async: !1,
    expects: null,
    requirement: Ol,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "48-bit MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pc(e) {
  return {
    kind: "validation",
    type: "mac64",
    reference: Pc,
    async: !1,
    expects: null,
    requirement: xl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "64-bit MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jc(e) {
  return {
    kind: "transformation",
    type: "map_items",
    reference: jc,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.map(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dc(e, t) {
  return {
    kind: "validation",
    type: "max_bytes",
    reference: Dc,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ir(r.value);
        i > this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ic(e, t) {
  return {
    kind: "validation",
    type: "max_entries",
    reference: Ic,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i > this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rc(e, t) {
  return {
    kind: "validation",
    type: "max_graphemes",
    reference: Rc,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ or(r.value);
        i > this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mc(e, t) {
  return {
    kind: "validation",
    type: "max_length",
    reference: Mc,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length > this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fc(e, t) {
  return {
    kind: "validation",
    type: "max_size",
    reference: Fc,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size > this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $c(e, t) {
  return {
    kind: "validation",
    type: "max_value",
    reference: $c,
    async: !1,
    expects: `<=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value <= this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tc(e, t, r) {
  return {
    kind: "validation",
    type: "max_words",
    reference: Tc,
    async: !1,
    expects: `<=${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ ar(this.locales, n.value);
        o > this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nc(e) {
  return {
    kind: "metadata",
    type: "metadata",
    reference: Nc,
    metadata: e
  };
}
// @__NO_SIDE_EFFECTS__
function Cc(e, t) {
  return {
    kind: "validation",
    type: "mime_type",
    reference: Cc,
    async: !1,
    expects: /* @__PURE__ */ Se(e.map((r) => `"${r}"`), "|"),
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.includes(r.value.type) && b(this, "MIME type", r, n, { received: `"${r.value.type}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qc(e, t) {
  return {
    kind: "validation",
    type: "min_bytes",
    reference: qc,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ir(r.value);
        i < this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wc(e, t) {
  return {
    kind: "validation",
    type: "min_entries",
    reference: Wc,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i < this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lc(e, t) {
  return {
    kind: "validation",
    type: "min_graphemes",
    reference: Lc,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ or(r.value);
        i < this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zc(e, t) {
  return {
    kind: "validation",
    type: "min_length",
    reference: zc,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length < this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bc(e, t) {
  return {
    kind: "validation",
    type: "min_size",
    reference: Bc,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size < this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gc(e, t) {
  return {
    kind: "validation",
    type: "min_value",
    reference: Gc,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(r.value >= this.requirement) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uc(e, t, r) {
  return {
    kind: "validation",
    type: "min_words",
    reference: Uc,
    async: !1,
    expects: `>=${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ ar(this.locales, n.value);
        o < this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hc(e, t) {
  return {
    kind: "validation",
    type: "multiple_of",
    reference: Hc,
    async: !1,
    expects: `%${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value % this.requirement != 0 && b(this, "multiple", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vc(e) {
  return {
    kind: "validation",
    type: "nanoid",
    reference: Vc,
    async: !1,
    expects: null,
    requirement: Al,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "Nano ID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xc(e) {
  return {
    kind: "validation",
    type: "non_empty",
    reference: Xc,
    async: !1,
    expects: "!0",
    message: e,
    "~run"(t, r) {
      return t.typed && t.value.length === 0 && b(this, "length", t, r, { received: "0" }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kc(e) {
  return {
    kind: "transformation",
    type: "normalize",
    reference: Kc,
    async: !1,
    form: e,
    "~run"(t) {
      return t.value = t.value.normalize(this.form), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jc(e, t) {
  return {
    kind: "validation",
    type: "not_bytes",
    reference: Jc,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ ir(r.value);
        i === this.requirement && b(this, "bytes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yc(e, t) {
  return {
    kind: "validation",
    type: "not_entries",
    reference: Yc,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (!r.typed) return r;
      const i = Object.keys(r.value).length;
      return r.typed && i === this.requirement && b(this, "entries", r, n, { received: `${i}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qc(e, t) {
  return {
    kind: "validation",
    type: "not_graphemes",
    reference: Qc,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      if (r.typed) {
        const i = /* @__PURE__ */ or(r.value);
        i === this.requirement && b(this, "graphemes", r, n, { received: `${i}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zc(e, t) {
  return {
    kind: "validation",
    type: "not_length",
    reference: Zc,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.length === this.requirement && b(this, "length", r, n, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ef(e, t) {
  return {
    kind: "validation",
    type: "not_size",
    reference: ef,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size === this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tf(e, t) {
  return {
    kind: "validation",
    type: "not_value",
    reference: tf,
    async: !1,
    expects: e instanceof Date ? `!${e.toJSON()}` : `!${/* @__PURE__ */ se(e)}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && this.requirement <= r.value && this.requirement >= r.value && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rf(e, t) {
  return {
    kind: "validation",
    type: "not_values",
    reference: rf,
    async: !1,
    expects: `!${/* @__PURE__ */ Se(e.map((r) => r instanceof Date ? r.toJSON() : /* @__PURE__ */ se(r)), "|")}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && this.requirement.some((i) => i <= r.value && i >= r.value) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nf(e, t, r) {
  return {
    kind: "validation",
    type: "not_words",
    reference: nf,
    async: !1,
    expects: `!${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ ar(this.locales, n.value);
        o === this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function of(e) {
  return {
    kind: "validation",
    type: "octal",
    reference: of,
    async: !1,
    expects: null,
    requirement: kl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "octal", t, r), t;
    }
  };
}
const Bo = [
  !0,
  1,
  "true",
  "1",
  "yes",
  "y",
  "on",
  "enabled"
], Go = [
  !1,
  0,
  "false",
  "0",
  "no",
  "n",
  "off",
  "disabled"
];
// @__NO_SIDE_EFFECTS__
function af(e, t) {
  const r = (s) => typeof s == "string" ? s.toLowerCase() : s, n = e?.truthy ?? Bo, i = e?.falsy ?? Go, o = e?.truthy ? e.truthy.map(r) : Bo, a = e?.falsy ? e.falsy.map(r) : Go;
  return {
    kind: "transformation",
    type: "parse_boolean",
    reference: af,
    expects: /* @__PURE__ */ Se([...n, ...i].map(se), "|"),
    config: e,
    message: t,
    async: !1,
    "~run"(s, u) {
      const l = r(s.value);
      return o.includes(l) ? s.value = !0 : a.includes(l) ? s.value = !1 : (b(this, "boolean", s, u), s.typed = !1), s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sf(e, t) {
  return {
    kind: "transformation",
    type: "parse_json",
    reference: sf,
    config: e,
    message: t,
    async: !1,
    "~run"(r, n) {
      try {
        r.value = JSON.parse(r.value, this.config?.reviver);
      } catch (i) {
        if (i instanceof Error)
          b(this, "JSON", r, n, { received: `"${i.message}"` }), r.typed = !1;
        else throw i;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uf(e, t) {
  if (e.issues) for (const r of t) for (const n of e.issues) {
    let i = !1;
    const o = Math.min(r.length, n.path?.length ?? 0);
    for (let a = 0; a < o; a++) if (r[a] !== n.path[a].key && (r[a] !== "$" || n.path[a].type !== "array")) {
      i = !0;
      break;
    }
    if (!i) return !1;
  }
  return !0;
}
// @__NO_SIDE_EFFECTS__
function lf(e, t, r) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: lf,
    async: !1,
    expects: null,
    paths: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ uf(n, e)) && !this.requirement(n.value) && b(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cf(e, t, r) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: cf,
    async: !0,
    expects: null,
    paths: e,
    requirement: t,
    message: r,
    async "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ uf(n, e)) && !await this.requirement(n.value) && b(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ff(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: ff,
    async: !1,
    expects: null,
    "~run"(t, r) {
      return e({
        dataset: t,
        config: r,
        addIssue: (n) => b(this, n?.label ?? "input", t, r, n)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pf(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: pf,
    async: !0,
    expects: null,
    async "~run"(t, r) {
      return await e({
        dataset: t,
        config: r,
        addIssue: (n) => b(this, n?.label ?? "input", t, r, n)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yf(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: yf,
    async: !1,
    "~run"(t, r) {
      const n = e({
        dataset: t,
        config: r,
        addIssue: (i) => b(this, i?.label ?? "input", t, r, i),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = n, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hf(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: hf,
    async: !0,
    async "~run"(t, r) {
      const n = await e({
        dataset: t,
        config: r,
        addIssue: (i) => b(this, i?.label ?? "input", t, r, i),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = n, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function df() {
  return {
    kind: "transformation",
    type: "readonly",
    reference: df,
    async: !1,
    "~run"(e) {
      return e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mf(e, t) {
  return {
    kind: "transformation",
    type: "reduce_items",
    reference: mf,
    async: !1,
    operation: e,
    initial: t,
    "~run"(r) {
      return r.value = r.value.reduce(this.operation, this.initial), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vf(e, t) {
  return {
    kind: "validation",
    type: "regex",
    reference: vf,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.test(r.value) && b(this, "format", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gf(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: gf,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = (...i) => {
        const o = this.schema["~run"]({ value: n(...i) }, r);
        if (o.issues) throw new ze(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bf(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: bf,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const n = t.value;
      return t.value = async (...i) => {
        const o = await this.schema["~run"]({ value: await n(...i) }, r);
        if (o.issues) throw new ze(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wf(e) {
  return {
    kind: "validation",
    type: "rfc_email",
    reference: wf,
    expects: null,
    async: !1,
    requirement: Sl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "email", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _f(e) {
  return {
    kind: "validation",
    type: "safe_integer",
    reference: _f,
    async: !1,
    expects: null,
    requirement: Number.isSafeInteger,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "safe integer", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Of(e, t) {
  return {
    kind: "validation",
    type: "size",
    reference: Of,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && r.value.size !== this.requirement && b(this, "size", r, n, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xf(e) {
  return {
    kind: "validation",
    type: "slug",
    reference: xf,
    async: !1,
    expects: null,
    requirement: Pl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "slug", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ef(e, t) {
  return {
    kind: "validation",
    type: "some_item",
    reference: Ef,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.some(this.requirement) && b(this, "item", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Af(e) {
  return {
    kind: "transformation",
    type: "sort_items",
    reference: Af,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.sort(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kf(e, t) {
  return {
    kind: "validation",
    type: "starts_with",
    reference: kf,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !r.value.startsWith(this.requirement) && b(this, "start", r, n, { received: `"${r.value.slice(0, this.requirement.length)}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sf(e, t) {
  return {
    kind: "transformation",
    type: "stringify_json",
    reference: Sf,
    message: t,
    config: e,
    async: !1,
    "~run"(r, n) {
      try {
        const i = JSON.stringify(r.value, this.config?.replacer, this.config?.space);
        i === void 0 && (b(this, "JSON", r, n), r.typed = !1), r.value = i;
      } catch (i) {
        if (i instanceof Error)
          b(this, "JSON", r, n, { received: `"${i.message}"` }), r.typed = !1;
        else throw i;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pf(e) {
  return {
    kind: "metadata",
    type: "title",
    reference: Pf,
    title: e
  };
}
// @__NO_SIDE_EFFECTS__
function jf(e) {
  return {
    kind: "transformation",
    type: "to_bigint",
    reference: jf,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = BigInt(t.value);
      } catch {
        b(this, "bigint", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Df() {
  return {
    kind: "transformation",
    type: "to_boolean",
    reference: Df,
    async: !1,
    "~run"(e) {
      return e.value = !!e.value, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function If() {
  return {
    kind: "transformation",
    type: "to_camel_case",
    reference: If,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ nr(e.value, "", !1, !0), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rf(e) {
  return {
    kind: "transformation",
    type: "to_date",
    reference: Rf,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = new Date(t.value), isNaN(t.value) && (b(this, "date", t, r, { received: '"Invalid Date"' }), t.typed = !1);
      } catch {
        b(this, "date", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mf() {
  return {
    kind: "transformation",
    type: "to_kebab_case",
    reference: Mf,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ nr(e.value, "-", !1, !1), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ff() {
  return {
    kind: "transformation",
    type: "to_lower_case",
    reference: Ff,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toLowerCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $f(e) {
  return {
    kind: "transformation",
    type: "to_max_value",
    reference: $f,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value > this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tf(e) {
  return {
    kind: "transformation",
    type: "to_min_value",
    reference: Tf,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value < this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nf(e) {
  return {
    kind: "transformation",
    type: "to_number",
    reference: Nf,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = Number(t.value), isNaN(t.value) && (b(this, "number", t, r), t.typed = !1);
      } catch {
        b(this, "number", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cf() {
  return {
    kind: "transformation",
    type: "to_pascal_case",
    reference: Cf,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ nr(e.value, "", !0, !0), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qf() {
  return {
    kind: "transformation",
    type: "to_snake_case",
    reference: qf,
    async: !1,
    "~run"(e) {
      return e.value = /* @__PURE__ */ nr(e.value, "_", !1, !1), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wf(e) {
  return {
    kind: "transformation",
    type: "to_string",
    reference: Wf,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = String(t.value);
      } catch {
        b(this, "string", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lf() {
  return {
    kind: "transformation",
    type: "to_upper_case",
    reference: Lf,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toUpperCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: ke,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zf(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: zf,
    async: !0,
    operation: e,
    async "~run"(t) {
      return t.value = await this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bf() {
  return {
    kind: "transformation",
    type: "trim",
    reference: Bf,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trim(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gf() {
  return {
    kind: "transformation",
    type: "trim_end",
    reference: Gf,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimEnd(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uf() {
  return {
    kind: "transformation",
    type: "trim_start",
    reference: Uf,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimStart(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hf(e) {
  return {
    kind: "validation",
    type: "ulid",
    reference: Hf,
    async: !1,
    expects: null,
    requirement: jl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "ULID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vf(e) {
  return {
    kind: "validation",
    type: "url",
    reference: Vf,
    async: !1,
    expects: null,
    requirement(t) {
      try {
        return new URL(t), !0;
      } catch {
        return !1;
      }
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && b(this, "URL", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xf(e) {
  return {
    kind: "validation",
    type: "uuid",
    reference: Xf,
    async: !1,
    expects: null,
    requirement: Dl,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && b(this, "UUID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kf(e, t) {
  return {
    kind: "validation",
    type: "value",
    reference: Kf,
    async: !1,
    expects: e instanceof Date ? e.toJSON() : /* @__PURE__ */ se(e),
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !(this.requirement <= r.value && this.requirement >= r.value) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jf(e, t) {
  return {
    kind: "validation",
    type: "values",
    reference: Jf,
    async: !1,
    expects: `${/* @__PURE__ */ Se(e.map((r) => r instanceof Date ? r.toJSON() : /* @__PURE__ */ se(r)), "|")}`,
    requirement: e,
    message: t,
    "~run"(r, n) {
      return r.typed && !this.requirement.some((i) => i <= r.value && i >= r.value) && b(this, "value", r, n, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ se(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yf(e, t, r) {
  return {
    kind: "validation",
    type: "words",
    reference: Yf,
    async: !1,
    expects: `${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(n, i) {
      if (n.typed) {
        const o = /* @__PURE__ */ ar(this.locales, n.value);
        o !== this.requirement && b(this, "words", n, i, { received: `${o}` });
      }
      return n;
    }
  };
}
const Rr = { abortEarly: !0 };
function _d(e, t) {
  const r = e["~run"]({ value: t }, Rr).issues;
  if (r) throw new ze(r);
}
var Qf = class {
  constructor(e) {
    this.refCount = 0, this.maxSize = e?.maxSize ?? 1e3, this.maxAge = e?.maxAge ?? 1 / 0, this.hasMaxAge = isFinite(this.maxAge);
  }
  /**
  * Stringifies an unknown input to a cache key component.
  *
  * @param input The unknown input.
  *
  * @returns A cache key component.
  */
  stringify(e) {
    const t = typeof e;
    if (t === "string") return `"${e}"`;
    if (t === "number" || t === "boolean") return `${e}`;
    if (t === "bigint") return `${e}n`;
    if (t === "object" || t === "function") {
      if (e) {
        this.refIds ?? (this.refIds = /* @__PURE__ */ new WeakMap());
        let r = this.refIds.get(e);
        return r || (r = ++this.refCount, this.refIds.set(e, r)), `#${r}`;
      }
      return "null";
    }
    return t;
  }
  /**
  * Creates a cache key from input and config.
  *
  * @param input The input value.
  * @param config The parse configuration.
  *
  * @returns The cache key.
  */
  key(e, t = {}) {
    return `${this.stringify(e)}|${this.stringify(t.lang)}|${this.stringify(t.message)}|${this.stringify(t.abortEarly)}|${this.stringify(t.abortPipeEarly)}`;
  }
  /**
  * Gets a value from the cache by key.
  *
  * @param key The cache key.
  *
  * @returns The cached value.
  */
  get(e) {
    if (!this.store) return;
    const t = this.store.get(e);
    if (t) {
      if (this.hasMaxAge && Date.now() - t[1] > this.maxAge) {
        this.store.delete(e);
        return;
      }
      return this.store.delete(e), this.store.set(e, t), t[0];
    }
  }
  /**
  * Sets a value in the cache by key.
  *
  * @param key The cache key.
  * @param value The cached value.
  */
  set(e, t) {
    this.store ?? (this.store = /* @__PURE__ */ new Map()), this.store.delete(e);
    const r = this.hasMaxAge ? Date.now() : 0;
    this.store.set(e, [t, r]), this.store.size > this.maxSize && this.store.delete(this.store.keys().next().value);
  }
  /**
  * Clears all entries from the cache.
  */
  clear() {
    this.store?.clear();
  }
};
// @__NO_SIDE_EFFECTS__
function Od(e, t) {
  return {
    ...e,
    cacheConfig: t,
    cache: new Qf(t),
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = this.cache.key(r.value, n);
      let o = this.cache.get(i);
      return o || this.cache.set(i, o = e["~run"](r, n)), /* @__PURE__ */ _r(o);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xd(e, t) {
  let r;
  return {
    ...e,
    async: !0,
    cacheConfig: t,
    cache: new Qf(t),
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = this.cache.key(n.value, i), a = this.cache.get(o);
      if (a) return /* @__PURE__ */ _r(a);
      let s = r?.get(o);
      s || (r ?? (r = /* @__PURE__ */ new Map()), s = Promise.resolve(e["~run"](n, i)), r.set(o, s));
      try {
        const u = await s;
        return this.cache.set(o, u), /* @__PURE__ */ _r(u);
      } finally {
        r?.delete(o);
      }
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ed(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return e["~run"](r, {
        ...n,
        ...t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e, t, r) {
  return typeof e.fallback == "function" ? e.fallback(t, r) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function Ad(e, t) {
  return {
    ...e,
    fallback: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = e["~run"](r, n);
      return i.issues ? {
        typed: !0,
        value: /* @__PURE__ */ Pe(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kd(e, t) {
  return {
    ...e,
    fallback: t,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = await e["~run"](r, n);
      return i.issues ? {
        typed: !0,
        value: await /* @__PURE__ */ Pe(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const t = {};
  for (const r of e) if (r.path) {
    const n = /* @__PURE__ */ Ir(r);
    n ? (t.nested || (t.nested = {}), t.nested[n] ? t.nested[n].push(r.message) : t.nested[n] = [r.message]) : t.other ? t.other.push(r.message) : t.other = [r.message];
  } else t.root ? t.root.push(r.message) : t.root = [r.message];
  return t;
}
// @__NO_SIDE_EFFECTS__
function Sd(e, t) {
  return {
    ...e,
    "~run"(r, n) {
      const i = r.issues && [...r.issues];
      if (r = e["~run"](r, n), r.issues) {
        for (const o of r.issues) if (!i?.includes(o)) {
          let a = r.value;
          for (const s of t) {
            const u = a[s], l = {
              type: "unknown",
              origin: "value",
              input: a,
              key: s,
              value: u
            };
            if (o.path ? o.path.push(l) : o.path = [l], !u) break;
            a = u;
          }
        }
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pd(e, t) {
  return {
    ...e,
    async: !0,
    async "~run"(r, n) {
      const i = r.issues && [...r.issues];
      if (r = await e["~run"](r, n), r.issues) {
        for (const o of r.issues) if (!i?.includes(o)) {
          let a = r.value;
          for (const s of t) {
            const u = a[s], l = {
              type: "unknown",
              origin: "value",
              input: a,
              key: s,
              value: u
            };
            if (o.path ? o.path.push(l) : o.path = [l], !u) break;
            a = u;
          }
        }
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e, t, r) {
  return typeof e.default == "function" ? e.default(t, r) : e.default;
}
// @__NO_SIDE_EFFECTS__
function $i(e) {
  if ("entries" in e) {
    const t = {};
    for (const r in e.entries) t[r] = /* @__PURE__ */ $i(e.entries[r]);
    return t;
  }
  return "items" in e ? e.items.map($i) : /* @__PURE__ */ pe(e);
}
// @__NO_SIDE_EFFECTS__
async function Ti(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, r]) => [t, await /* @__PURE__ */ Ti(r)]))) : "items" in e ? Promise.all(e.items.map(Ti)) : /* @__PURE__ */ pe(e);
}
// @__NO_SIDE_EFFECTS__
function jd(e) {
  return /* @__PURE__ */ Dr(e, "description");
}
// @__NO_SIDE_EFFECTS__
function Dd(e) {
  const t = [];
  function r(n) {
    if ("pipe" in n) {
      for (const i of n.pipe) if (i.kind === "schema" && "pipe" in i) r(i);
      else if (i.kind === "metadata" && i.type === "examples") for (const o of i.examples) t.push(o);
    }
  }
  return r(e), t;
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  if ("entries" in e) {
    const t = {};
    for (const r in e.entries) t[r] = /* @__PURE__ */ Ni(e.entries[r]);
    return t;
  }
  return "items" in e ? e.items.map(Ni) : /* @__PURE__ */ Pe(e);
}
// @__NO_SIDE_EFFECTS__
async function Ci(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, r]) => [t, await /* @__PURE__ */ Ci(r)]))) : "items" in e ? Promise.all(e.items.map(Ci)) : /* @__PURE__ */ Pe(e);
}
// @__NO_SIDE_EFFECTS__
function Id(e) {
  const t = {};
  function r(n) {
    if ("pipe" in n)
      for (const i of n.pipe) i.kind === "schema" && "pipe" in i ? r(i) : i.kind === "metadata" && i.type === "metadata" && Object.assign(t, i.metadata);
  }
  return r(e), t;
}
// @__NO_SIDE_EFFECTS__
function Rd(e) {
  return /* @__PURE__ */ Dr(e, "title");
}
// @__NO_SIDE_EFFECTS__
function Md(e, t) {
  return !e["~run"]({ value: t }, Rr).issues;
}
// @__NO_SIDE_EFFECTS__
function sr() {
  return {
    kind: "schema",
    type: "any",
    reference: sr,
    expects: "any",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _t(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: _t,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < i.length; o++) {
          const a = i[o], s = this.item["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zf(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: Zf,
    expects: "Array",
    async: !0,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(i.map((a) => this.item["~run"]({ value: a }, n)));
        for (let a = 0; a < o.length; a++) {
          const s = o[a];
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: i[a]
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ep(e) {
  return {
    kind: "schema",
    type: "bigint",
    reference: ep,
    expects: "bigint",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "bigint" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tp(e) {
  return {
    kind: "schema",
    type: "blob",
    reference: tp,
    expects: "Blob",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof Blob ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function no(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: no,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "boolean" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rp(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: rp,
    expects: "unknown",
    async: !1,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return this.check(r.value) ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function np(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: np,
    expects: "unknown",
    async: !0,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return await this.check(r.value) ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  return {
    kind: "schema",
    type: "date",
    reference: Mr,
    expects: "Date",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof Date ? isNaN(t.value) ? b(this, "type", t, r, { received: '"Invalid Date"' }) : t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qi(e, t) {
  const r = [];
  for (const n in e) (`${+n}` !== n || typeof e[n] != "string" || !Object.is(e[e[n]], +n)) && r.push(e[n]);
  return {
    kind: "schema",
    type: "enum",
    reference: qi,
    expects: /* @__PURE__ */ Se(r.map(se), "|"),
    async: !1,
    enum: e,
    options: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      return this.options.includes(n.value) ? n.typed = !0 : b(this, "type", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ip(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: ip,
    expects: e.expects,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function op(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: op,
    expects: e.expects,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ap(e) {
  return {
    kind: "schema",
    type: "file",
    reference: ap,
    expects: "File",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof File ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wi(e) {
  return {
    kind: "schema",
    type: "function",
    reference: Wi,
    expects: "Function",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "function" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sp(e, t) {
  return {
    kind: "schema",
    type: "instance",
    reference: sp,
    expects: e.name,
    async: !1,
    class: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value instanceof this.class ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Or(e, t) {
  if (typeof e == typeof t) {
    if (e === t || e instanceof Date && t instanceof Date && +e == +t) return { value: e };
    if (e && t && e.constructor === Object && t.constructor === Object) {
      const r = { ...e };
      for (const n in t) if (n in e) {
        const i = /* @__PURE__ */ Or(e[n], t[n]);
        if (i.issue) return i;
        r[n] = i.value;
      } else r[n] = t[n];
      return { value: r };
    }
    if (Array.isArray(e) && Array.isArray(t) && e.length === t.length) {
      const r = [...e];
      for (let n = 0; n < e.length; n++) {
        const i = /* @__PURE__ */ Or(e[n], t[n]);
        if (i.issue) return i;
        r[n] = i.value;
      }
      return { value: r };
    }
  }
  return { issue: !0 };
}
// @__NO_SIDE_EFFECTS__
function up(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: up,
    expects: /* @__PURE__ */ Se(e.map((r) => r.expects), "&"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      if (this.options.length) {
        const i = r.value;
        let o;
        r.typed = !0;
        for (const a of this.options) {
          const s = a["~run"]({ value: i }, n);
          if (s.issues) {
            if (r.issues) for (const u of s.issues) r.issues.push(u);
            else r.issues = s.issues;
            if (n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.typed && (o ? o.push(s.value) : o = [s.value]);
        }
        if (r.typed) {
          r.value = o[0];
          for (let a = 1; a < o.length; a++) {
            const s = /* @__PURE__ */ Or(r.value, o[a]);
            if (s.issue) {
              b(this, "type", r, n, { received: "unknown" });
              break;
            }
            r.value = s.value;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lp(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: lp,
    expects: /* @__PURE__ */ Se(e.map((r) => r.expects), "&"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      if (this.options.length) {
        const i = r.value;
        let o;
        r.typed = !0;
        const a = await Promise.all(this.options.map((s) => s["~run"]({ value: i }, n)));
        for (const s of a) {
          if (s.issues) {
            if (r.issues) for (const u of s.issues) r.issues.push(u);
            else r.issues = s.issues;
            if (n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.typed && (o ? o.push(s.value) : o = [s.value]);
        }
        if (r.typed) {
          r.value = o[0];
          for (let s = 1; s < o.length; s++) {
            const u = /* @__PURE__ */ Or(r.value, o[s]);
            if (u.issue) {
              b(this, "type", r, n, { received: "unknown" });
              break;
            }
            r.value = u.value;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cp(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: cp,
    expects: "unknown",
    async: !1,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return this.getter(t.value)["~run"](t, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fp(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: fp,
    expects: "unknown",
    async: !0,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(t, r) {
      return (await this.getter(t.value))["~run"](t, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: xr,
    expects: /* @__PURE__ */ se(e),
    async: !1,
    literal: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === this.literal ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pp(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: pp,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const a = this.entries[o];
          if (o in i || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
            const s = o in i ? i[o] : /* @__PURE__ */ pe(a), u = a["~run"]({ value: s }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: o,
                value: s
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
              if (r.issues || (r.issues = u.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            u.typed || (r.typed = !1), r.value[o] = u.value;
          } else if (a.fallback !== void 0) r.value[o] = /* @__PURE__ */ Pe(a);
          else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish" && (b(this, "key", r, n, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: o,
              value: i[o]
            }]
          }), n.abortEarly))
            break;
        }
        if (!r.issues || !n.abortEarly)
          for (const o in i) /* @__PURE__ */ ht(i, o) && !(o in this.entries) && (r.value[o] = i[o]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yp(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: yp,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([a, s]) => {
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in i ? i[a] : await /* @__PURE__ */ pe(s);
            return [
              a,
              u,
              s,
              await s["~run"]({ value: u }, n)
            ];
          }
          return [
            a,
            i[a],
            s,
            null
          ];
        }));
        for (const [a, s, u, l] of o) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], r.issues?.push(h);
            if (r.issues || (r.issues = l.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value[a] = l.value;
        } else if (u.fallback !== void 0) r.value[a] = await /* @__PURE__ */ Pe(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (b(this, "key", r, n, {
          input: void 0,
          expected: `"${a}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: a,
            value: s
          }]
        }), n.abortEarly))
          break;
        if (!r.issues || !n.abortEarly)
          for (const a in i) /* @__PURE__ */ ht(i, a) && !(a in this.entries) && (r.value[a] = i[a]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hp(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: hp,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const a = i[o], s = this.items[o]["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
        if (!r.issues || !n.abortEarly) for (let o = this.items.length; o < i.length; o++) r.value.push(i[o]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dp(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: dp,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (a, s) => {
          const u = i[s];
          return [
            s,
            u,
            await a["~run"]({ value: u }, n)
          ];
        }));
        for (const [a, s, u] of o) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
        if (!r.issues || !n.abortEarly) for (let a = this.items.length; a < i.length; a++) r.value.push(i[a]);
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mp(e, t, r) {
  return {
    kind: "schema",
    type: "map",
    reference: mp,
    expects: "Map",
    async: !1,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        for (const [a, s] of o) {
          const u = this.key["~run"]({ value: a }, i);
          if (u.issues) {
            const c = {
              type: "map",
              origin: "key",
              input: o,
              key: a,
              value: s
            };
            for (const h of u.issues)
              h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: s }, i);
          if (l.issues) {
            const c = {
              type: "map",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), n.value.set(u.value, l.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vp(e, t, r) {
  return {
    kind: "schema",
    type: "map",
    reference: vp,
    expects: "Map",
    async: !0,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        const a = await Promise.all([...o].map(([s, u]) => Promise.all([
          s,
          u,
          this.key["~run"]({ value: s }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [s, u, l, c] of a) {
          if (l.issues) {
            const h = {
              type: "map",
              origin: "key",
              input: o,
              key: s,
              value: u
            };
            for (const O of l.issues)
              O.path ? O.path.unshift(h) : O.path = [h], n.issues?.push(O);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const h = {
              type: "map",
              origin: "value",
              input: o,
              key: s,
              value: u
            };
            for (const O of c.issues)
              O.path ? O.path.unshift(h) : O.path = [h], n.issues?.push(O);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), n.value.set(l.value, c.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gp(e) {
  return {
    kind: "schema",
    type: "nan",
    reference: gp,
    expects: "NaN",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return Number.isNaN(t.value) ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bp(e) {
  return {
    kind: "schema",
    type: "never",
    reference: bp,
    expects: "never",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wp(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: wp,
    expects: "!null",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value !== null && (r = this.wrapped["~run"](r, n)), r.value === null && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _p(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: _p,
    expects: "!null",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value !== null && (r = await this.wrapped["~run"](r, n)), r.value === null && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Op(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Op,
    expects: "(!null & !undefined)",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === null || r.value === void 0 || (r = this.wrapped["~run"](r, n)), (r.value === null || r.value === void 0) && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xp(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: xp,
    expects: "(!null & !undefined)",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === null || r.value === void 0 || (r = await this.wrapped["~run"](r, n)), (r.value === null || r.value === void 0) && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: io,
    expects: "!undefined",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value !== void 0 && (r = this.wrapped["~run"](r, n)), r.value === void 0 && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: oo,
    expects: "!undefined",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value !== void 0 && (r = await this.wrapped["~run"](r, n)), r.value === void 0 && b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Li(e) {
  return {
    kind: "schema",
    type: "null",
    reference: Li,
    expects: "null",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value === null ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ep(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Ep,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === null && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === null) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ap(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Ap,
    expects: `(${e.expects} | null)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === null && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === null) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Er(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: Er,
    expects: `(${e.expects} | null | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return (r.value === null || r.value === void 0) && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === null || r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kp(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: kp,
    expects: `(${e.expects} | null | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return (r.value === null || r.value === void 0) && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === null || r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  return {
    kind: "schema",
    type: "number",
    reference: Fr,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: ao,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const a = this.entries[o];
          if (o in i || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
            const s = o in i ? i[o] : /* @__PURE__ */ pe(a), u = a["~run"]({ value: s }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: o,
                value: s
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
              if (r.issues || (r.issues = u.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            u.typed || (r.typed = !1), r.value[o] = u.value;
          } else if (a.fallback !== void 0) r.value[o] = /* @__PURE__ */ Pe(a);
          else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish" && (b(this, "key", r, n, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: o,
              value: i[o]
            }]
          }), n.abortEarly))
            break;
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sp(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: Sp,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([a, s]) => {
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in i ? i[a] : await /* @__PURE__ */ pe(s);
            return [
              a,
              u,
              s,
              await s["~run"]({ value: u }, n)
            ];
          }
          return [
            a,
            i[a],
            s,
            null
          ];
        }));
        for (const [a, s, u, l] of o) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], r.issues?.push(h);
            if (r.issues || (r.issues = l.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value[a] = l.value;
        } else if (u.fallback !== void 0) r.value[a] = await /* @__PURE__ */ Pe(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (b(this, "key", r, n, {
          input: void 0,
          expected: `"${a}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: a,
            value: s
          }]
        }), n.abortEarly))
          break;
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pp(e, t, r) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Pp,
    expects: "Object",
    async: !1,
    entries: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in o || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in o ? o[a] : /* @__PURE__ */ pe(s), l = s["~run"]({ value: u }, i);
            if (l.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: o,
                key: a,
                value: u
              };
              for (const h of l.issues)
                h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
              if (n.issues || (n.issues = l.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            l.typed || (n.typed = !1), n.value[a] = l.value;
          } else if (s.fallback !== void 0) n.value[a] = /* @__PURE__ */ Pe(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (b(this, "key", n, i, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: o,
              key: a,
              value: o[a]
            }]
          }), i.abortEarly))
            break;
        }
        if (!n.issues || !i.abortEarly) {
          for (const a in o) if (/* @__PURE__ */ ht(o, a) && !(a in this.entries)) {
            const s = this.rest["~run"]({ value: o[a] }, i);
            if (s.issues) {
              const u = {
                type: "object",
                origin: "value",
                input: o,
                key: a,
                value: o[a]
              };
              for (const l of s.issues)
                l.path ? l.path.unshift(u) : l.path = [u], n.issues?.push(l);
              if (n.issues || (n.issues = s.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            s.typed || (n.typed = !1), n.value[a] = s.value;
          }
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jp(e, t, r) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: jp,
    expects: "Object",
    async: !0,
    entries: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        const [a, s] = await Promise.all([Promise.all(Object.entries(this.entries).map(async ([u, l]) => {
          if (u in o || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const c = u in o ? o[u] : await /* @__PURE__ */ pe(l);
            return [
              u,
              c,
              l,
              await l["~run"]({ value: c }, i)
            ];
          }
          return [
            u,
            o[u],
            l,
            null
          ];
        })), Promise.all(Object.entries(o).filter(([u]) => /* @__PURE__ */ ht(o, u) && !(u in this.entries)).map(async ([u, l]) => [
          u,
          l,
          await this.rest["~run"]({ value: l }, i)
        ]))]);
        for (const [u, l, c, h] of a) if (h) {
          if (h.issues) {
            const O = {
              type: "object",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const d of h.issues)
              d.path ? d.path.unshift(O) : d.path = [O], n.issues?.push(d);
            if (n.issues || (n.issues = h.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          h.typed || (n.typed = !1), n.value[u] = h.value;
        } else if (c.fallback !== void 0) n.value[u] = await /* @__PURE__ */ Pe(c);
        else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (b(this, "key", n, i, {
          input: void 0,
          expected: `"${u}"`,
          path: [{
            type: "object",
            origin: "key",
            input: o,
            key: u,
            value: l
          }]
        }), i.abortEarly))
          break;
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of s) {
          if (c.issues) {
            const h = {
              type: "object",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const O of c.issues)
              O.path ? O.path.unshift(h) : O.path = [h], n.issues?.push(O);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value[u] = c.value;
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ot(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: Ot,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: so,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $r(e, t) {
  return {
    kind: "schema",
    type: "picklist",
    reference: $r,
    expects: /* @__PURE__ */ Se(e.map(se), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return this.options.includes(r.value) ? r.typed = !0 : b(this, "type", r, n), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dp(e) {
  return {
    kind: "schema",
    type: "promise",
    reference: Dp,
    expects: "Promise",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value instanceof Promise ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uo(e, t, r) {
  return {
    kind: "schema",
    type: "record",
    reference: uo,
    expects: "Object",
    async: !1,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        for (const a in o) if (/* @__PURE__ */ ht(o, a)) {
          const s = o[a], u = this.key["~run"]({ value: a }, i);
          if (u.issues) {
            const c = {
              type: "object",
              origin: "key",
              input: o,
              key: a,
              value: s
            };
            for (const h of u.issues)
              h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: s }, i);
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], n.issues?.push(h);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), u.typed && (n.value[u.value] = l.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ip(e, t, r) {
  return {
    kind: "schema",
    type: "record",
    reference: Ip,
    expects: "Object",
    async: !0,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        n.typed = !0, n.value = {};
        const a = await Promise.all(Object.entries(o).filter(([s]) => /* @__PURE__ */ ht(o, s)).map(([s, u]) => Promise.all([
          s,
          u,
          this.key["~run"]({ value: s }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [s, u, l, c] of a) {
          if (l.issues) {
            const h = {
              type: "object",
              origin: "key",
              input: o,
              key: s,
              value: u
            };
            for (const O of l.issues)
              O.path = [h], n.issues?.push(O);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const h = {
              type: "object",
              origin: "value",
              input: o,
              key: s,
              value: u
            };
            for (const O of c.issues)
              O.path ? O.path.unshift(h) : O.path = [h], n.issues?.push(O);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), l.typed && (n.value[l.value] = c.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rp(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Rp,
    expects: "Set",
    async: !1,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i instanceof Set) {
        r.typed = !0, r.value = /* @__PURE__ */ new Set();
        for (const o of i) {
          const a = this.value["~run"]({ value: o }, n);
          if (a.issues) {
            const s = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: o
            };
            for (const u of a.issues)
              u.path ? u.path.unshift(s) : u.path = [s], r.issues?.push(u);
            if (r.issues || (r.issues = a.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          a.typed || (r.typed = !1), r.value.add(a.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mp(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Mp,
    expects: "Set",
    async: !0,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i instanceof Set) {
        r.typed = !0, r.value = /* @__PURE__ */ new Set();
        const o = await Promise.all([...i].map(async (a) => [a, await this.value["~run"]({ value: a }, n)]));
        for (const [a, s] of o) {
          if (s.issues) {
            const u = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.add(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fp(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Fp,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const a = this.entries[o];
          if (o in i || (a.type === "exact_optional" || a.type === "optional" || a.type === "nullish") && a.default !== void 0) {
            const s = o in i ? i[o] : /* @__PURE__ */ pe(a), u = a["~run"]({ value: s }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: o,
                value: s
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
              if (r.issues || (r.issues = u.issues), n.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            u.typed || (r.typed = !1), r.value[o] = u.value;
          } else if (a.fallback !== void 0) r.value[o] = /* @__PURE__ */ Pe(a);
          else if (a.type !== "exact_optional" && a.type !== "optional" && a.type !== "nullish" && (b(this, "key", r, n, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: o,
              value: i[o]
            }]
          }), n.abortEarly))
            break;
        }
        if (!r.issues || !n.abortEarly) {
          for (const o in i) if (!(o in this.entries)) {
            b(this, "key", r, n, {
              input: o,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: o,
                value: i[o]
              }]
            });
            break;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $p(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: $p,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (i && typeof i == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([a, s]) => {
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const u = a in i ? i[a] : await /* @__PURE__ */ pe(s);
            return [
              a,
              u,
              s,
              await s["~run"]({ value: u }, n)
            ];
          }
          return [
            a,
            i[a],
            s,
            null
          ];
        }));
        for (const [a, s, u, l] of o) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const h of l.issues)
              h.path ? h.path.unshift(c) : h.path = [c], r.issues?.push(h);
            if (r.issues || (r.issues = l.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value[a] = l.value;
        } else if (u.fallback !== void 0) r.value[a] = await /* @__PURE__ */ Pe(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (b(this, "key", r, n, {
          input: void 0,
          expected: `"${a}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: a,
            value: s
          }]
        }), n.abortEarly))
          break;
        if (!r.issues || !n.abortEarly) {
          for (const a in i) if (!(a in this.entries)) {
            b(this, "key", r, n, {
              input: a,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: a,
                value: i[a]
              }]
            });
            break;
          }
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tp(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Tp,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const a = i[o], s = this.items[o]["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
        !(r.issues && n.abortEarly) && this.items.length < i.length && b(this, "type", r, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Np(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Np,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (a, s) => {
          const u = i[s];
          return [
            s,
            u,
            await a["~run"]({ value: u }, n)
          ];
        }));
        for (const [a, s, u] of o) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
        !(r.issues && n.abortEarly) && this.items.length < i.length && b(this, "type", r, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return {
    kind: "schema",
    type: "string",
    reference: De,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "string" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cp(e) {
  return {
    kind: "schema",
    type: "symbol",
    reference: Cp,
    expects: "symbol",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return typeof t.value == "symbol" ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qp(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: qp,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const a = i[o], s = this.items[o]["~run"]({ value: a }, n);
          if (s.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: o,
              value: a
            };
            for (const l of s.issues)
              l.path ? l.path.unshift(u) : l.path = [u], r.issues?.push(l);
            if (r.issues || (r.issues = s.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wp(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: Wp,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      const i = r.value;
      if (Array.isArray(i)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (a, s) => {
          const u = i[s];
          return [
            s,
            u,
            await a["~run"]({ value: u }, n)
          ];
        }));
        for (const [a, s, u] of o) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], r.issues?.push(c);
            if (r.issues || (r.issues = u.issues), n.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          u.typed || (r.typed = !1), r.value.push(u.value);
        }
      } else b(this, "type", r, n);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lp(e, t, r) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: Lp,
    expects: "Array",
    async: !1,
    items: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (Array.isArray(o)) {
        n.typed = !0, n.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = o[a], u = this.items[a]["~run"]({ value: s }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
        if (!n.issues || !i.abortEarly) for (let a = this.items.length; a < o.length; a++) {
          const s = o[a], u = this.rest["~run"]({ value: s }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: o,
              key: a,
              value: s
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zp(e, t, r) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: zp,
    expects: "Array",
    async: !0,
    items: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (Array.isArray(o)) {
        n.typed = !0, n.value = [];
        const [a, s] = await Promise.all([Promise.all(this.items.map(async (u, l) => {
          const c = o[l];
          return [
            l,
            c,
            await u["~run"]({ value: c }, i)
          ];
        })), Promise.all(o.slice(this.items.length).map(async (u, l) => [
          l + this.items.length,
          u,
          await this.rest["~run"]({ value: u }, i)
        ]))]);
        for (const [u, l, c] of a) {
          if (c.issues) {
            const h = {
              type: "array",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const O of c.issues)
              O.path ? O.path.unshift(h) : O.path = [h], n.issues?.push(O);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of s) {
          if (c.issues) {
            const h = {
              type: "array",
              origin: "value",
              input: o,
              key: u,
              value: l
            };
            for (const O of c.issues)
              O.path ? O.path.unshift(h) : O.path = [h], n.issues?.push(O);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zi(e) {
  return {
    kind: "schema",
    type: "undefined",
    reference: zi,
    expects: "undefined",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value === void 0 ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bp(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: Bp,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gp(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: Gp,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = await /* @__PURE__ */ pe(this, r, n)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ar(e) {
  let t;
  if (e) for (const r of e) if (t) for (const n of r.issues) t.push(n);
  else t = r.issues;
  return t;
}
// @__NO_SIDE_EFFECTS__
function $e(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: $e,
    expects: /* @__PURE__ */ Se(e.map((r) => r.expects), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      let i, o, a;
      for (const s of this.options) {
        const u = s["~run"]({ value: r.value }, n);
        if (u.typed) if (u.issues) o ? o.push(u) : o = [u];
        else {
          i = u;
          break;
        }
        else a ? a.push(u) : a = [u];
      }
      if (i) return i;
      if (o) {
        if (o.length === 1) return o[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Ar(o) }), r.typed = !0;
      } else {
        if (a?.length === 1) return a[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Ar(a) });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Up(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: Up,
    expects: /* @__PURE__ */ Se(e.map((r) => r.expects), "|"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(r, n) {
      let i, o, a;
      for (const s of this.options) {
        const u = await s["~run"]({ value: r.value }, n);
        if (u.typed) if (u.issues) o ? o.push(u) : o = [u];
        else {
          i = u;
          break;
        }
        else a ? a.push(u) : a = [u];
      }
      if (i) return i;
      if (o) {
        if (o.length === 1) return o[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Ar(o) }), r.typed = !0;
      } else {
        if (a?.length === 1) return a[0];
        b(this, "type", r, n, { issues: /* @__PURE__ */ Ar(a) });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hp() {
  return {
    kind: "schema",
    type: "unknown",
    reference: Hp,
    expects: "unknown",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vp(e, t, r) {
  return {
    kind: "schema",
    type: "variant",
    reference: Vp,
    expects: "Object",
    async: !1,
    key: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        let a, s = 0, u = this.key, l = [];
        const c = (h, O) => {
          for (const d of h.options) {
            if (d.type === "variant") c(d, new Set(O).add(d.key));
            else {
              let m = !0, y = 0;
              for (const g of O) {
                const S = d.entries[g];
                if (g in o ? S["~run"]({
                  typed: !1,
                  value: o[g]
                }, Rr).issues : S.type !== "exact_optional" && S.type !== "optional" && S.type !== "nullish") {
                  m = !1, u !== g && (s < y || s === y && g in o && !(u in o)) && (s = y, u = g, l = []), u === g && l.push(d.entries[g].expects);
                  break;
                }
                y++;
              }
              if (m) {
                const g = d["~run"]({ value: o }, i);
                (!a || !a.typed && g.typed) && (a = g);
              }
            }
            if (a && !a.issues) break;
          }
        };
        if (c(this, /* @__PURE__ */ new Set([this.key])), a) return a;
        b(this, "type", n, i, {
          input: o[u],
          expected: /* @__PURE__ */ Se(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: u,
            value: o[u]
          }]
        });
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xp(e, t, r) {
  return {
    kind: "schema",
    type: "variant",
    reference: Xp,
    expects: "Object",
    async: !0,
    key: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(n, i) {
      const o = n.value;
      if (o && typeof o == "object") {
        let a, s = 0, u = this.key, l = [];
        const c = async (h, O) => {
          for (const d of h.options) {
            if (d.type === "variant") await c(d, new Set(O).add(d.key));
            else {
              let m = !0, y = 0;
              for (const g of O) {
                const S = d.entries[g];
                if (g in o ? (await S["~run"]({
                  typed: !1,
                  value: o[g]
                }, Rr)).issues : S.type !== "exact_optional" && S.type !== "optional" && S.type !== "nullish") {
                  m = !1, u !== g && (s < y || s === y && g in o && !(u in o)) && (s = y, u = g, l = []), u === g && l.push(d.entries[g].expects);
                  break;
                }
                y++;
              }
              if (m) {
                const g = await d["~run"]({ value: o }, i);
                (!a || !a.typed && g.typed) && (a = g);
              }
            }
            if (a && !a.issues) break;
          }
        };
        if (await c(this, /* @__PURE__ */ new Set([this.key])), a) return a;
        b(this, "type", n, i, {
          input: o[u],
          expected: /* @__PURE__ */ Se(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: u,
            value: o[u]
          }]
        });
      } else b(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  return {
    kind: "schema",
    type: "void",
    reference: Bi,
    expects: "void",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      return t.value === void 0 ? t.typed = !0 : b(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fd(e, t) {
  return /* @__PURE__ */ $r(Object.keys(e.entries), t);
}
// @__NO_SIDE_EFFECTS__
function $d(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(r, n) {
      return e["~run"](r, {
        ...n,
        message: t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Td(e, t) {
  const r = { ...e.entries };
  for (const n of t) delete r[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
function Kp(e, t, r) {
  const n = e["~run"]({ value: t }, /* @__PURE__ */ St(r));
  if (n.issues) throw new ze(n.issues);
  return n.value;
}
async function Jp(e, t, r) {
  const n = await e["~run"]({ value: t }, /* @__PURE__ */ St(r));
  if (n.issues) throw new ze(n.issues);
  return n.value;
}
// @__NO_SIDE_EFFECTS__
function Nd(e, t) {
  const r = (n) => Kp(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function Cd(e, t) {
  const r = (n) => Jp(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function qd(e, t) {
  const r = {};
  for (const n in e.entries) r[n] = !t || t.includes(n) ? /* @__PURE__ */ Ot(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wd(e, t) {
  const r = {};
  for (const n in e.entries) r[n] = !t || t.includes(n) ? /* @__PURE__ */ so(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ld(e, t) {
  const r = {};
  for (const n of t) r[n] = e.entries[n];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Te(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    "~run"(t, r) {
      for (const n of e) if (n.kind !== "metadata") {
        if (t.issues && (n.kind === "schema" || n.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !r.abortEarly && !r.abortPipeEarly) && (t = n["~run"](t, r));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zd(...e) {
  return {
    ...e[0],
    pipe: e,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    },
    async "~run"(t, r) {
      for (const n of e) if (n.kind !== "metadata") {
        if (t.issues && (n.kind === "schema" || n.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !r.abortEarly && !r.abortPipeEarly) && (t = await n["~run"](t, r));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bd(e, t, r) {
  const n = Array.isArray(t) ? t : void 0, i = Array.isArray(t) ? r : t, o = {};
  for (const a in e.entries) o[a] = !n || n.includes(a) ? /* @__PURE__ */ io(e.entries[a], i) : e.entries[a];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gd(e, t, r) {
  const n = Array.isArray(t) ? t : void 0, i = Array.isArray(t) ? r : t, o = {};
  for (const a in e.entries) o[a] = !n || n.includes(a) ? /* @__PURE__ */ oo(e.entries[a], i) : e.entries[a];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ I(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qt(e, t, r) {
  const n = e["~run"]({ value: t }, /* @__PURE__ */ St(r));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function Tr(e, t, r) {
  const n = await e["~run"]({ value: t }, /* @__PURE__ */ St(r));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
function Ud(e, t) {
  const r = (n) => /* @__PURE__ */ Qt(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function Hd(e, t) {
  const r = (n) => /* @__PURE__ */ Tr(e, n, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function Vd(e) {
  let t = "";
  for (const r of e) {
    t && (t += `
`), t += `× ${r.message}`;
    const n = /* @__PURE__ */ Ir(r);
    n && (t += `
  → at ${n}`);
  }
  return t;
}
// @__NO_SIDE_EFFECTS__
function Xd(e) {
  return e.wrapped;
}
const Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE64_REGEX: Zu,
  BIC_REGEX: el,
  CUID2_REGEX: tl,
  DECIMAL_REGEX: rl,
  DIGITS_REGEX: nl,
  DOMAIN_REGEX: il,
  EMAIL_REGEX: ol,
  EMOJI_REGEX: al,
  HEXADECIMAL_REGEX: sl,
  HEX_COLOR_REGEX: ul,
  IMEI_REGEX: ll,
  IPV4_REGEX: cl,
  IPV6_REGEX: fl,
  IP_REGEX: pl,
  ISO_DATE_REGEX: yl,
  ISO_DATE_TIME_REGEX: hl,
  ISO_DATE_TIME_SECOND_REGEX: dl,
  ISO_TIMESTAMP_REGEX: gl,
  ISO_TIME_REGEX: ml,
  ISO_TIME_SECOND_REGEX: vl,
  ISO_WEEK_REGEX: bl,
  ISRC_REGEX: _l,
  JWS_COMPACT_REGEX: wl,
  MAC48_REGEX: Ol,
  MAC64_REGEX: xl,
  MAC_REGEX: El,
  NANO_ID_REGEX: Al,
  OCTAL_REGEX: kl,
  RFC_EMAIL_REGEX: Sl,
  SLUG_REGEX: Pl,
  ULID_REGEX: jl,
  UUID_REGEX: Dl,
  ValiError: ze,
  _addIssue: b,
  _cloneDataset: _r,
  _formatCase: nr,
  _getByteCount: ir,
  _getGraphemeCount: or,
  _getLastMetadata: Dr,
  _getStandardProps: I,
  _getWordCount: ar,
  _isLuhnAlgo: to,
  _isValidObjectKey: ht,
  _joinExpects: Se,
  _stringify: se,
  any: sr,
  args: Ju,
  argsAsync: Yu,
  array: _t,
  arrayAsync: Zf,
  assert: _d,
  awaitAsync: Qu,
  base64: Il,
  bic: Rl,
  bigint: ep,
  blob: tp,
  boolean: no,
  brand: Ml,
  bytes: Fl,
  cache: Od,
  cacheAsync: xd,
  check: $l,
  checkAsync: Tl,
  checkItems: Nl,
  checkItemsAsync: Cl,
  config: Ed,
  creditCard: ql,
  cuid2: Wl,
  custom: rp,
  customAsync: np,
  date: Mr,
  decimal: Ll,
  deleteGlobalConfig: Zh,
  deleteGlobalMessage: td,
  deleteSchemaMessage: nd,
  deleteSpecificMessage: od,
  description: zl,
  digits: Bl,
  domain: Gl,
  email: Ul,
  emoji: Hl,
  empty: Vl,
  endsWith: Xl,
  entries: Kl,
  entriesFromList: sd,
  entriesFromObjects: ud,
  enum: qi,
  enum_: qi,
  everyItem: Jl,
  exactOptional: ip,
  exactOptionalAsync: op,
  examples: Yl,
  excludes: Ql,
  fallback: Ad,
  fallbackAsync: kd,
  file: ap,
  filterItems: Zl,
  findItem: ec,
  finite: tc,
  flatten: Fi,
  flavor: rc,
  forward: Sd,
  forwardAsync: Pd,
  function: Wi,
  function_: Wi,
  getDefault: pe,
  getDefaults: $i,
  getDefaultsAsync: Ti,
  getDescription: jd,
  getDotPath: Ir,
  getExamples: Dd,
  getFallback: Pe,
  getFallbacks: Ni,
  getFallbacksAsync: Ci,
  getGlobalConfig: St,
  getGlobalMessage: Vu,
  getMetadata: Id,
  getSchemaMessage: Xu,
  getSpecificMessage: Ku,
  getTitle: Rd,
  graphemes: nc,
  gtValue: ic,
  guard: oc,
  hash: ac,
  hexColor: uc,
  hexadecimal: sc,
  imei: lc,
  includes: cc,
  instance: sp,
  integer: ro,
  intersect: up,
  intersectAsync: lp,
  ip: fc,
  ipv4: pc,
  ipv6: yc,
  is: Md,
  isOfKind: ld,
  isOfType: cd,
  isValiError: fd,
  isbn: hc,
  isoDate: mc,
  isoDateTime: vc,
  isoDateTimeSecond: gc,
  isoTime: bc,
  isoTimeSecond: wc,
  isoTimestamp: _c,
  isoWeek: Oc,
  isrc: dc,
  jwsCompact: xc,
  keyof: Fd,
  lazy: cp,
  lazyAsync: fp,
  length: Ec,
  literal: xr,
  looseObject: pp,
  looseObjectAsync: yp,
  looseTuple: hp,
  looseTupleAsync: dp,
  ltValue: Ac,
  mac: kc,
  mac48: Sc,
  mac64: Pc,
  map: mp,
  mapAsync: vp,
  mapItems: jc,
  maxBytes: Dc,
  maxEntries: Ic,
  maxGraphemes: Rc,
  maxLength: Mc,
  maxSize: Fc,
  maxValue: $c,
  maxWords: Tc,
  message: $d,
  metadata: Nc,
  mimeType: Cc,
  minBytes: qc,
  minEntries: Wc,
  minGraphemes: Lc,
  minLength: zc,
  minSize: Bc,
  minValue: Gc,
  minWords: Uc,
  multipleOf: Hc,
  nan: gp,
  nanoid: Vc,
  never: bp,
  nonEmpty: Xc,
  nonNullable: wp,
  nonNullableAsync: _p,
  nonNullish: Op,
  nonNullishAsync: xp,
  nonOptional: io,
  nonOptionalAsync: oo,
  normalize: Kc,
  notBytes: Jc,
  notEntries: Yc,
  notGraphemes: Qc,
  notLength: Zc,
  notSize: ef,
  notValue: tf,
  notValues: rf,
  notWords: nf,
  null: Li,
  null_: Li,
  nullable: Ep,
  nullableAsync: Ap,
  nullish: Er,
  nullishAsync: kp,
  number: Fr,
  object: ao,
  objectAsync: Sp,
  objectWithRest: Pp,
  objectWithRestAsync: jp,
  octal: of,
  omit: Td,
  optional: Ot,
  optionalAsync: so,
  parse: Kp,
  parseAsync: Jp,
  parseBoolean: af,
  parseJson: sf,
  parser: Nd,
  parserAsync: Cd,
  partial: qd,
  partialAsync: Wd,
  partialCheck: lf,
  partialCheckAsync: cf,
  pick: Ld,
  picklist: $r,
  pipe: Te,
  pipeAsync: zd,
  promise: Dp,
  rawCheck: ff,
  rawCheckAsync: pf,
  rawTransform: yf,
  rawTransformAsync: hf,
  readonly: df,
  record: uo,
  recordAsync: Ip,
  reduceItems: mf,
  regex: vf,
  required: Bd,
  requiredAsync: Gd,
  returns: gf,
  returnsAsync: bf,
  rfcEmail: wf,
  safeInteger: _f,
  safeParse: Qt,
  safeParseAsync: Tr,
  safeParser: Ud,
  safeParserAsync: Hd,
  set: Rp,
  setAsync: Mp,
  setGlobalConfig: Qh,
  setGlobalMessage: ed,
  setSchemaMessage: rd,
  setSpecificMessage: id,
  size: Of,
  slug: xf,
  someItem: Ef,
  sortItems: Af,
  startsWith: kf,
  strictObject: Fp,
  strictObjectAsync: $p,
  strictTuple: Tp,
  strictTupleAsync: Np,
  string: De,
  stringifyJson: Sf,
  summarize: Vd,
  symbol: Cp,
  title: Pf,
  toBigint: jf,
  toBoolean: Df,
  toCamelCase: If,
  toDate: Rf,
  toKebabCase: Mf,
  toLowerCase: Ff,
  toMaxValue: $f,
  toMinValue: Tf,
  toNumber: Nf,
  toPascalCase: Cf,
  toSnakeCase: qf,
  toString: Wf,
  toUpperCase: Lf,
  transform: ke,
  transformAsync: zf,
  trim: Bf,
  trimEnd: Gf,
  trimStart: Uf,
  tuple: qp,
  tupleAsync: Wp,
  tupleWithRest: Lp,
  tupleWithRestAsync: zp,
  ulid: Hf,
  undefined: zi,
  undefined_: zi,
  undefinedable: Bp,
  undefinedableAsync: Gp,
  union: $e,
  unionAsync: Up,
  unknown: Hp,
  unwrap: Xd,
  url: Vf,
  uuid: Xf,
  value: Kf,
  values: Jf,
  variant: Vp,
  variantAsync: Xp,
  void: Bi,
  void_: Bi,
  words: Yf
}, Symbol.toStringTag, { value: "Module" })), kr = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Yp(e) {
  return Number(e) >= 0;
}
function Jd(e) {
  return typeof e == "object" && e !== null;
}
function Yd(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Uo(e) {
  if (!Jd(e) || Yd(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Qp(e, t) {
  return Object.keys(t).forEach((r) => {
    if (Uo(t[r]) && Uo(e[r])) {
      e[r] || (e[r] = {}), Qp(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function Qd(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let n = 1; n < t.length; n++) {
    if (Yp(t[n])) {
      r += `[${t[n]}]`;
      continue;
    }
    r += `.${t[n]}`;
  }
  return r;
}
function Zd(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(n) {
      const i = await /* @__PURE__ */ Tr(e, n, t);
      if (i.success)
        return {
          value: i.output,
          errors: []
        };
      const o = {};
      return Zp(i.issues, o), {
        errors: Object.values(o)
      };
    },
    cast(n) {
      if (e.async)
        return n;
      const i = /* @__PURE__ */ Qt(e, n, t);
      if (i.success)
        return i.output;
      const o = /* @__PURE__ */ pe(/* @__PURE__ */ Ot(e));
      return kr(o) && kr(n) ? Qp(o, n) : n;
    },
    describe(n) {
      try {
        if (!n)
          return {
            required: !Ho(e),
            exists: !0
          };
        const i = Gi(n, e);
        return i ? {
          required: !Ho(i),
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
function Zp(e, t) {
  e.forEach((r) => {
    const n = Qd(/* @__PURE__ */ Ir(r) || "");
    r.issues && (Zp(r.issues.flatMap((i) => i.issues || []), t), !n) || (t[n] || (t[n] = { errors: [], path: n }), t[n].errors.push(r.message));
  });
}
function Gi(e, t) {
  var r, n, i, o;
  if (Vo(t))
    return (r = t.options.map((u) => Gi(e, u)).find(Boolean)) !== null && r !== void 0 ? r : null;
  if (Xo(t))
    return (n = t.options.map((u) => Gi(e, u)).find(Boolean)) !== null && n !== void 0 ? n : null;
  if (!hr(t))
    return null;
  if (Xh(e))
    return t.entries[Kh(e)];
  const a = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let s = t;
  for (let u = 0; u <= a.length; u++) {
    const l = a[u];
    if (!l || !s)
      return s;
    if (Vo(s) && (s = (i = s.options.find((c) => hr(c) && c.entries[l])) !== null && i !== void 0 ? i : s), Xo(s) && (s = (o = s.options.find((c) => hr(c) && c.entries[l])) !== null && o !== void 0 ? o : s), hr(s)) {
      s = s.entries[l] || null;
      continue;
    }
    Yp(l) && em(s) && (s = s.item);
  }
  return null;
}
function Ho(e) {
  return e.type === "optional";
}
function em(e) {
  return kr(e) && "item" in e;
}
function hr(e) {
  return kr(e) && "entries" in e;
}
function Vo(e) {
  return e.type === "intersect";
}
function Xo(e) {
  return e.type === "variant";
}
var Ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function rm(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Jo, Yo;
function Pt() {
  return Yo || (Yo = 1, Jo = TypeError), Jo;
}
const nm = {}, im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nm
}, Symbol.toStringTag, { value: "Module" })), om = /* @__PURE__ */ rm(im);
var cn, Qo;
function Nr() {
  if (Qo) return cn;
  Qo = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, h = c ? WeakSet.prototype.has : null, O = typeof WeakRef == "function" && WeakRef.prototype, d = O ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, S = String.prototype.match, w = String.prototype.slice, P = String.prototype.replace, D = String.prototype.toUpperCase, j = String.prototype.toLowerCase, x = RegExp.prototype.test, _ = Array.prototype.concat, E = Array.prototype.join, v = Array.prototype.slice, A = Math.floor, k = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, M = Object.getOwnPropertySymbols, L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, F = typeof Symbol == "function" && typeof Symbol.iterator == "object", W = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === F || !0) ? Symbol.toStringTag : null, V = Object.prototype.propertyIsEnumerable, N = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(f) {
    return f.__proto__;
  } : null);
  function R(f, p) {
    if (f === 1 / 0 || f === -1 / 0 || f !== f || f && f > -1e3 && f < 1e3 || x.call(/e/, p))
      return p;
    var q = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof f == "number") {
      var U = f < 0 ? -A(-f) : A(f);
      if (U !== f) {
        var X = String(U), $ = w.call(p, X.length + 1);
        return P.call(X, q, "$&_") + "." + P.call(P.call($, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return P.call(p, q, "$&_");
  }
  var B = om, T = B.custom, C = Z(T) ? T : null, te = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ue = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  cn = function f(p, q, U, X) {
    var $ = q || {};
    if (Y($, "quoteStyle") && !Y(te, $.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Y($, "maxStringLength") && (typeof $.maxStringLength == "number" ? $.maxStringLength < 0 && $.maxStringLength !== 1 / 0 : $.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var he = Y($, "customInspect") ? $.customInspect : !0;
    if (typeof he != "boolean" && he !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Y($, "indent") && $.indent !== null && $.indent !== "	" && !(parseInt($.indent, 10) === $.indent && $.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Y($, "numericSeparator") && typeof $.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var be = $.numericSeparator;
    if (typeof p > "u")
      return "undefined";
    if (p === null)
      return "null";
    if (typeof p == "boolean")
      return p ? "true" : "false";
    if (typeof p == "string")
      return Mt(p, $);
    if (typeof p == "number") {
      if (p === 0)
        return 1 / 0 / p > 0 ? "0" : "-0";
      var re = String(p);
      return be ? R(p, re) : re;
    }
    if (typeof p == "bigint") {
      var de = String(p) + "n";
      return be ? R(p, de) : de;
    }
    var tt = typeof $.depth > "u" ? 5 : $.depth;
    if (typeof U > "u" && (U = 0), U >= tt && tt > 0 && typeof p == "object")
      return fe(p) ? "[Array]" : "[Object]";
    var xe = on($, U);
    if (typeof X > "u")
      X = [];
    else if (ce(X, p) >= 0)
      return "[Circular]";
    function le(Ee, We, sn) {
      if (We && (X = v.call(X), X.push(We)), sn) {
        var Bt = {
          depth: $.depth
        };
        return Y($, "quoteStyle") && (Bt.quoteStyle = $.quoteStyle), f(Ee, Bt, U + 1, X);
      }
      return f(Ee, $, U + 1, X);
    }
    if (typeof p == "function" && !K(p)) {
      var Tt = we(p), Nt = Ce(p, le);
      return "[Function" + (Tt ? ": " + Tt : " (anonymous)") + "]" + (Nt.length > 0 ? " { " + E.call(Nt, ", ") + " }" : "");
    }
    if (Z(p)) {
      var Ct = F ? P.call(String(p), /^(Symbol\(.*\))_[^)]*$/, "$1") : L.call(p);
      return typeof p == "object" && !F ? Re(Ct) : Ct;
    }
    if (tn(p)) {
      for (var Me = "<" + j.call(String(p.nodeName)), rt = p.attributes || [], qe = 0; qe < rt.length; qe++)
        Me += " " + rt[qe].name + "=" + me(ve(rt[qe].value), "double", $);
      return Me += ">", p.childNodes && p.childNodes.length && (Me += "..."), Me += "</" + j.call(String(p.nodeName)) + ">", Me;
    }
    if (fe(p)) {
      if (p.length === 0)
        return "[]";
      var nt = Ce(p, le);
      return xe && !nn(nt) ? "[" + et(nt, xe) + "]" : "[ " + E.call(nt, ", ") + " ]";
    }
    if (z(p)) {
      var it = Ce(p, le);
      return !("cause" in Error.prototype) && "cause" in p && !V.call(p, "cause") ? "{ [" + String(p) + "] " + E.call(_.call("[cause]: " + le(p.cause), it), ", ") + " }" : it.length === 0 ? "[" + String(p) + "]" : "{ [" + String(p) + "] " + E.call(it, ", ") + " }";
    }
    if (typeof p == "object" && he) {
      if (C && typeof p[C] == "function" && B)
        return B(p, { depth: tt - U });
      if (he !== "symbol" && typeof p.inspect == "function")
        return p.inspect();
    }
    if (ye(p)) {
      var qt = [];
      return n && n.call(p, function(Ee, We) {
        qt.push(le(We, p, !0) + " => " + le(Ee, p));
      }), Ft("Map", r.call(p), qt, xe);
    }
    if (Ve(p)) {
      var Wt = [];
      return s && s.call(p, function(Ee) {
        Wt.push(le(Ee, p));
      }), Ft("Set", a.call(p), Wt, xe);
    }
    if (_e(p))
      return Ze("WeakMap");
    if (en(p))
      return Ze("WeakSet");
    if (Oe(p))
      return Ze("WeakRef");
    if (H(p))
      return Re(le(Number(p)));
    if (Q(p))
      return Re(le(k.call(p)));
    if (J(p))
      return Re(m.call(p));
    if (G(p))
      return Re(le(String(p)));
    if (typeof window < "u" && p === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && p === globalThis || typeof Ko < "u" && p === Ko)
      return "{ [object globalThis] }";
    if (!ge(p) && !K(p)) {
      var ot = Ce(p, le), Lt = N ? N(p) === Object.prototype : p instanceof Object || p.constructor === Object, at = p instanceof Object ? "" : "null prototype", zt = !Lt && W && Object(p) === p && W in p ? w.call(oe(p), 8, -1) : at ? "Object" : "", an = Lt || typeof p.constructor != "function" ? "" : p.constructor.name ? p.constructor.name + " " : "", st = an + (zt || at ? "[" + E.call(_.call([], zt || [], at || []), ": ") + "] " : "");
      return ot.length === 0 ? st + "{}" : xe ? st + "{" + et(ot, xe) + "}" : st + "{ " + E.call(ot, ", ") + " }";
    }
    return String(p);
  };
  function me(f, p, q) {
    var U = q.quoteStyle || p, X = te[U];
    return X + f + X;
  }
  function ve(f) {
    return P.call(String(f), /"/g, "&quot;");
  }
  function ne(f) {
    return !W || !(typeof f == "object" && (W in f || typeof f[W] < "u"));
  }
  function fe(f) {
    return oe(f) === "[object Array]" && ne(f);
  }
  function ge(f) {
    return oe(f) === "[object Date]" && ne(f);
  }
  function K(f) {
    return oe(f) === "[object RegExp]" && ne(f);
  }
  function z(f) {
    return oe(f) === "[object Error]" && ne(f);
  }
  function G(f) {
    return oe(f) === "[object String]" && ne(f);
  }
  function H(f) {
    return oe(f) === "[object Number]" && ne(f);
  }
  function J(f) {
    return oe(f) === "[object Boolean]" && ne(f);
  }
  function Z(f) {
    if (F)
      return f && typeof f == "object" && f instanceof Symbol;
    if (typeof f == "symbol")
      return !0;
    if (!f || typeof f != "object" || !L)
      return !1;
    try {
      return L.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Q(f) {
    if (!f || typeof f != "object" || !k)
      return !1;
    try {
      return k.call(f), !0;
    } catch {
    }
    return !1;
  }
  var ie = Object.prototype.hasOwnProperty || function(f) {
    return f in this;
  };
  function Y(f, p) {
    return ie.call(f, p);
  }
  function oe(f) {
    return y.call(f);
  }
  function we(f) {
    if (f.name)
      return f.name;
    var p = S.call(g.call(f), /^function\s*([\w$]+)/);
    return p ? p[1] : null;
  }
  function ce(f, p) {
    if (f.indexOf)
      return f.indexOf(p);
    for (var q = 0, U = f.length; q < U; q++)
      if (f[q] === p)
        return q;
    return -1;
  }
  function ye(f) {
    if (!r || !f || typeof f != "object")
      return !1;
    try {
      r.call(f);
      try {
        a.call(f);
      } catch {
        return !0;
      }
      return f instanceof Map;
    } catch {
    }
    return !1;
  }
  function _e(f) {
    if (!l || !f || typeof f != "object")
      return !1;
    try {
      l.call(f, l);
      try {
        h.call(f, h);
      } catch {
        return !0;
      }
      return f instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Oe(f) {
    if (!d || !f || typeof f != "object")
      return !1;
    try {
      return d.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Ve(f) {
    if (!a || !f || typeof f != "object")
      return !1;
    try {
      a.call(f);
      try {
        r.call(f);
      } catch {
        return !0;
      }
      return f instanceof Set;
    } catch {
    }
    return !1;
  }
  function en(f) {
    if (!h || !f || typeof f != "object")
      return !1;
    try {
      h.call(f, h);
      try {
        l.call(f, l);
      } catch {
        return !0;
      }
      return f instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function tn(f) {
    return !f || typeof f != "object" ? !1 : typeof HTMLElement < "u" && f instanceof HTMLElement ? !0 : typeof f.nodeName == "string" && typeof f.getAttribute == "function";
  }
  function Mt(f, p) {
    if (f.length > p.maxStringLength) {
      var q = f.length - p.maxStringLength, U = "... " + q + " more character" + (q > 1 ? "s" : "");
      return Mt(w.call(f, 0, p.maxStringLength), p) + U;
    }
    var X = ue[p.quoteStyle || "single"];
    X.lastIndex = 0;
    var $ = P.call(P.call(f, X, "\\$1"), /[\x00-\x1f]/g, rn);
    return me($, "single", p);
  }
  function rn(f) {
    var p = f.charCodeAt(0), q = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[p];
    return q ? "\\" + q : "\\x" + (p < 16 ? "0" : "") + D.call(p.toString(16));
  }
  function Re(f) {
    return "Object(" + f + ")";
  }
  function Ze(f) {
    return f + " { ? }";
  }
  function Ft(f, p, q, U) {
    var X = U ? et(q, U) : E.call(q, ", ");
    return f + " (" + p + ") {" + X + "}";
  }
  function nn(f) {
    for (var p = 0; p < f.length; p++)
      if (ce(f[p], `
`) >= 0)
        return !1;
    return !0;
  }
  function on(f, p) {
    var q;
    if (f.indent === "	")
      q = "	";
    else if (typeof f.indent == "number" && f.indent > 0)
      q = E.call(Array(f.indent + 1), " ");
    else
      return null;
    return {
      base: q,
      prev: E.call(Array(p + 1), q)
    };
  }
  function et(f, p) {
    if (f.length === 0)
      return "";
    var q = `
` + p.prev + p.base;
    return q + E.call(f, "," + q) + `
` + p.prev;
  }
  function Ce(f, p) {
    var q = fe(f), U = [];
    if (q) {
      U.length = f.length;
      for (var X = 0; X < f.length; X++)
        U[X] = Y(f, X) ? p(f[X], f) : "";
    }
    var $ = typeof M == "function" ? M(f) : [], he;
    if (F) {
      he = {};
      for (var be = 0; be < $.length; be++)
        he["$" + $[be]] = $[be];
    }
    for (var re in f)
      Y(f, re) && (q && String(Number(re)) === re && re < f.length || F && he["$" + re] instanceof Symbol || (x.call(/[^\w$]/, re) ? U.push(p(re, f) + ": " + p(f[re], f)) : U.push(re + ": " + p(f[re], f))));
    if (typeof M == "function")
      for (var de = 0; de < $.length; de++)
        V.call(f, $[de]) && U.push("[" + p($[de]) + "]: " + p(f[$[de]], f));
    return U;
  }
  return cn;
}
var fn, Zo;
function am() {
  if (Zo) return fn;
  Zo = 1;
  var e = /* @__PURE__ */ Nr(), t = /* @__PURE__ */ Pt(), r = function(s, u, l) {
    for (var c = s, h; (h = c.next) != null; c = h)
      if (h.key === u)
        return c.next = h.next, l || (h.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = h), h;
  }, n = function(s, u) {
    if (s) {
      var l = r(s, u);
      return l && l.value;
    }
  }, i = function(s, u, l) {
    var c = r(s, u);
    c ? c.value = l : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: s.next,
      value: l
    };
  }, o = function(s, u) {
    return s ? !!r(s, u) : !1;
  }, a = function(s, u) {
    if (s)
      return r(s, u, !0);
  };
  return fn = function() {
    var s, u = {
      assert: function(l) {
        if (!u.has(l))
          throw new t("Side channel does not contain " + e(l));
      },
      delete: function(l) {
        var c = a(s, l);
        return c && s && !s.next && (s = void 0), !!c;
      },
      get: function(l) {
        return n(s, l);
      },
      has: function(l) {
        return o(s, l);
      },
      set: function(l, c) {
        s || (s = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          s,
          l,
          c
        );
      }
    };
    return u;
  }, fn;
}
var ea, ta;
function ey() {
  return ta || (ta = 1, ea = Object), ea;
}
var ra, na;
function sm() {
  return na || (na = 1, ra = Error), ra;
}
var ia, oa;
function um() {
  return oa || (oa = 1, ia = EvalError), ia;
}
var aa, sa;
function lm() {
  return sa || (sa = 1, aa = RangeError), aa;
}
var ua, la;
function cm() {
  return la || (la = 1, ua = ReferenceError), ua;
}
var ca, fa;
function fm() {
  return fa || (fa = 1, ca = SyntaxError), ca;
}
var pa, ya;
function pm() {
  return ya || (ya = 1, pa = URIError), pa;
}
var ha, da;
function ym() {
  return da || (da = 1, ha = Math.abs), ha;
}
var ma, va;
function hm() {
  return va || (va = 1, ma = Math.floor), ma;
}
var ga, ba;
function dm() {
  return ba || (ba = 1, ga = Math.max), ga;
}
var wa, _a;
function mm() {
  return _a || (_a = 1, wa = Math.min), wa;
}
var Oa, xa;
function vm() {
  return xa || (xa = 1, Oa = Math.pow), Oa;
}
var Ea, Aa;
function gm() {
  return Aa || (Aa = 1, Ea = Math.round), Ea;
}
var ka, Sa;
function bm() {
  return Sa || (Sa = 1, ka = Number.isNaN || function(e) {
    return e !== e;
  }), ka;
}
var pn, Pa;
function wm() {
  if (Pa) return pn;
  Pa = 1;
  var e = /* @__PURE__ */ bm();
  return pn = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, pn;
}
var ja, Da;
function _m() {
  return Da || (Da = 1, ja = Object.getOwnPropertyDescriptor), ja;
}
var yn, Ia;
function ty() {
  if (Ia) return yn;
  Ia = 1;
  var e = /* @__PURE__ */ _m();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return yn = e, yn;
}
var hn, Ra;
function Om() {
  if (Ra) return hn;
  Ra = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return hn = e, hn;
}
var Ma, Fa;
function xm() {
  return Fa || (Fa = 1, Ma = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = /* @__PURE__ */ Symbol("test"), r = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var n = 42;
    e[t] = n;
    for (var i in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, t)
      );
      if (a.value !== n || a.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Ma;
}
var dn, $a;
function Em() {
  if ($a) return dn;
  $a = 1;
  var e = typeof Symbol < "u" && Symbol, t = xm();
  return dn = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, dn;
}
var Ta, Na;
function ry() {
  return Na || (Na = 1, Ta = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ta;
}
var mn, Ca;
function ny() {
  if (Ca) return mn;
  Ca = 1;
  var e = /* @__PURE__ */ ey();
  return mn = e.getPrototypeOf || null, mn;
}
var vn, qa;
function Am() {
  if (qa) return vn;
  qa = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(s, u) {
    for (var l = [], c = 0; c < s.length; c += 1)
      l[c] = s[c];
    for (var h = 0; h < u.length; h += 1)
      l[h + s.length] = u[h];
    return l;
  }, o = function(s, u) {
    for (var l = [], c = u, h = 0; c < s.length; c += 1, h += 1)
      l[h] = s[c];
    return l;
  }, a = function(s, u) {
    for (var l = "", c = 0; c < s.length; c += 1)
      l += s[c], c + 1 < s.length && (l += u);
    return l;
  };
  return vn = function(s) {
    var u = this;
    if (typeof u != "function" || t.apply(u) !== n)
      throw new TypeError(e + u);
    for (var l = o(arguments, 1), c, h = function() {
      if (this instanceof c) {
        var g = u.apply(
          this,
          i(l, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return u.apply(
        s,
        i(l, arguments)
      );
    }, O = r(0, u.length - l.length), d = [], m = 0; m < O; m++)
      d[m] = "$" + m;
    if (c = Function("binder", "return function (" + a(d, ",") + "){ return binder.apply(this,arguments); }")(h), u.prototype) {
      var y = function() {
      };
      y.prototype = u.prototype, c.prototype = new y(), y.prototype = null;
    }
    return c;
  }, vn;
}
var gn, Wa;
function Cr() {
  if (Wa) return gn;
  Wa = 1;
  var e = Am();
  return gn = Function.prototype.bind || e, gn;
}
var La, za;
function lo() {
  return za || (za = 1, La = Function.prototype.call), La;
}
var Ba, Ga;
function iy() {
  return Ga || (Ga = 1, Ba = Function.prototype.apply), Ba;
}
var Ua, Ha;
function km() {
  return Ha || (Ha = 1, Ua = typeof Reflect < "u" && Reflect && Reflect.apply), Ua;
}
var bn, Va;
function Sm() {
  if (Va) return bn;
  Va = 1;
  var e = Cr(), t = iy(), r = lo(), n = km();
  return bn = n || e.call(r, t), bn;
}
var wn, Xa;
function oy() {
  if (Xa) return wn;
  Xa = 1;
  var e = Cr(), t = /* @__PURE__ */ Pt(), r = lo(), n = Sm();
  return wn = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new t("a function is required");
    return n(e, r, i);
  }, wn;
}
var _n, Ka;
function Pm() {
  if (Ka) return _n;
  Ka = 1;
  var e = oy(), t = /* @__PURE__ */ ty(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return _n = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    (function(a) {
      return o(a == null ? a : i(a));
    })
  ) : !1, _n;
}
var On, Ja;
function jm() {
  if (Ja) return On;
  Ja = 1;
  var e = ry(), t = ny(), r = /* @__PURE__ */ Pm();
  return On = e ? function(n) {
    return e(n);
  } : t ? function(n) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new TypeError("getProto: not an object");
    return t(n);
  } : r ? function(n) {
    return r(n);
  } : null, On;
}
var xn, Ya;
function Dm() {
  if (Ya) return xn;
  Ya = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Cr();
  return xn = r.call(e, t), xn;
}
var En, Qa;
function co() {
  if (Qa) return En;
  Qa = 1;
  var e, t = /* @__PURE__ */ ey(), r = /* @__PURE__ */ sm(), n = /* @__PURE__ */ um(), i = /* @__PURE__ */ lm(), o = /* @__PURE__ */ cm(), a = /* @__PURE__ */ fm(), s = /* @__PURE__ */ Pt(), u = /* @__PURE__ */ pm(), l = /* @__PURE__ */ ym(), c = /* @__PURE__ */ hm(), h = /* @__PURE__ */ dm(), O = /* @__PURE__ */ mm(), d = /* @__PURE__ */ vm(), m = /* @__PURE__ */ gm(), y = /* @__PURE__ */ wm(), g = Function, S = function(K) {
    try {
      return g('"use strict"; return (' + K + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ ty(), P = /* @__PURE__ */ Om(), D = function() {
    throw new s();
  }, j = w ? (function() {
    try {
      return arguments.callee, D;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return D;
      }
    }
  })() : D, x = Em()(), _ = jm(), E = ny(), v = ry(), A = iy(), k = lo(), M = {}, L = typeof Uint8Array > "u" || !_ ? e : _(Uint8Array), F = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": x && _ ? _([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": M,
    "%AsyncGenerator%": M,
    "%AsyncGeneratorFunction%": M,
    "%AsyncIteratorPrototype%": M,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": g,
    "%GeneratorFunction%": M,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": x && _ ? _(_([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !x || !_ ? e : _((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !x || !_ ? e : _((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": x && _ ? _(""[Symbol.iterator]()) : e,
    "%Symbol%": x ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": j,
    "%TypedArray%": L,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": k,
    "%Function.prototype.apply%": A,
    "%Object.defineProperty%": P,
    "%Object.getPrototypeOf%": E,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": h,
    "%Math.min%": O,
    "%Math.pow%": d,
    "%Math.round%": m,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": v
  };
  if (_)
    try {
      null.error;
    } catch (K) {
      var W = _(_(K));
      F["%Error.prototype%"] = W;
    }
  var V = function K(z) {
    var G;
    if (z === "%AsyncFunction%")
      G = S("async function () {}");
    else if (z === "%GeneratorFunction%")
      G = S("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      G = S("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var H = K("%AsyncGeneratorFunction%");
      H && (G = H.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var J = K("%AsyncGenerator%");
      J && _ && (G = _(J.prototype));
    }
    return F[z] = G, G;
  }, N = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, R = Cr(), B = /* @__PURE__ */ Dm(), T = R.call(k, Array.prototype.concat), C = R.call(A, Array.prototype.splice), te = R.call(k, String.prototype.replace), ue = R.call(k, String.prototype.slice), me = R.call(k, RegExp.prototype.exec), ve = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ne = /\\(\\)?/g, fe = function(K) {
    var z = ue(K, 0, 1), G = ue(K, -1);
    if (z === "%" && G !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (G === "%" && z !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var H = [];
    return te(K, ve, function(J, Z, Q, ie) {
      H[H.length] = Q ? te(ie, ne, "$1") : Z || J;
    }), H;
  }, ge = function(K, z) {
    var G = K, H;
    if (B(N, G) && (H = N[G], G = "%" + H[0] + "%"), B(F, G)) {
      var J = F[G];
      if (J === M && (J = V(G)), typeof J > "u" && !z)
        throw new s("intrinsic " + K + " exists, but is not available. Please file an issue!");
      return {
        alias: H,
        name: G,
        value: J
      };
    }
    throw new a("intrinsic " + K + " does not exist!");
  };
  return En = function(K, z) {
    if (typeof K != "string" || K.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof z != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (me(/^%?[^%]*%?$/, K) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var G = fe(K), H = G.length > 0 ? G[0] : "", J = ge("%" + H + "%", z), Z = J.name, Q = J.value, ie = !1, Y = J.alias;
    Y && (H = Y[0], C(G, T([0, 1], Y)));
    for (var oe = 1, we = !0; oe < G.length; oe += 1) {
      var ce = G[oe], ye = ue(ce, 0, 1), _e = ue(ce, -1);
      if ((ye === '"' || ye === "'" || ye === "`" || _e === '"' || _e === "'" || _e === "`") && ye !== _e)
        throw new a("property names with quotes must have matching quotes");
      if ((ce === "constructor" || !we) && (ie = !0), H += "." + ce, Z = "%" + H + "%", B(F, Z))
        Q = F[Z];
      else if (Q != null) {
        if (!(ce in Q)) {
          if (!z)
            throw new s("base intrinsic for " + K + " exists, but the property is not available.");
          return;
        }
        if (w && oe + 1 >= G.length) {
          var Oe = w(Q, ce);
          we = !!Oe, we && "get" in Oe && !("originalValue" in Oe.get) ? Q = Oe.get : Q = Q[ce];
        } else
          we = B(Q, ce), Q = Q[ce];
        we && !ie && (F[Z] = Q);
      }
    }
    return Q;
  }, En;
}
var An, Za;
function ay() {
  if (Za) return An;
  Za = 1;
  var e = /* @__PURE__ */ co(), t = oy(), r = t([e("%String.prototype.indexOf%")]);
  return An = function(n, i) {
    var o = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(n, !!i)
    );
    return typeof o == "function" && r(n, ".prototype.") > -1 ? t(
      /** @type {const} */
      [o]
    ) : o;
  }, An;
}
var kn, es;
function sy() {
  if (es) return kn;
  es = 1;
  var e = /* @__PURE__ */ co(), t = /* @__PURE__ */ ay(), r = /* @__PURE__ */ Nr(), n = /* @__PURE__ */ Pt(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return kn = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var c, h = {
      assert: function(O) {
        if (!h.has(O))
          throw new n("Side channel does not contain " + r(O));
      },
      delete: function(O) {
        if (c) {
          var d = u(c, O);
          return l(c) === 0 && (c = void 0), d;
        }
        return !1;
      },
      get: function(O) {
        if (c)
          return o(c, O);
      },
      has: function(O) {
        return c ? s(c, O) : !1;
      },
      set: function(O, d) {
        c || (c = new i()), a(c, O, d);
      }
    };
    return h;
  }, kn;
}
var Sn, ts;
function Im() {
  if (ts) return Sn;
  ts = 1;
  var e = /* @__PURE__ */ co(), t = /* @__PURE__ */ ay(), r = /* @__PURE__ */ Nr(), n = sy(), i = /* @__PURE__ */ Pt(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Sn = o ? (
    /** @type {Exclude<import('.'), false>} */
    (function() {
      var c, h, O = {
        assert: function(d) {
          if (!O.has(d))
            throw new i("Side channel does not contain " + r(d));
        },
        delete: function(d) {
          if (o && d && (typeof d == "object" || typeof d == "function")) {
            if (c)
              return l(c, d);
          } else if (n && h)
            return h.delete(d);
          return !1;
        },
        get: function(d) {
          return o && d && (typeof d == "object" || typeof d == "function") && c ? a(c, d) : h && h.get(d);
        },
        has: function(d) {
          return o && d && (typeof d == "object" || typeof d == "function") && c ? u(c, d) : !!h && h.has(d);
        },
        set: function(d, m) {
          o && d && (typeof d == "object" || typeof d == "function") ? (c || (c = new o()), s(c, d, m)) : n && (h || (h = n()), h.set(d, m));
        }
      };
      return O;
    })
  ) : n, Sn;
}
var Pn, rs;
function uy() {
  if (rs) return Pn;
  rs = 1;
  var e = /* @__PURE__ */ Pt(), t = /* @__PURE__ */ Nr(), r = am(), n = sy(), i = Im(), o = i || n || r;
  return Pn = function() {
    var a, s = {
      assert: function(u) {
        if (!s.has(u))
          throw new e("Side channel does not contain " + t(u));
      },
      delete: function(u) {
        return !!a && a.delete(u);
      },
      get: function(u) {
        return a && a.get(u);
      },
      has: function(u) {
        return !!a && a.has(u);
      },
      set: function(u, l) {
        a || (a = o()), a.set(u, l);
      }
    };
    return s;
  }, Pn;
}
var jn, ns;
function fo() {
  if (ns) return jn;
  ns = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return jn = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, jn;
}
var Dn, is;
function ly() {
  if (is) return Dn;
  is = 1;
  var e = /* @__PURE__ */ fo(), t = uy(), r = Object.prototype.hasOwnProperty, n = Array.isArray, i = t(), o = function(x, _) {
    return i.set(x, _), x;
  }, a = function(x) {
    return i.has(x);
  }, s = function(x) {
    return i.get(x);
  }, u = function(x, _) {
    i.set(x, _);
  }, l = (function() {
    for (var x = [], _ = 0; _ < 256; ++_)
      x[x.length] = "%" + ((_ < 16 ? "0" : "") + _.toString(16)).toUpperCase();
    return x;
  })(), c = function(x) {
    for (; x.length > 1; ) {
      var _ = x.pop(), E = _.obj[_.prop];
      if (n(E)) {
        for (var v = [], A = 0; A < E.length; ++A)
          typeof E[A] < "u" && (v[v.length] = E[A]);
        _.obj[_.prop] = v;
      }
    }
  }, h = function(x, _) {
    for (var E = _ && _.plainObjects ? { __proto__: null } : {}, v = 0; v < x.length; ++v)
      typeof x[v] < "u" && (E[v] = x[v]);
    return E;
  }, O = function x(_, E, v) {
    if (!E)
      return _;
    if (typeof E != "object" && typeof E != "function") {
      if (n(_)) {
        var A = _.length;
        if (v && typeof v.arrayLimit == "number" && A > v.arrayLimit)
          return o(h(_.concat(E), v), A);
        _[A] = E;
      } else if (_ && typeof _ == "object")
        if (a(_)) {
          var k = s(_) + 1;
          _[k] = E, u(_, k);
        } else {
          if (v && v.strictMerge)
            return [_, E];
          (v && (v.plainObjects || v.allowPrototypes) || !r.call(Object.prototype, E)) && (_[E] = !0);
        }
      else
        return [_, E];
      return _;
    }
    if (!_ || typeof _ != "object") {
      if (a(E)) {
        for (var M = Object.keys(E), L = v && v.plainObjects ? { __proto__: null, 0: _ } : { 0: _ }, F = 0; F < M.length; F++) {
          var W = parseInt(M[F], 10);
          L[W + 1] = E[M[F]];
        }
        return o(L, s(E) + 1);
      }
      var V = [_].concat(E);
      return v && typeof v.arrayLimit == "number" && V.length > v.arrayLimit ? o(h(V, v), V.length - 1) : V;
    }
    var N = _;
    return n(_) && !n(E) && (N = h(_, v)), n(_) && n(E) ? (E.forEach(function(R, B) {
      if (r.call(_, B)) {
        var T = _[B];
        T && typeof T == "object" && R && typeof R == "object" ? _[B] = x(T, R, v) : _[_.length] = R;
      } else
        _[B] = R;
    }), _) : Object.keys(E).reduce(function(R, B) {
      var T = E[B];
      if (r.call(R, B) ? R[B] = x(R[B], T, v) : R[B] = T, a(E) && !a(R) && o(R, s(E)), a(R)) {
        var C = parseInt(B, 10);
        String(C) === B && C >= 0 && C > s(R) && u(R, C);
      }
      return R;
    }, N);
  }, d = function(x, _) {
    return Object.keys(_).reduce(function(E, v) {
      return E[v] = _[v], E;
    }, x);
  }, m = function(x, _, E) {
    var v = x.replace(/\+/g, " ");
    if (E === "iso-8859-1")
      return v.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(v);
    } catch {
      return v;
    }
  }, y = 1024, g = function(x, _, E, v, A) {
    if (x.length === 0)
      return x;
    var k = x;
    if (typeof x == "symbol" ? k = Symbol.prototype.toString.call(x) : typeof x != "string" && (k = String(x)), E === "iso-8859-1")
      return escape(k).replace(/%u[0-9a-f]{4}/gi, function(R) {
        return "%26%23" + parseInt(R.slice(2), 16) + "%3B";
      });
    for (var M = "", L = 0; L < k.length; L += y) {
      for (var F = k.length >= y ? k.slice(L, L + y) : k, W = [], V = 0; V < F.length; ++V) {
        var N = F.charCodeAt(V);
        if (N === 45 || N === 46 || N === 95 || N === 126 || N >= 48 && N <= 57 || N >= 65 && N <= 90 || N >= 97 && N <= 122 || A === e.RFC1738 && (N === 40 || N === 41)) {
          W[W.length] = F.charAt(V);
          continue;
        }
        if (N < 128) {
          W[W.length] = l[N];
          continue;
        }
        if (N < 2048) {
          W[W.length] = l[192 | N >> 6] + l[128 | N & 63];
          continue;
        }
        if (N < 55296 || N >= 57344) {
          W[W.length] = l[224 | N >> 12] + l[128 | N >> 6 & 63] + l[128 | N & 63];
          continue;
        }
        V += 1, N = 65536 + ((N & 1023) << 10 | F.charCodeAt(V) & 1023), W[W.length] = l[240 | N >> 18] + l[128 | N >> 12 & 63] + l[128 | N >> 6 & 63] + l[128 | N & 63];
      }
      M += W.join("");
    }
    return M;
  }, S = function(x) {
    for (var _ = [{ obj: { o: x }, prop: "o" }], E = [], v = 0; v < _.length; ++v)
      for (var A = _[v], k = A.obj[A.prop], M = Object.keys(k), L = 0; L < M.length; ++L) {
        var F = M[L], W = k[F];
        typeof W == "object" && W !== null && E.indexOf(W) === -1 && (_[_.length] = { obj: k, prop: F }, E[E.length] = W);
      }
    return c(_), x;
  }, w = function(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  }, P = function(x) {
    return !x || typeof x != "object" ? !1 : !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
  }, D = function(x, _, E, v) {
    if (a(x)) {
      var A = s(x) + 1;
      return x[A] = _, u(x, A), x;
    }
    var k = [].concat(x, _);
    return k.length > E ? o(h(k, { plainObjects: v }), k.length - 1) : k;
  }, j = function(x, _) {
    if (n(x)) {
      for (var E = [], v = 0; v < x.length; v += 1)
        E[E.length] = _(x[v]);
      return E;
    }
    return _(x);
  };
  return Dn = {
    arrayToObject: h,
    assign: d,
    combine: D,
    compact: S,
    decode: m,
    encode: g,
    isBuffer: P,
    isOverflow: a,
    isRegExp: w,
    markOverflow: o,
    maybeMap: j,
    merge: O
  }, Dn;
}
var In, os;
function Rm() {
  if (os) return In;
  os = 1;
  var e = uy(), t = /* @__PURE__ */ ly(), r = /* @__PURE__ */ fo(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(y) {
      return y + "[]";
    },
    comma: "comma",
    indices: function(y, g) {
      return y + "[" + g + "]";
    },
    repeat: function(y) {
      return y;
    }
  }, o = Array.isArray, a = Array.prototype.push, s = function(y, g) {
    a.apply(y, o(g) ? g : [g]);
  }, u = Date.prototype.toISOString, l = r.default, c = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: r.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(y) {
      return u.call(y);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, h = function(y) {
    return typeof y == "string" || typeof y == "number" || typeof y == "boolean" || typeof y == "symbol" || typeof y == "bigint";
  }, O = {}, d = function y(g, S, w, P, D, j, x, _, E, v, A, k, M, L, F, W, V, N) {
    for (var R = g, B = N, T = 0, C = !1; (B = B.get(O)) !== void 0 && !C; ) {
      var te = B.get(g);
      if (T += 1, typeof te < "u") {
        if (te === T)
          throw new RangeError("Cyclic object value");
        C = !0;
      }
      typeof B.get(O) > "u" && (T = 0);
    }
    if (typeof v == "function" ? R = v(S, R) : R instanceof Date ? R = M(R) : w === "comma" && o(R) && (R = t.maybeMap(R, function(Q) {
      return Q instanceof Date ? M(Q) : Q;
    })), R === null) {
      if (j)
        return E && !W ? E(S, c.encoder, V, "key", L) : S;
      R = "";
    }
    if (h(R) || t.isBuffer(R)) {
      if (E) {
        var ue = W ? S : E(S, c.encoder, V, "key", L);
        return [F(ue) + "=" + F(E(R, c.encoder, V, "value", L))];
      }
      return [F(S) + "=" + F(String(R))];
    }
    var me = [];
    if (typeof R > "u")
      return me;
    var ve;
    if (w === "comma" && o(R))
      W && E && (R = t.maybeMap(R, E)), ve = [{ value: R.length > 0 ? R.join(",") || null : void 0 }];
    else if (o(v))
      ve = v;
    else {
      var ne = Object.keys(R);
      ve = A ? ne.sort(A) : ne;
    }
    var fe = _ ? String(S).replace(/\./g, "%2E") : String(S), ge = P && o(R) && R.length === 1 ? fe + "[]" : fe;
    if (D && o(R) && R.length === 0)
      return ge + "[]";
    for (var K = 0; K < ve.length; ++K) {
      var z = ve[K], G = typeof z == "object" && z && typeof z.value < "u" ? z.value : R[z];
      if (!(x && G === null)) {
        var H = k && _ ? String(z).replace(/\./g, "%2E") : String(z), J = o(R) ? typeof w == "function" ? w(ge, H) : ge : ge + (k ? "." + H : "[" + H + "]");
        N.set(g, T);
        var Z = e();
        Z.set(O, N), s(me, y(
          G,
          J,
          w,
          P,
          D,
          j,
          x,
          _,
          w === "comma" && W && o(R) ? null : E,
          v,
          A,
          k,
          M,
          L,
          F,
          W,
          V,
          Z
        ));
      }
    }
    return me;
  }, m = function(y) {
    if (!y)
      return c;
    if (typeof y.allowEmptyArrays < "u" && typeof y.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof y.encodeDotInKeys < "u" && typeof y.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (y.encoder !== null && typeof y.encoder < "u" && typeof y.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var g = y.charset || c.charset;
    if (typeof y.charset < "u" && y.charset !== "utf-8" && y.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var S = r.default;
    if (typeof y.format < "u") {
      if (!n.call(r.formatters, y.format))
        throw new TypeError("Unknown format option provided.");
      S = y.format;
    }
    var w = r.formatters[S], P = c.filter;
    (typeof y.filter == "function" || o(y.filter)) && (P = y.filter);
    var D;
    if (y.arrayFormat in i ? D = y.arrayFormat : "indices" in y ? D = y.indices ? "indices" : "repeat" : D = c.arrayFormat, "commaRoundTrip" in y && typeof y.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var j = typeof y.allowDots > "u" ? y.encodeDotInKeys === !0 ? !0 : c.allowDots : !!y.allowDots;
    return {
      addQueryPrefix: typeof y.addQueryPrefix == "boolean" ? y.addQueryPrefix : c.addQueryPrefix,
      allowDots: j,
      allowEmptyArrays: typeof y.allowEmptyArrays == "boolean" ? !!y.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: D,
      charset: g,
      charsetSentinel: typeof y.charsetSentinel == "boolean" ? y.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!y.commaRoundTrip,
      delimiter: typeof y.delimiter > "u" ? c.delimiter : y.delimiter,
      encode: typeof y.encode == "boolean" ? y.encode : c.encode,
      encodeDotInKeys: typeof y.encodeDotInKeys == "boolean" ? y.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof y.encoder == "function" ? y.encoder : c.encoder,
      encodeValuesOnly: typeof y.encodeValuesOnly == "boolean" ? y.encodeValuesOnly : c.encodeValuesOnly,
      filter: P,
      format: S,
      formatter: w,
      serializeDate: typeof y.serializeDate == "function" ? y.serializeDate : c.serializeDate,
      skipNulls: typeof y.skipNulls == "boolean" ? y.skipNulls : c.skipNulls,
      sort: typeof y.sort == "function" ? y.sort : null,
      strictNullHandling: typeof y.strictNullHandling == "boolean" ? y.strictNullHandling : c.strictNullHandling
    };
  };
  return In = function(y, g) {
    var S = y, w = m(g), P, D;
    typeof w.filter == "function" ? (D = w.filter, S = D("", S)) : o(w.filter) && (D = w.filter, P = D);
    var j = [];
    if (typeof S != "object" || S === null)
      return "";
    var x = i[w.arrayFormat], _ = x === "comma" && w.commaRoundTrip;
    P || (P = Object.keys(S)), w.sort && P.sort(w.sort);
    for (var E = e(), v = 0; v < P.length; ++v) {
      var A = P[v], k = S[A];
      w.skipNulls && k === null || s(j, d(
        k,
        A,
        x,
        _,
        w.allowEmptyArrays,
        w.strictNullHandling,
        w.skipNulls,
        w.encodeDotInKeys,
        w.encode ? w.encoder : null,
        w.filter,
        w.sort,
        w.allowDots,
        w.serializeDate,
        w.format,
        w.formatter,
        w.encodeValuesOnly,
        w.charset,
        E
      ));
    }
    var M = j.join(w.delimiter), L = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? L += "utf8=%26%2310003%3B&" : L += "utf8=%E2%9C%93&"), M.length > 0 ? L + M : "";
  }, In;
}
var Rn, as;
function Mm() {
  if (as) return Rn;
  as = 1;
  var e = /* @__PURE__ */ ly(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictMerge: !0,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, i = function(d) {
    return d.replace(/&#(\d+);/g, function(m, y) {
      return String.fromCharCode(parseInt(y, 10));
    });
  }, o = function(d, m, y) {
    if (d && typeof d == "string" && m.comma && d.indexOf(",") > -1)
      return d.split(",");
    if (m.throwOnLimitExceeded && y >= m.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return d;
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", u = function(d, m) {
    var y = { __proto__: null }, g = m.ignoreQueryPrefix ? d.replace(/^\?/, "") : d;
    g = g.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var S = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, w = g.split(
      m.delimiter,
      m.throwOnLimitExceeded && typeof S < "u" ? S + 1 : S
    );
    if (m.throwOnLimitExceeded && typeof S < "u" && w.length > S)
      throw new RangeError("Parameter limit exceeded. Only " + S + " parameter" + (S === 1 ? "" : "s") + " allowed.");
    var P = -1, D, j = m.charset;
    if (m.charsetSentinel)
      for (D = 0; D < w.length; ++D)
        w[D].indexOf("utf8=") === 0 && (w[D] === s ? j = "utf-8" : w[D] === a && (j = "iso-8859-1"), P = D, D = w.length);
    for (D = 0; D < w.length; ++D)
      if (D !== P) {
        var x = w[D], _ = x.indexOf("]="), E = _ === -1 ? x.indexOf("=") : _ + 1, v, A;
        if (E === -1 ? (v = m.decoder(x, n.decoder, j, "key"), A = m.strictNullHandling ? null : "") : (v = m.decoder(x.slice(0, E), n.decoder, j, "key"), v !== null && (A = e.maybeMap(
          o(
            x.slice(E + 1),
            m,
            r(y[v]) ? y[v].length : 0
          ),
          function(M) {
            return m.decoder(M, n.decoder, j, "value");
          }
        ))), A && m.interpretNumericEntities && j === "iso-8859-1" && (A = i(String(A))), x.indexOf("[]=") > -1 && (A = r(A) ? [A] : A), m.comma && r(A) && A.length > m.arrayLimit) {
          if (m.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          A = e.combine([], A, m.arrayLimit, m.plainObjects);
        }
        if (v !== null) {
          var k = t.call(y, v);
          k && (m.duplicates === "combine" || x.indexOf("[]=") > -1) ? y[v] = e.combine(
            y[v],
            A,
            m.arrayLimit,
            m.plainObjects
          ) : (!k || m.duplicates === "last") && (y[v] = A);
        }
      }
    return y;
  }, l = function(d, m, y, g) {
    var S = 0;
    if (d.length > 0 && d[d.length - 1] === "[]") {
      var w = d.slice(0, -1).join("");
      S = Array.isArray(m) && m[w] ? m[w].length : 0;
    }
    for (var P = g ? m : o(m, y, S), D = d.length - 1; D >= 0; --D) {
      var j, x = d[D];
      if (x === "[]" && y.parseArrays)
        e.isOverflow(P) ? j = P : j = y.allowEmptyArrays && (P === "" || y.strictNullHandling && P === null) ? [] : e.combine(
          [],
          P,
          y.arrayLimit,
          y.plainObjects
        );
      else {
        j = y.plainObjects ? { __proto__: null } : {};
        var _ = x.charAt(0) === "[" && x.charAt(x.length - 1) === "]" ? x.slice(1, -1) : x, E = y.decodeDotInKeys ? _.replace(/%2E/g, ".") : _, v = parseInt(E, 10), A = !isNaN(v) && x !== E && String(v) === E && v >= 0 && y.parseArrays;
        if (!y.parseArrays && E === "")
          j = { 0: P };
        else if (A && v < y.arrayLimit)
          j = [], j[v] = P;
        else {
          if (A && y.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + y.arrayLimit + " element" + (y.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          A ? (j[v] = P, e.markOverflow(j, v)) : E !== "__proto__" && (j[E] = P);
        }
      }
      P = j;
    }
    return P;
  }, c = function(d, m) {
    var y = m.allowDots ? d.replace(/\.([^.[]+)/g, "[$1]") : d;
    if (m.depth <= 0)
      return !m.plainObjects && t.call(Object.prototype, y) && !m.allowPrototypes ? void 0 : [y];
    var g = /(\[[^[\]]*])/, S = /(\[[^[\]]*])/g, w = g.exec(y), P = w ? y.slice(0, w.index) : y, D = [];
    if (P) {
      if (!m.plainObjects && t.call(Object.prototype, P) && !m.allowPrototypes)
        return;
      D[D.length] = P;
    }
    for (var j = 0; (w = S.exec(y)) !== null && j < m.depth; ) {
      j += 1;
      var x = w[1].slice(1, -1);
      if (!m.plainObjects && t.call(Object.prototype, x) && !m.allowPrototypes)
        return;
      D[D.length] = w[1];
    }
    if (w) {
      if (m.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + m.depth + " and strictDepth is true");
      D[D.length] = "[" + y.slice(w.index) + "]";
    }
    return D;
  }, h = function(d, m, y, g) {
    if (d) {
      var S = c(d, y);
      if (S)
        return l(S, m, y, g);
    }
  }, O = function(d) {
    if (!d)
      return n;
    if (typeof d.allowEmptyArrays < "u" && typeof d.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof d.decodeDotInKeys < "u" && typeof d.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (d.decoder !== null && typeof d.decoder < "u" && typeof d.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof d.charset < "u" && d.charset !== "utf-8" && d.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof d.throwOnLimitExceeded < "u" && typeof d.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var m = typeof d.charset > "u" ? n.charset : d.charset, y = typeof d.duplicates > "u" ? n.duplicates : d.duplicates;
    if (y !== "combine" && y !== "first" && y !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var g = typeof d.allowDots > "u" ? d.decodeDotInKeys === !0 ? !0 : n.allowDots : !!d.allowDots;
    return {
      allowDots: g,
      allowEmptyArrays: typeof d.allowEmptyArrays == "boolean" ? !!d.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof d.allowPrototypes == "boolean" ? d.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof d.allowSparse == "boolean" ? d.allowSparse : n.allowSparse,
      arrayLimit: typeof d.arrayLimit == "number" ? d.arrayLimit : n.arrayLimit,
      charset: m,
      charsetSentinel: typeof d.charsetSentinel == "boolean" ? d.charsetSentinel : n.charsetSentinel,
      comma: typeof d.comma == "boolean" ? d.comma : n.comma,
      decodeDotInKeys: typeof d.decodeDotInKeys == "boolean" ? d.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof d.decoder == "function" ? d.decoder : n.decoder,
      delimiter: typeof d.delimiter == "string" || e.isRegExp(d.delimiter) ? d.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof d.depth == "number" || d.depth === !1 ? +d.depth : n.depth,
      duplicates: y,
      ignoreQueryPrefix: d.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof d.interpretNumericEntities == "boolean" ? d.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof d.parameterLimit == "number" ? d.parameterLimit : n.parameterLimit,
      parseArrays: d.parseArrays !== !1,
      plainObjects: typeof d.plainObjects == "boolean" ? d.plainObjects : n.plainObjects,
      strictDepth: typeof d.strictDepth == "boolean" ? !!d.strictDepth : n.strictDepth,
      strictMerge: typeof d.strictMerge == "boolean" ? !!d.strictMerge : n.strictMerge,
      strictNullHandling: typeof d.strictNullHandling == "boolean" ? d.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof d.throwOnLimitExceeded == "boolean" ? d.throwOnLimitExceeded : !1
    };
  };
  return Rn = function(d, m) {
    var y = O(m);
    if (d === "" || d === null || typeof d > "u")
      return y.plainObjects ? { __proto__: null } : {};
    for (var g = typeof d == "string" ? u(d, y) : d, S = y.plainObjects ? { __proto__: null } : {}, w = Object.keys(g), P = 0; P < w.length; ++P) {
      var D = w[P], j = h(D, g[D], y, typeof d == "string");
      S = e.merge(S, j, y);
    }
    return y.allowSparse === !0 ? S : e.compact(S);
  }, Rn;
}
var Mn, ss;
function Fm() {
  if (ss) return Mn;
  ss = 1;
  var e = /* @__PURE__ */ Rm(), t = /* @__PURE__ */ Mm(), r = /* @__PURE__ */ fo();
  return Mn = {
    formats: r,
    parse: t,
    stringify: e
  }, Mn;
}
var $m = /* @__PURE__ */ Fm();
const Tm = /* @__PURE__ */ tm($m);
async function ur(e) {
  try {
    return [null, await e()];
  } catch (t) {
    return [t, null];
  }
}
ur.sync = function(e) {
  try {
    return [null, e()];
  } catch (t) {
    return [t, null];
  }
};
class qr extends Error {
  status = 500;
  constructor(t, r = 500) {
    super(t), this.name = "BaseException", this.status = r;
  }
  static fromError(t) {
    return new qr(t.message, 500);
  }
}
class Nm {
  entries = /* @__PURE__ */ new Map();
  loadFromRecord(t) {
    Object.entries(t).forEach(([r, n]) => {
      this.set(r, n);
    });
  }
  toRecord() {
    const t = {};
    for (const [r, n] of this.entries.entries())
      t[String(r)] = n;
    return t;
  }
  getKey(t) {
    let r = t;
    (typeof t == "function" || typeof t == "object") && (r = t.name);
    const n = typeof t != "string" && typeof t != "symbol";
    return n && !t?.__container_entry_key && console.warn(`Warning: The constructor ${t?.name || t} does not have a unique identifier. Consider adding a static property __container_entry_key to avoid potential conflicts.`), n && t?.__container_entry_key && (r = t.__container_entry_key), r;
  }
  set(t, r) {
    const n = this.getKey(t);
    return this.entries.set(n, r), this;
  }
  has(t) {
    const r = this.getKey(t);
    return this.entries.has(r);
  }
  get(t) {
    const r = this.getKey(t);
    if (!this.entries.has(r))
      throw new qr(`Entry with key "${String(r)}" not found in container.`);
    return this.entries.get(r);
  }
  unset(t) {
    const r = this.getKey(t);
    this.entries.delete(r);
  }
  singleton(t) {
    const r = t.name, n = this.entries.get(r);
    if (n)
      return n;
    const i = new t();
    return this.entries.set(r, i), i;
  }
  load(t) {
    Object.entries(t).forEach(([r, n]) => {
      this.set(r, n);
    });
  }
  proxy(t) {
    return new Proxy({}, {
      get: (r, n) => {
        const i = this.get(t), o = i[n];
        return typeof o == "function" ? o.bind(i) : i[n];
      },
      set: (r, n, i) => {
        const o = this.get(t);
        return o[n] = i, !0;
      }
    });
  }
  keys() {
    return Array.from(this.entries.keys());
  }
}
const je = globalThis.clientContainer || new Nm();
globalThis.clientContainer = je;
class Cm {
  static __container_entry_key = "ToastService";
  success(t, r) {
    console.log("Success:", t, r);
  }
  error(t, r) {
    console.error("Error:", t, r);
  }
}
const us = je.proxy(Cm);
class qm {
  static __container_entry_key = "FetchService";
  async handleError(t) {
    if (t.headers.get("Content-Type")?.includes("json")) {
      const r = await t.json().catch(() => ({ message: $t("Internal Server Error") }));
      return r.message && us.error(r.message), r;
    }
    return us.error($t("Internal Server Error")), {
      message: $t("Internal Server Error")
    };
  }
  buildUrl(t, r) {
    if (!r)
      return t;
    const n = Tm.stringify(r, { arrayFormat: "brackets" });
    return t + "?" + n;
  }
  buildRequestInit(t) {
    const r = { ...t };
    return t.data && (r.body = JSON.stringify(t.data), r.headers = {
      ...r.headers,
      "Content-Type": "application/json"
    }), r;
  }
  async parseResponse(t) {
    return t.headers.get("Content-Type")?.includes("json") ? t.json() : t.text();
  }
  async fetch(t, r = {}) {
    throw new Error("Method not implemented");
  }
  async try(t, r = {}) {
    return ur(() => this.fetch(t, r));
  }
  async get(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "GET"
    });
  }
  async post(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "POST"
    });
  }
  async put(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "PUT"
    });
  }
  async delete(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "DELETE"
    });
  }
}
const cy = je.proxy(qm);
function lr(...e) {
  return e.reduce((t, r) => r(t), class {
  });
}
function fy(e, ...t) {
  return t.reduce((r, n) => n(r), e);
}
function Wm(e) {
  return function(t) {
    class r extends t {
      constructor(...i) {
        super(...i);
        const o = new e(...i);
        Object.assign(this, o);
      }
    }
    for (const n of Reflect.ownKeys(e.prototype))
      n !== "constructor" && Object.defineProperty(
        r.prototype,
        n,
        Object.getOwnPropertyDescriptor(e.prototype, n)
      );
    return r;
  };
}
function cr(e) {
  return class extends e {
    static from(t) {
      const r = typeof this == "function" ? this : e, n = new r();
      let i = { ...t };
      return typeof r?.parse == "function" && (i = r.parse(t)), typeof this?.parse == "function" && (i = this.parse(t)), Object.assign(n, i), n;
    }
    merge(t) {
      return Object.assign(this, t), this;
    }
  };
}
function Lm(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
function zm(e) {
  return class extends e {
    deleted_at = null;
  };
}
class wE extends lr(cr, Lm, zm) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    const [t, r] = this.name.split(" ");
    if (!r)
      return t[0].toUpperCase();
    const n = t[0].toUpperCase(), i = r[0].toUpperCase();
    return n + i;
  }
}
class Bm {
  static __container_entry_key = "AuthService";
  user;
  constructor(t = {}) {
    this.user = t.user || null;
  }
  async logout(t) {
    const [r] = await cy.try("/auth/logout", { method: "POST" });
    r || (window.location.href = t?.redirect || "/");
  }
}
var py = typeof global == "object" && global && global.Object === Object && global, Gm = typeof self == "object" && self && self.Object === Object && self, Ne = py || Gm || Function("return this")(), Je = Ne.Symbol, yy = Object.prototype, Um = yy.hasOwnProperty, Hm = yy.toString, Ut = Je ? Je.toStringTag : void 0;
function Vm(e) {
  var t = Um.call(e, Ut), r = e[Ut];
  try {
    e[Ut] = void 0;
    var n = !0;
  } catch {
  }
  var i = Hm.call(e);
  return n && (t ? e[Ut] = r : delete e[Ut]), i;
}
var Xm = Object.prototype, Km = Xm.toString;
function Jm(e) {
  return Km.call(e);
}
var Ym = "[object Null]", Qm = "[object Undefined]", ls = Je ? Je.toStringTag : void 0;
function jt(e) {
  return e == null ? e === void 0 ? Qm : Ym : ls && ls in Object(e) ? Vm(e) : Jm(e);
}
function Ye(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zm = "[object AsyncFunction]", ev = "[object Function]", tv = "[object GeneratorFunction]", rv = "[object Proxy]";
function hy(e) {
  if (!Ye(e))
    return !1;
  var t = jt(e);
  return t == ev || t == tv || t == Zm || t == rv;
}
var Fn = Ne["__core-js_shared__"], cs = (function() {
  var e = /[^.]+$/.exec(Fn && Fn.keys && Fn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function nv(e) {
  return !!cs && cs in e;
}
var iv = Function.prototype, ov = iv.toString;
function dt(e) {
  if (e != null) {
    try {
      return ov.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var av = /[\\^$.*+?()[\]{}|]/g, sv = /^\[object .+?Constructor\]$/, uv = Function.prototype, lv = Object.prototype, cv = uv.toString, fv = lv.hasOwnProperty, pv = RegExp(
  "^" + cv.call(fv).replace(av, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yv(e) {
  if (!Ye(e) || nv(e))
    return !1;
  var t = hy(e) ? pv : sv;
  return t.test(dt(e));
}
function hv(e, t) {
  return e?.[t];
}
function mt(e, t) {
  var r = hv(e, t);
  return yv(r) ? r : void 0;
}
var fs = (function() {
  try {
    var e = mt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function dv(e, t, r) {
  t == "__proto__" && fs ? fs(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function po(e, t) {
  return e === t || e !== e && t !== t;
}
var mv = Object.prototype, vv = mv.hasOwnProperty;
function gv(e, t, r) {
  var n = e[t];
  (!(vv.call(e, t) && po(n, r)) || r === void 0 && !(t in e)) && dv(e, t, r);
}
var Ie = Array.isArray;
function xt(e) {
  return e != null && typeof e == "object";
}
var bv = "[object Symbol]";
function Et(e) {
  return typeof e == "symbol" || xt(e) && jt(e) == bv;
}
var wv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _v = /^\w*$/;
function yo(e, t) {
  if (Ie(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Et(e) ? !0 : _v.test(e) || !wv.test(e) || t != null && e in Object(t);
}
var Zt = mt(Object, "create");
function Ov() {
  this.__data__ = Zt ? Zt(null) : {}, this.size = 0;
}
function xv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ev = "__lodash_hash_undefined__", Av = Object.prototype, kv = Av.hasOwnProperty;
function Sv(e) {
  var t = this.__data__;
  if (Zt) {
    var r = t[e];
    return r === Ev ? void 0 : r;
  }
  return kv.call(t, e) ? t[e] : void 0;
}
var Pv = Object.prototype, jv = Pv.hasOwnProperty;
function Dv(e) {
  var t = this.__data__;
  return Zt ? t[e] !== void 0 : jv.call(t, e);
}
var Iv = "__lodash_hash_undefined__";
function Rv(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Zt && t === void 0 ? Iv : t, this;
}
function ft(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ft.prototype.clear = Ov;
ft.prototype.delete = xv;
ft.prototype.get = Sv;
ft.prototype.has = Dv;
ft.prototype.set = Rv;
function Mv() {
  this.__data__ = [], this.size = 0;
}
function Wr(e, t) {
  for (var r = e.length; r--; )
    if (po(e[r][0], t))
      return r;
  return -1;
}
var Fv = Array.prototype, $v = Fv.splice;
function Tv(e) {
  var t = this.__data__, r = Wr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : $v.call(t, r, 1), --this.size, !0;
}
function Nv(e) {
  var t = this.__data__, r = Wr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Cv(e) {
  return Wr(this.__data__, e) > -1;
}
function qv(e, t) {
  var r = this.__data__, n = Wr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Be(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Be.prototype.clear = Mv;
Be.prototype.delete = Tv;
Be.prototype.get = Nv;
Be.prototype.has = Cv;
Be.prototype.set = qv;
var er = mt(Ne, "Map");
function Wv() {
  this.size = 0, this.__data__ = {
    hash: new ft(),
    map: new (er || Be)(),
    string: new ft()
  };
}
function Lv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Lr(e, t) {
  var r = e.__data__;
  return Lv(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function zv(e) {
  var t = Lr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Bv(e) {
  return Lr(this, e).get(e);
}
function Gv(e) {
  return Lr(this, e).has(e);
}
function Uv(e, t) {
  var r = Lr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Ge(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ge.prototype.clear = Wv;
Ge.prototype.delete = zv;
Ge.prototype.get = Bv;
Ge.prototype.has = Gv;
Ge.prototype.set = Uv;
var Hv = "Expected a function";
function ho(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Hv);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new (ho.Cache || Ge)(), r;
}
ho.Cache = Ge;
var Vv = 500;
function Xv(e) {
  var t = ho(e, function(n) {
    return r.size === Vv && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Kv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jv = /\\(\\)?/g, Yv = Xv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Kv, function(r, n, i, o) {
    t.push(i ? o.replace(Jv, "$1") : n || r);
  }), t;
});
function br(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ps = Je ? Je.prototype : void 0, ys = ps ? ps.toString : void 0;
function dy(e) {
  if (typeof e == "string")
    return e;
  if (Ie(e))
    return br(e, dy) + "";
  if (Et(e))
    return ys ? ys.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Qv(e) {
  return e == null ? "" : dy(e);
}
function zr(e, t) {
  return Ie(e) ? e : yo(e, t) ? [e] : Yv(Qv(e));
}
var Zv = 9007199254740991, eg = /^(?:0|[1-9]\d*)$/;
function mo(e, t) {
  var r = typeof e;
  return t = t ?? Zv, !!t && (r == "number" || r != "symbol" && eg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function pt(e) {
  if (typeof e == "string" || Et(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function tg(e, t, r, n) {
  if (!Ye(e))
    return e;
  t = zr(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var u = pt(t[i]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = Ye(c) ? c : mo(t[i + 1]) ? [] : {});
    }
    gv(s, u, l), s = s[u];
  }
  return e;
}
function rg(e, t, r) {
  return e == null ? e : tg(e, t, r);
}
function my(e, t = "", r = {}) {
  for (const [n, i] of Object.entries(e)) {
    const o = /^\d+$/.test(n) ? `${t}[${n}]` : t ? `${t}.${n}` : n;
    if (i && typeof i == "object") {
      my(i, o, r);
      continue;
    }
    r[o] = i;
  }
  return r;
}
function Br(e, t) {
  t = zr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[pt(t[r++])];
  return r && r == n ? e : void 0;
}
function vy(e, t, r) {
  var n = e == null ? void 0 : Br(e, t);
  return n === void 0 ? r : n;
}
var ng = Object.prototype, ig = ng.hasOwnProperty;
function og(e, t) {
  return e != null && ig.call(e, t);
}
var ag = "[object Arguments]";
function hs(e) {
  return xt(e) && jt(e) == ag;
}
var gy = Object.prototype, sg = gy.hasOwnProperty, ug = gy.propertyIsEnumerable, by = hs(/* @__PURE__ */ (function() {
  return arguments;
})()) ? hs : function(e) {
  return xt(e) && sg.call(e, "callee") && !ug.call(e, "callee");
}, lg = 9007199254740991;
function vo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lg;
}
function wy(e, t, r) {
  t = zr(t, e);
  for (var n = -1, i = t.length, o = !1; ++n < i; ) {
    var a = pt(t[n]);
    if (!(o = e != null && r(e, a)))
      break;
    e = e[a];
  }
  return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && vo(i) && mo(a, i) && (Ie(e) || by(e)));
}
function cg(e, t) {
  return e != null && wy(e, t, og);
}
function fg(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function pg(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++n < i; )
    o[n] = e[n + t];
  return o;
}
function yg(e, t) {
  return t.length < 2 ? e : Br(e, pg(t, 0, -1));
}
var hg = Object.prototype, dg = hg.hasOwnProperty;
function mg(e, t) {
  t = zr(t, e);
  var r = -1, n = t.length;
  if (!n)
    return !0;
  for (; ++r < n; ) {
    var i = pt(t[r]);
    if (i === "__proto__" && !dg.call(e, "__proto__") || (i === "constructor" || i === "prototype") && r < n - 1)
      return !1;
  }
  var o = yg(e, t);
  return o == null || delete o[pt(fg(t))];
}
function vg(e, t) {
  return e == null ? !0 : mg(e, t);
}
class gg {
  static __container_entry_key = "ConfigService";
  entries;
  constructor() {
    this.entries = /* @__PURE__ */ new Map();
  }
  list() {
    return Array.from(this.entries.values());
  }
  parseValue(t) {
    return typeof t == "string" && t.endsWith(":boolean") ? t.replace(":boolean", "").trim() === "true" : t;
  }
  loadFromRecord(t, r = "unknow") {
    for (const [n, i] of Object.entries(t))
      this.entries.set(n, {
        key: n,
        value: this.parseValue(i),
        source: r
      });
  }
  loadFromEntries(t, r = "unknow") {
    for (const [n, i] of t)
      this.entries.set(n, {
        key: n,
        value: this.parseValue(i),
        source: r
      });
  }
  toRecord() {
    const t = {};
    for (const [r, n] of this.entries.entries())
      t[r] = n.value;
    return t;
  }
  has(t) {
    if (this.entries.get(t))
      return !0;
    if (!t.includes("."))
      return !1;
    const r = t.split(".")[0], n = this.entries.get(r);
    if (!n)
      return !!this.entries.get(t);
    const i = n.value;
    return typeof i != "object" || Array.isArray(i) ? !1 : cg(i, t.substring(r.length + 1));
  }
  get(t, r) {
    const n = this.entries.get(t);
    if (n)
      return n.value;
    if (!t.includes("."))
      return r;
    const i = t.split(".")[0], o = this.entries.get(i);
    if (!o) {
      const s = this.entries.get(t);
      return s ? s.value : r;
    }
    const a = o.value;
    return typeof a != "object" || Array.isArray(a) ? r : vy(a, t.substring(i.length + 1), r);
  }
  getOne(t, r) {
    for (const n of t)
      if (this.has(n))
        return this.get(n);
    return r;
  }
  set(t, r, n = "runtime") {
    if (!t.includes(".")) {
      this.entries.set(t, {
        key: t,
        source: n,
        value: r
      });
      return;
    }
    const i = t.split(".")[0];
    let o = this.get(i, {});
    (typeof o != "object" || Array.isArray(o)) && (o = {}), rg(o, t.substring(i.length + 1), r), this.entries.set(i, {
      key: i,
      source: n,
      value: o
    });
  }
  unset(t) {
    if (!t.includes(".")) {
      this.entries.delete(t);
      return;
    }
    const r = t.split(".")[0], n = this.get(r, {});
    n && (typeof n != "object" || Array.isArray(n) || (vg(n, t.substring(r.length + 1)), this.entries.set(r, {
      key: r,
      source: "runtime",
      value: n
    })));
  }
  clear() {
    this.entries.clear();
  }
  dump() {
    return my(this.toRecord());
  }
}
je.proxy(gg);
var $n = function() {
  return Ne.Date.now();
}, bg = /\s/;
function wg(e) {
  for (var t = e.length; t-- && bg.test(e.charAt(t)); )
    ;
  return t;
}
var _g = /^\s+/;
function Og(e) {
  return e && e.slice(0, wg(e) + 1).replace(_g, "");
}
var ds = NaN, xg = /^[-+]0x[0-9a-f]+$/i, Eg = /^0b[01]+$/i, Ag = /^0o[0-7]+$/i, kg = parseInt;
function ms(e) {
  if (typeof e == "number")
    return e;
  if (Et(e))
    return ds;
  if (Ye(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ye(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Og(e);
  var r = Eg.test(e);
  return r || Ag.test(e) ? kg(e.slice(2), r ? 2 : 8) : xg.test(e) ? ds : +e;
}
var Sg = "Expected a function", Pg = Math.max, jg = Math.min;
function Dg(e, t, r) {
  var n, i, o, a, s, u, l = 0, c = !1, h = !1, O = !0;
  if (typeof e != "function")
    throw new TypeError(Sg);
  t = ms(t) || 0, Ye(r) && (c = !!r.leading, h = "maxWait" in r, o = h ? Pg(ms(r.maxWait) || 0, t) : o, O = "trailing" in r ? !!r.trailing : O);
  function d(x) {
    var _ = n, E = i;
    return n = i = void 0, l = x, a = e.apply(E, _), a;
  }
  function m(x) {
    return l = x, s = setTimeout(S, t), c ? d(x) : a;
  }
  function y(x) {
    var _ = x - u, E = x - l, v = t - _;
    return h ? jg(v, o - E) : v;
  }
  function g(x) {
    var _ = x - u, E = x - l;
    return u === void 0 || _ >= t || _ < 0 || h && E >= o;
  }
  function S() {
    var x = $n();
    if (g(x))
      return w(x);
    s = setTimeout(S, y(x));
  }
  function w(x) {
    return s = void 0, O && n ? d(x) : (n = i = void 0, a);
  }
  function P() {
    s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0;
  }
  function D() {
    return s === void 0 ? a : w($n());
  }
  function j() {
    var x = $n(), _ = g(x);
    if (n = arguments, i = this, u = x, _) {
      if (s === void 0)
        return m(u);
      if (h)
        return clearTimeout(s), s = setTimeout(S, t), d(u);
    }
    return s === void 0 && (s = setTimeout(S, t)), a;
  }
  return j.cancel = P, j.flush = D, j;
}
function Ig() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : typeof self < "u" && self.crypto && self.crypto.randomUUID ? self.crypto.randomUUID() : typeof window < "u" && window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Rg(e = "") {
  return e + Ig();
}
class Dt {
  static __container_entry_key = "LoggerService";
  info(t, r) {
  }
  debug(t, r) {
  }
  warn(t, r) {
  }
  error(t, r) {
  }
  child(t) {
    return new Dt();
  }
}
class go {
  static __container_entry_key = "EmmitterService";
  handlers = [];
  debug;
  logger;
  constructor(t) {
    this.debug = t?.debug || !1, this.logger = t?.logger || new Dt(), this.debug && this.logger.debug("emmitter loaded with debug mode enabled");
  }
  static create(t) {
    return new go(t);
  }
  setDebug(t) {
    this.debug = t, this.debug && this.logger.debug("debug mode enabled");
  }
  setLogger(t) {
    this.logger = t;
  }
  on(t, r, n) {
    const i = n?.id || Rg();
    if (n?.unique && this.handlers.some((a) => a.event === t && a.listener === r || a.id === i))
      return;
    const o = {
      id: i,
      event: t,
      listener: r
    };
    return this.handlers.push(o), this.debug && this.logger.debug("handler added", o), o;
  }
  once(t, r, n) {
    const i = (o, a) => {
      r(o, a), this.off(t, i);
    };
    return this.on(t, i, n);
  }
  onDebounce(t, r, n) {
    const i = Dg(r, n?.debounce || 300), o = this.on(t, i, n);
    return o && (o.originalListener = r), o;
  }
  onAnyOf(t, r, n) {
    const i = [];
    for (const o of t) {
      const a = this.on(o, r, n);
      a && i.push(a);
    }
    return i;
  }
  off(t, r) {
    this.handlers = this.handlers.filter((n) => !(n.event === t && (n.listener === r || n.originalListener === r))), this.debug && this.logger.debug("handler removed", { event: t });
  }
  emit(t, r) {
    this.debug && this.logger.debug("emitting event", {
      event: t,
      args: r
    });
    const n = this.handlers.filter((i) => i.event === t);
    for (const i of n)
      ur.sync(() => i.listener(r, { event: t }));
  }
  async emitAndWait(t, r) {
    const n = this.handlers.filter((i) => i.event === t);
    this.debug && this.logger.debug("emitting event and wait", {
      handlers: n.length,
      event: t,
      args: r
    });
    for await (const i of n)
      await i.listener(r, { event: t });
  }
  list() {
    return this.handlers;
  }
  listByEvent(t) {
    return this.handlers.filter((r) => r.event === t);
  }
  remove(t) {
    const r = Array.isArray(t) ? t : [t];
    this.handlers = this.handlers.filter((n) => !r.includes(n.id)), this.debug && this.logger.debug("handlers removed", { ids: r });
  }
  clear() {
    this.handlers = [], this.debug && this.logger.debug("all handlers cleared");
  }
  hasHandlers() {
    return this.handlers.length > 0;
  }
}
const vs = je.proxy(go);
class Mg {
  static __container_entry_key = "LayoutService";
  components = /* @__PURE__ */ new Map();
  options = {};
  currendId = null;
  setCurrent(t) {
    this.currendId = t, vs.emit("layout:change", t);
  }
  add(t, r, n) {
    this.components.set(t, r), this.options = n || {};
  }
  has(t) {
    return this.components.has(t);
  }
  get(t) {
    const r = this.components.get(t);
    if (!r)
      throw new qr(`Layout ${t} not found`);
    return r;
  }
  getOptions() {
    return this.options;
  }
  getCurrent() {
    return this.currendId ? this.get(this.currendId) : null;
  }
  setOptions(t = {}) {
    this.options = t, vs.emit("layout:set-options", t);
  }
}
class _y {
  hook_id;
  hook_aliases;
  order;
  subhooks;
  async register() {
  }
  async load() {
  }
  async boot() {
  }
  async shutdown() {
  }
  /** @deprecated Use register */
  async onRegister() {
  }
  /** @deprecated Use load */
  async onLoad() {
  }
  /** @deprecated Use boot */
  async onBoot() {
  }
  /** @deprecated Use shutdown */
  async onShutdown() {
  }
}
function Oy(e) {
  return e;
}
var Ui = mt(Ne, "WeakMap");
function bo(e) {
  return e != null && vo(e.length) && !hy(e);
}
var Fg = Object.prototype;
function $g(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Fg;
  return e === r;
}
function Tg(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
function Ng() {
  return !1;
}
var xy = typeof exports == "object" && exports && !exports.nodeType && exports, gs = xy && typeof module == "object" && module && !module.nodeType && module, Cg = gs && gs.exports === xy, bs = Cg ? Ne.Buffer : void 0, qg = bs ? bs.isBuffer : void 0, Hi = qg || Ng, Wg = "[object Arguments]", Lg = "[object Array]", zg = "[object Boolean]", Bg = "[object Date]", Gg = "[object Error]", Ug = "[object Function]", Hg = "[object Map]", Vg = "[object Number]", Xg = "[object Object]", Kg = "[object RegExp]", Jg = "[object Set]", Yg = "[object String]", Qg = "[object WeakMap]", Zg = "[object ArrayBuffer]", eb = "[object DataView]", tb = "[object Float32Array]", rb = "[object Float64Array]", nb = "[object Int8Array]", ib = "[object Int16Array]", ob = "[object Int32Array]", ab = "[object Uint8Array]", sb = "[object Uint8ClampedArray]", ub = "[object Uint16Array]", lb = "[object Uint32Array]", ae = {};
ae[tb] = ae[rb] = ae[nb] = ae[ib] = ae[ob] = ae[ab] = ae[sb] = ae[ub] = ae[lb] = !0;
ae[Wg] = ae[Lg] = ae[Zg] = ae[zg] = ae[eb] = ae[Bg] = ae[Gg] = ae[Ug] = ae[Hg] = ae[Vg] = ae[Xg] = ae[Kg] = ae[Jg] = ae[Yg] = ae[Qg] = !1;
function cb(e) {
  return xt(e) && vo(e.length) && !!ae[jt(e)];
}
function Ey(e) {
  return function(t) {
    return e(t);
  };
}
var Ay = typeof exports == "object" && exports && !exports.nodeType && exports, Yt = Ay && typeof module == "object" && module && !module.nodeType && module, fb = Yt && Yt.exports === Ay, Tn = fb && py.process, ws = (function() {
  try {
    var e = Yt && Yt.require && Yt.require("util").types;
    return e || Tn && Tn.binding && Tn.binding("util");
  } catch {
  }
})(), _s = ws && ws.isTypedArray, ky = _s ? Ey(_s) : cb, pb = Object.prototype, yb = pb.hasOwnProperty;
function hb(e, t) {
  var r = Ie(e), n = !r && by(e), i = !r && !n && Hi(e), o = !r && !n && !i && ky(e), a = r || n || i || o, s = a ? Tg(e.length, String) : [], u = s.length;
  for (var l in e)
    yb.call(e, l) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    mo(l, u))) && s.push(l);
  return s;
}
function db(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var mb = db(Object.keys, Object), vb = Object.prototype, gb = vb.hasOwnProperty;
function bb(e) {
  if (!$g(e))
    return mb(e);
  var t = [];
  for (var r in Object(e))
    gb.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function wo(e) {
  return bo(e) ? hb(e) : bb(e);
}
function wb(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function _b() {
  this.__data__ = new Be(), this.size = 0;
}
function Ob(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function xb(e) {
  return this.__data__.get(e);
}
function Eb(e) {
  return this.__data__.has(e);
}
var Ab = 200;
function kb(e, t) {
  var r = this.__data__;
  if (r instanceof Be) {
    var n = r.__data__;
    if (!er || n.length < Ab - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ge(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Le(e) {
  var t = this.__data__ = new Be(e);
  this.size = t.size;
}
Le.prototype.clear = _b;
Le.prototype.delete = Ob;
Le.prototype.get = xb;
Le.prototype.has = Eb;
Le.prototype.set = kb;
function Sb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
function Pb() {
  return [];
}
var jb = Object.prototype, Db = jb.propertyIsEnumerable, Os = Object.getOwnPropertySymbols, Ib = Os ? function(e) {
  return e == null ? [] : (e = Object(e), Sb(Os(e), function(t) {
    return Db.call(e, t);
  }));
} : Pb;
function Rb(e, t, r) {
  var n = t(e);
  return Ie(e) ? n : wb(n, r(e));
}
function xs(e) {
  return Rb(e, wo, Ib);
}
var Vi = mt(Ne, "DataView"), Xi = mt(Ne, "Promise"), Ki = mt(Ne, "Set"), Es = "[object Map]", Mb = "[object Object]", As = "[object Promise]", ks = "[object Set]", Ss = "[object WeakMap]", Ps = "[object DataView]", Fb = dt(Vi), $b = dt(er), Tb = dt(Xi), Nb = dt(Ki), Cb = dt(Ui), Ke = jt;
(Vi && Ke(new Vi(new ArrayBuffer(1))) != Ps || er && Ke(new er()) != Es || Xi && Ke(Xi.resolve()) != As || Ki && Ke(new Ki()) != ks || Ui && Ke(new Ui()) != Ss) && (Ke = function(e) {
  var t = jt(e), r = t == Mb ? e.constructor : void 0, n = r ? dt(r) : "";
  if (n)
    switch (n) {
      case Fb:
        return Ps;
      case $b:
        return Es;
      case Tb:
        return As;
      case Nb:
        return ks;
      case Cb:
        return Ss;
    }
  return t;
});
var js = Ne.Uint8Array, qb = "__lodash_hash_undefined__";
function Wb(e) {
  return this.__data__.set(e, qb), this;
}
function Lb(e) {
  return this.__data__.has(e);
}
function Sr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Ge(); ++t < r; )
    this.add(e[t]);
}
Sr.prototype.add = Sr.prototype.push = Wb;
Sr.prototype.has = Lb;
function zb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function Bb(e, t) {
  return e.has(t);
}
var Gb = 1, Ub = 2;
function Sy(e, t, r, n, i, o) {
  var a = r & Gb, s = e.length, u = t.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(e), c = o.get(t);
  if (l && c)
    return l == t && c == e;
  var h = -1, O = !0, d = r & Ub ? new Sr() : void 0;
  for (o.set(e, t), o.set(t, e); ++h < s; ) {
    var m = e[h], y = t[h];
    if (n)
      var g = a ? n(y, m, h, t, e, o) : n(m, y, h, e, t, o);
    if (g !== void 0) {
      if (g)
        continue;
      O = !1;
      break;
    }
    if (d) {
      if (!zb(t, function(S, w) {
        if (!Bb(d, w) && (m === S || i(m, S, r, n, o)))
          return d.push(w);
      })) {
        O = !1;
        break;
      }
    } else if (!(m === y || i(m, y, r, n, o))) {
      O = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), O;
}
function Hb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function Vb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Xb = 1, Kb = 2, Jb = "[object Boolean]", Yb = "[object Date]", Qb = "[object Error]", Zb = "[object Map]", ew = "[object Number]", tw = "[object RegExp]", rw = "[object Set]", nw = "[object String]", iw = "[object Symbol]", ow = "[object ArrayBuffer]", aw = "[object DataView]", Ds = Je ? Je.prototype : void 0, Nn = Ds ? Ds.valueOf : void 0;
function sw(e, t, r, n, i, o, a) {
  switch (r) {
    case aw:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ow:
      return !(e.byteLength != t.byteLength || !o(new js(e), new js(t)));
    case Jb:
    case Yb:
    case ew:
      return po(+e, +t);
    case Qb:
      return e.name == t.name && e.message == t.message;
    case tw:
    case nw:
      return e == t + "";
    case Zb:
      var s = Hb;
    case rw:
      var u = n & Xb;
      if (s || (s = Vb), e.size != t.size && !u)
        return !1;
      var l = a.get(e);
      if (l)
        return l == t;
      n |= Kb, a.set(e, t);
      var c = Sy(s(e), s(t), n, i, o, a);
      return a.delete(e), c;
    case iw:
      if (Nn)
        return Nn.call(e) == Nn.call(t);
  }
  return !1;
}
var uw = 1, lw = Object.prototype, cw = lw.hasOwnProperty;
function fw(e, t, r, n, i, o) {
  var a = r & uw, s = xs(e), u = s.length, l = xs(t), c = l.length;
  if (u != c && !a)
    return !1;
  for (var h = u; h--; ) {
    var O = s[h];
    if (!(a ? O in t : cw.call(t, O)))
      return !1;
  }
  var d = o.get(e), m = o.get(t);
  if (d && m)
    return d == t && m == e;
  var y = !0;
  o.set(e, t), o.set(t, e);
  for (var g = a; ++h < u; ) {
    O = s[h];
    var S = e[O], w = t[O];
    if (n)
      var P = a ? n(w, S, O, t, e, o) : n(S, w, O, e, t, o);
    if (!(P === void 0 ? S === w || i(S, w, r, n, o) : P)) {
      y = !1;
      break;
    }
    g || (g = O == "constructor");
  }
  if (y && !g) {
    var D = e.constructor, j = t.constructor;
    D != j && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof j == "function" && j instanceof j) && (y = !1);
  }
  return o.delete(e), o.delete(t), y;
}
var pw = 1, Is = "[object Arguments]", Rs = "[object Array]", dr = "[object Object]", yw = Object.prototype, Ms = yw.hasOwnProperty;
function hw(e, t, r, n, i, o) {
  var a = Ie(e), s = Ie(t), u = a ? Rs : Ke(e), l = s ? Rs : Ke(t);
  u = u == Is ? dr : u, l = l == Is ? dr : l;
  var c = u == dr, h = l == dr, O = u == l;
  if (O && Hi(e)) {
    if (!Hi(t))
      return !1;
    a = !0, c = !1;
  }
  if (O && !c)
    return o || (o = new Le()), a || ky(e) ? Sy(e, t, r, n, i, o) : sw(e, t, u, r, n, i, o);
  if (!(r & pw)) {
    var d = c && Ms.call(e, "__wrapped__"), m = h && Ms.call(t, "__wrapped__");
    if (d || m) {
      var y = d ? e.value() : e, g = m ? t.value() : t;
      return o || (o = new Le()), i(y, g, r, n, o);
    }
  }
  return O ? (o || (o = new Le()), fw(e, t, r, n, i, o)) : !1;
}
function _o(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !xt(e) && !xt(t) ? e !== e && t !== t : hw(e, t, r, n, _o, i);
}
var dw = 1, mw = 2;
function vw(e, t, r, n) {
  var i = r.length, o = i;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var a = r[i];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    a = r[i];
    var s = a[0], u = e[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var c = new Le(), h;
      if (!(h === void 0 ? _o(l, u, dw | mw, n, c) : h))
        return !1;
    }
  }
  return !0;
}
function Py(e) {
  return e === e && !Ye(e);
}
function gw(e) {
  for (var t = wo(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, Py(i)];
  }
  return t;
}
function jy(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function bw(e) {
  var t = gw(e);
  return t.length == 1 && t[0][2] ? jy(t[0][0], t[0][1]) : function(r) {
    return r === e || vw(r, e, t);
  };
}
function ww(e, t) {
  return e != null && t in Object(e);
}
function _w(e, t) {
  return e != null && wy(e, t, ww);
}
var Ow = 1, xw = 2;
function Ew(e, t) {
  return yo(e) && Py(t) ? jy(pt(e), t) : function(r) {
    var n = vy(r, e);
    return n === void 0 && n === t ? _w(r, e) : _o(t, n, Ow | xw);
  };
}
function Aw(e) {
  return function(t) {
    return t?.[e];
  };
}
function kw(e) {
  return function(t) {
    return Br(t, e);
  };
}
function Sw(e) {
  return yo(e) ? Aw(pt(e)) : kw(e);
}
function Pw(e) {
  return typeof e == "function" ? e : e == null ? Oy : typeof e == "object" ? Ie(e) ? Ew(e[0], e[1]) : bw(e) : Sw(e);
}
function jw(e) {
  return function(t, r, n) {
    for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
      var u = a[++i];
      if (r(o[u], u, o) === !1)
        break;
    }
    return t;
  };
}
var Dw = jw();
function Iw(e, t) {
  return e && Dw(e, t, wo);
}
function Rw(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!bo(r))
      return e(r, n);
    for (var i = r.length, o = -1, a = Object(r); ++o < i && n(a[o], o, a) !== !1; )
      ;
    return r;
  };
}
var Mw = Rw(Iw);
function Fw(e, t) {
  var r = -1, n = bo(e) ? Array(e.length) : [];
  return Mw(e, function(i, o, a) {
    n[++r] = t(i, o, a);
  }), n;
}
function $w(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
function Tw(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, o = Et(e), a = t !== void 0, s = t === null, u = t === t, l = Et(t);
    if (!s && !l && !o && e > t || o && a && u && !s && !l || n && a && u || !r && u || !i)
      return 1;
    if (!n && !o && !l && e < t || l && r && i && !n && !o || s && r && i || !a && i || !u)
      return -1;
  }
  return 0;
}
function Nw(e, t, r) {
  for (var n = -1, i = e.criteria, o = t.criteria, a = i.length, s = r.length; ++n < a; ) {
    var u = Tw(i[n], o[n]);
    if (u) {
      if (n >= s)
        return u;
      var l = r[n];
      return u * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function Cw(e, t, r) {
  t.length ? t = br(t, function(o) {
    return Ie(o) ? function(a) {
      return Br(a, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [Oy];
  var n = -1;
  t = br(t, Ey(Pw));
  var i = Fw(e, function(o, a, s) {
    var u = br(t, function(l) {
      return l(o);
    });
    return { criteria: u, index: ++n, value: o };
  });
  return $w(i, function(o, a) {
    return Nw(o, a, r);
  });
}
function qw(e, t, r, n) {
  return e == null ? [] : (Ie(t) || (t = t == null ? [] : [t]), r = r, Ie(r) || (r = r == null ? [] : [r]), Cw(e, t, r));
}
let Ww = class {
  static __container_entry_key = "LifecycleService";
  hooks;
  logger;
  debug = !1;
  constructor(e = {}) {
    this.debug = e.debug ?? this.debug, this.hooks = e.hooks ?? /* @__PURE__ */ new Map(), this.logger = e.logger ?? new Dt(), e.onError && (this.onError = e.onError);
  }
  setOnError(e) {
    this.onError = e;
  }
  onError(e, t) {
    Object.assign(e, { context: t }), this.logger.error(`Error in hook ${t.method} (${t.hookId}):`, e);
  }
  mapAliases(e) {
    const t = [], r = Array.from(this.hooks.values());
    for (const n of r) {
      if (e.includes(n.hook_id)) {
        t.push(n.hook_id);
        continue;
      }
      n.hook_aliases && n.hook_aliases.find((i) => e.includes(i)) && t.push(n.hook_id);
    }
    return t;
  }
  list(e) {
    let t = Array.from(this.hooks.values());
    if (e?.exclude) {
      let r = Array.isArray(e.exclude) ? e.exclude : [e.exclude];
      r = this.mapAliases(r), t = t.filter((n) => !r.includes(n.hook_id));
    }
    if (e?.include) {
      let r = Array.isArray(e.include) ? e.include : [e.include];
      r = this.mapAliases(r), t = t.filter((n) => r.includes(n.hook_id));
    }
    return t = qw(t, ["order"], ["asc"]), t;
  }
  add(...e) {
    const t = [];
    for (const r of e) {
      if (typeof r == "function") {
        t.push(new r());
        continue;
      }
      t.push(r);
    }
    for (const r of t) {
      if (!r.hook_id) {
        this.logger.warn("Skipping hook without hook_id:", r);
        continue;
      }
      this.hooks.set(r.hook_id, r), this.debug && this.logger.debug("add " + r.hook_id), r.subhooks && r.subhooks.forEach((n) => this.add(n));
    }
  }
  async emitMethod(e, t) {
    const r = this.list(t);
    this.debug && this.logger.debug(`emitting ${e} for hooks:`, {
      hooks: r.map((n) => n.hook_id)
    });
    for (const n of this.list(t)) {
      const i = {
        register: () => Promise.all([n.register(), n.onRegister()]),
        load: () => Promise.all([n.load(), n.onLoad()]),
        boot: () => Promise.all([n.boot(), n.onBoot()]),
        shutdown: () => Promise.all([n.shutdown(), n.onShutdown()])
      }, [o] = await ur(() => i[e]());
      if (o) {
        this.onError(o, { hookId: n.hook_id, method: e });
        continue;
      }
      this.debug && this.logger.debug(`${e} ` + n.hook_id);
    }
  }
  async emit(e, t) {
    const r = Array.isArray(e) ? e : [e];
    for (const n of r)
      await this.emitMethod(n, t);
  }
  on(e, t) {
    const r = new _y();
    r.hook_id = `custom:${e}:${Date.now()}`, r[e] = t, this.add(r);
  }
  async register(e) {
    return this.emit("register", e);
  }
  async load(e) {
    return this.emit("load", e);
  }
  async boot(e) {
    return this.emit("boot", e);
  }
  async shutdown(e) {
    await this.emit("shutdown", e);
  }
  clear() {
    this.hooks.clear();
  }
};
class Lw extends Ww {
  addImports(t) {
    const r = [];
    for (const [n, i] of Object.entries(t)) {
      const o = i.default || i, a = new o();
      a.hook_id = a.hook_id || n, r.push(a);
    }
    r.forEach((n) => this.add(n));
  }
}
class zw extends lr(cr) {
  id;
  label;
  layout;
  to;
  target;
  group;
  order;
  icon;
  parent;
}
class Dy {
  constructor(t, r) {
    this.operator = t, this.value = r, Object.defineProperty(this, "t", { writable: !0 });
  }
  get notes() {
    return this.t;
  }
  addNote(t) {
    this.t = this.t || [], this.t.push(t);
  }
}
let Oo = class extends Dy {
}, Gr = class extends Oo {
  constructor(e, t) {
    if (!Array.isArray(t)) throw new Error(`"${e}" operator expects to receive an array of conditions`);
    super(e, t);
  }
};
const fr = "__itself__";
let Ur = class extends Dy {
  constructor(e, t, r) {
    super(e, r), this.field = t;
  }
};
const Iy = new Oo("__null__", null), Ji = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
function Bw(e, t) {
  return t instanceof Gr && t.operator === e;
}
function Ry(e, t) {
  return t.length === 1 ? t[0] : new Gr(e, (function r(n, i, o) {
    const a = o || [];
    for (let s = 0, u = i.length; s < u; s++) {
      const l = i[s];
      Bw(n, l) ? r(n, l.value, a) : a.push(l);
    }
    return a;
  })(e, t));
}
const Gw = (e) => e, My = () => /* @__PURE__ */ Object.create(null), Fy = Object.defineProperty(My(), "__@type@__", { value: "ignore value" });
function Uw(e, t, r = !1) {
  if (!e || e && e.constructor !== Object) return !1;
  for (const n in e)
    if (Ji(e, n) && Ji(t, n) && (!r || e[n] !== Fy)) return !0;
  return !1;
}
function Hw(e) {
  const t = [];
  for (const r in e) Ji(e, r) && e[r] !== Fy && t.push(r);
  return t;
}
function Cn(e, t) {
  t !== Iy && e.push(t);
}
const $y = (e) => Ry("and", e), Ty = { compound(e, t, r) {
  const n = (Array.isArray(t) ? t : [t]).map((i) => r.parse(i));
  return new Gr(e.name, n);
}, field: (e, t, r) => new Ur(e.name, r.field, t), document: (e, t) => new Oo(e.name, t) };
let Vw = class {
  constructor(e, t = My()) {
    this.o = void 0, this.s = void 0, this.i = void 0, this.u = void 0, this.h = void 0, this.parse = this.parse.bind(this), this.u = { operatorToConditionName: t.operatorToConditionName || Gw, defaultOperatorName: t.defaultOperatorName || "eq", mergeFinalConditions: t.mergeFinalConditions || $y }, this.o = Object.keys(e).reduce((r, n) => (r[n] = Object.assign({ name: this.u.operatorToConditionName(n) }, e[n]), r), {}), this.s = Object.assign({}, t.fieldContext, { field: "", query: {}, parse: this.parse, hasOperators: (r) => Uw(r, this.o, t.useIgnoreValue) }), this.i = Object.assign({}, t.documentContext, { parse: this.parse, query: {} }), this.h = t.useIgnoreValue ? Hw : Object.keys;
  }
  setParse(e) {
    this.parse = e, this.s.parse = e, this.i.parse = e;
  }
  parseField(e, t, r, n) {
    const i = this.o[t];
    if (!i) throw new Error(`Unsupported operator "${t}"`);
    if (i.type !== "field") throw new Error(`Unexpected ${i.type} operator "${t}" at field level`);
    return this.s.field = e, this.s.query = n, this.parseInstruction(i, r, this.s);
  }
  parseInstruction(e, t, r) {
    return typeof e.validate == "function" && e.validate(e, t), (e.parse || Ty[e.type])(e, t, r);
  }
  parseFieldOperators(e, t) {
    const r = [], n = this.h(t);
    for (let i = 0, o = n.length; i < o; i++) {
      const a = n[i];
      if (!this.o[a]) throw new Error(`Field query for "${e}" may contain only operators or a plain object as a value`);
      Cn(r, this.parseField(e, a, t[a], t));
    }
    return r;
  }
  parse(e) {
    const t = [], r = this.h(e);
    this.i.query = e;
    for (let n = 0, i = r.length; n < i; n++) {
      const o = r[n], a = e[o], s = this.o[o];
      if (s) {
        if (s.type !== "document" && s.type !== "compound") throw new Error(`Cannot use parsing instruction for operator "${o}" in "document" context as it is supposed to be used in  "${s.type}" context`);
        Cn(t, this.parseInstruction(s, a, this.i));
      } else this.s.hasOperators(a) ? t.push(...this.parseFieldOperators(o, a)) : Cn(t, this.parseField(o, this.u.defaultOperatorName, a, e));
    }
    return this.u.mergeFinalConditions(t);
  }
};
function qn(e, t) {
  const r = e[t];
  if (typeof r != "function") throw new Error(`Unable to interpret "${t}" condition. Did you forget to register interpreter for it?`);
  return r;
}
function Xw(e) {
  return e.operator;
}
function Kw(e, t) {
  const r = t, n = r && r.getInterpreterName || Xw;
  let i;
  switch (r ? r.numberOfArguments : 0) {
    case 1:
      i = (a) => {
        const s = n(a, r);
        return qn(e, s)(a, o);
      };
      break;
    case 3:
      i = (a, s, u) => {
        const l = n(a, r);
        return qn(e, l)(a, s, u, o);
      };
      break;
    default:
      i = (a, s) => {
        const u = n(a, r);
        return qn(e, u)(a, s, o);
      };
  }
  const o = Object.assign({}, r, { interpret: i });
  return o.interpret;
}
function Jw(e, t) {
  return (r, ...n) => {
    const i = e(r, ...n), o = t.bind(null, i);
    return o.ast = i, o;
  };
}
function Ny(e, t) {
  if (!Array.isArray(t)) throw new Error(`"${e.name}" expects value to be an array`);
}
function Cy(e, t) {
  if (Ny(e, t), !t.length) throw new Error(`"${e.name}" expects to have at least one element in array`);
}
const xo = (e) => (t, r) => {
  if (typeof r !== e) throw new Error(`"${t.name}" expects value to be a "${e}"`);
}, qy = { type: "compound", validate: Cy, parse(e, t, { parse: r }) {
  const n = t.map((i) => r(i));
  return Ry(e.name, n);
} }, Yw = qy, Qw = { type: "compound", validate: Cy }, Zw = { type: "field", validate(e, t) {
  if (!(t && (t instanceof RegExp || t.constructor === Object))) throw new Error(`"${e.name}" expects to receive either regular expression or object of field operators`);
}, parse(e, t, r) {
  const n = t instanceof RegExp ? new Ur("regex", r.field, t) : r.parse(t, r);
  return new Gr(e.name, [n]);
} }, Wy = { type: "field", validate(e, t) {
  if (!t || t.constructor !== Object) throw new Error(`"${e.name}" expects to receive an object with nested query or field level operators`);
}, parse(e, t, { parse: r, field: n, hasOperators: i }) {
  const o = i(t) ? r(t, { field: fr }) : r(t);
  return new Ur(e.name, n, o);
} }, Ly = { type: "field", validate: xo("number") }, Hr = { type: "field", validate: Ny }, zy = Hr, By = Hr, e0 = { type: "field", validate(e, t) {
  if (!Array.isArray(t) || t.length !== 2) throw new Error(`"${e.name}" expects an array with 2 numeric elements`);
} }, Gy = { type: "field", validate: xo("boolean") }, Eo = { type: "field", validate: function(e, t) {
  if (!(typeof t == "string" || typeof t == "number" || t instanceof Date)) throw new Error(`"${e.name}" expects value to be comparable (i.e., string, number or date)`);
} }, Vr = Eo, Uy = Vr, Hy = Vr, Ao = { type: "field" }, Vy = Ao, Xy = { type: "field", validate(e, t) {
  if (!(t instanceof RegExp) && typeof t != "string") throw new Error(`"${e.name}" expects value to be a regular expression or a string that represents regular expression`);
}, parse(e, t, r) {
  const n = typeof t == "string" ? new RegExp(t, r.query.$options || "") : t;
  return new Ur(e.name, r.field, n);
} }, Ky = { type: "field", parse: () => Iy }, t0 = { type: "document", validate: xo("function") };
var r0 = Object.freeze({ __proto__: null, $and: qy, $or: Yw, $nor: Qw, $not: Zw, $elemMatch: Wy, $size: Ly, $in: Hr, $nin: zy, $all: By, $mod: e0, $exists: Gy, $gte: Eo, $gt: Vr, $lt: Uy, $lte: Hy, $eq: Ao, $ne: Vy, $regex: Xy, $options: Ky, $where: t0 });
let n0 = class extends Vw {
  constructor(e) {
    super(e, { defaultOperatorName: "$eq", operatorToConditionName: (t) => t.slice(1) });
  }
  parse(e, t) {
    return t && t.field ? $y(this.parseFieldOperators(t.field, e)) : super.parse(e);
  }
};
const Yi = r0;
function ko(e, t, r) {
  for (let n = 0, i = e.length; n < i; n++) if (r(e[n], t) === 0) return !0;
  return !1;
}
function So(e, t) {
  return Array.isArray(e) && Number.isNaN(Number(t));
}
function Fs(e, t, r) {
  if (!So(e, t)) return r(e, t);
  let n = [];
  for (let i = 0; i < e.length; i++) {
    const o = r(e[i], t);
    o !== void 0 && (n = n.concat(o));
  }
  return n;
}
function vt(e) {
  return (t, r, n) => {
    const i = n.get(r, t.field);
    return Array.isArray(i) ? i.some((o) => e(t, o, n)) : e(t, i, n);
  };
}
const i0 = Object.hasOwn || Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty), o0 = (e, t) => e[t];
function Jy(e, t, r) {
  const n = t.lastIndexOf(".");
  return n === -1 ? [e, t] : [r(e, t.slice(0, n)), t.slice(n + 1)];
}
function a0(e, t, r = o0) {
  if (t === fr) return e;
  if (!e) throw new Error(`Unable to get field "${t}" out of ${String(e)}.`);
  return (function(n, i, o) {
    if (i.indexOf(".") === -1) return Fs(n, i, o);
    const a = i.split(".");
    let s = n;
    for (let u = 0, l = a.length; u < l; u++) if (s = Fs(s, a[u], o), !s || typeof s != "object") return u < l - 1 ? void 0 : s;
    return s;
  })(e, t, r);
}
function Yy(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Qy(e, t = {}) {
  return Kw(e, Object.assign({ get: a0, compare: Yy }, t));
}
const Zy = (e, t, { interpret: r }) => e.value.some((n) => r(n, t)), s0 = (e, t, r) => !Zy(e, t, r), eh = (e, t, { interpret: r }) => e.value.every((n) => r(n, t)), u0 = (e, t, { interpret: r }) => !r(e.value[0], t), Po = (e, t, { compare: r, get: n }) => {
  const i = n(t, e.field);
  return Array.isArray(i) && !Array.isArray(e.value) ? ko(i, e.value, r) : r(i, e.value) === 0;
}, th = (e, t, r) => !Po(e, t, r), rh = vt((e, t, r) => {
  const n = r.compare(t, e.value);
  return n === 0 || n === -1;
}), nh = vt((e, t, r) => r.compare(t, e.value) === -1), ih = vt((e, t, r) => r.compare(t, e.value) === 1), oh = vt((e, t, r) => {
  const n = r.compare(t, e.value);
  return n === 0 || n === 1;
}), ah = (e, t, { get: r }) => {
  if (e.field === fr) return t !== void 0;
  const [n, i] = Jy(t, e.field, r), o = (a) => a == null ? !!a === e.value : i0(a, i) === e.value;
  return So(n, i) ? n.some(o) : o(n);
}, l0 = vt((e, t) => typeof t == "number" && t % e.value[0] === e.value[1]), sh = (e, t, { get: r }) => {
  const [n, i] = Jy(t, e.field, r), o = (a) => {
    const s = r(a, i);
    return Array.isArray(s) && s.length === e.value;
  };
  return e.field !== fr && So(n, i) ? n.some(o) : o(n);
}, uh = vt((e, t) => typeof t == "string" && e.value.test(t)), Xr = vt((e, t, { compare: r }) => ko(e.value, t, r)), lh = (e, t, r) => !Xr(e, t, r), ch = (e, t, { compare: r, get: n }) => {
  const i = n(t, e.field);
  return Array.isArray(i) && e.value.every((o) => ko(i, o, r));
}, fh = (e, t, { interpret: r, get: n }) => {
  const i = n(t, e.field);
  return Array.isArray(i) && i.some((o) => r(e.value, o));
}, c0 = (e, t) => e.value.call(t);
var f0 = Object.freeze({ __proto__: null, or: Zy, nor: s0, and: eh, not: u0, eq: Po, ne: th, lte: rh, lt: nh, gt: ih, gte: oh, exists: ah, mod: l0, size: sh, regex: uh, within: Xr, nin: lh, all: ch, elemMatch: fh, where: c0 });
const jo = Object.assign({}, f0, { in: Xr });
Qy(jo);
function $s(e) {
  return e === null || typeof e != "object" ? e : e instanceof Date ? e.getTime() : e && typeof e.toJSON == "function" ? e.toJSON() : e;
}
const p0 = (e, t) => Yy($s(e), $s(t));
function Do(e, t, r) {
  const n = new n0(e), i = Qy(t, Object.assign({ compare: p0 }, r));
  if (r && r.forPrimitives) {
    const o = { field: fr }, a = n.parse;
    n.setParse((s) => a(s, o));
  }
  return Jw(n.parse, i);
}
Do(Yi, jo);
Do(["$and", "$or"].reduce((e, t) => (e[t] = Object.assign({}, e[t], { type: "field" }), e), Object.assign({}, Yi, { $nor: Object.assign({}, Yi.$nor, { type: "field", parse: Ty.compound }) })), jo, { forPrimitives: !0 });
const ph = Object.hasOwn || ((e, t) => Object.prototype.hasOwnProperty.call(e, t));
function Qi(e) {
  return Array.isArray(e) ? e : [e];
}
const wt = "__caslSubjectType__";
function Wn(e, t) {
  if (t) {
    if (!ph(t, wt)) Object.defineProperty(t, wt, { value: e });
    else if (e !== t[wt]) throw new Error(`Trying to cast object to subject type ${e} but previously it was casted to ${t[wt]}`);
  }
  return t;
}
const wr = (e) => {
  const t = typeof e;
  return t === "string" || t === "function";
}, y0 = (e) => e.modelName || e.name;
function yh(e) {
  return ph(e, wt) ? e[wt] : y0(e.constructor);
}
const Ts = { function: (e) => e.constructor, string: yh };
function Ns(e, t, r) {
  for (let n = r; n < t.length; n++) e.push(t[n]);
}
function Cs(e, t) {
  if (!e || !e.length) return t || [];
  if (!t || !t.length) return e || [];
  let r = 0, n = 0;
  const i = [];
  for (; r < e.length && n < t.length; ) e[r].priority < t[n].priority ? (i.push(e[r]), r++) : e[r].priority > t[n].priority ? (i.push(t[n]), n++) : (i.push(e[r]), r++, n++);
  return Ns(i, e, r), Ns(i, t, n), i;
}
function mr(e, t, r) {
  let n = e.get(t);
  return n || (n = r(), e.set(t, n)), n;
}
const h0 = (e) => e;
function d0(e, t) {
  let r;
  for (let n = 0; n < e.length; n++) {
    const i = t(e[n]);
    r && i && r.push(e[n]), i || (r ??= e.slice(0, n));
  }
  return r || e;
}
function m0(e, t) {
  if (Array.isArray(e.fields) && !e.fields.length) throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");
  if (e.fields && !t.fieldMatcher) throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');
  if (e.conditions && !t.conditionsMatcher) throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions');
}
class v0 {
  constructor(t, r, n = 0) {
    m0(t, r), this.action = r.resolveAction(t.action), this.subject = t.subject, this.inverted = !!t.inverted, this.conditions = t.conditions, this.reason = t.reason, this.origin = t, this.fields = t.fields ? Qi(t.fields) : void 0, this.priority = n, this.t = r;
  }
  i() {
    return this.conditions && !this.o && (this.o = this.t.conditionsMatcher(this.conditions)), this.o;
  }
  get ast() {
    const t = this.i();
    return t ? t.ast : void 0;
  }
  matchesConditions(t) {
    return this.conditions ? !t || wr(t) ? !this.inverted : this.i()(t) : !0;
  }
  matchesField(t) {
    return this.fields ? t ? (this.u || (this.u = this.t.fieldMatcher(this.fields)), this.u(t)) : !this.inverted : !0;
  }
}
function g0(e, t) {
  const r = { value: e, prev: t, next: null };
  return t && (t.next = r), r;
}
function b0(e) {
  e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
}
const qs = () => ({ rules: [], merged: !1 }), Ws = () => /* @__PURE__ */ new Map();
class w0 {
  constructor(t = [], r = {}) {
    this.h = !1, this.l = /* @__PURE__ */ new Map(), this.p = { conditionsMatcher: r.conditionsMatcher, fieldMatcher: r.fieldMatcher, resolveAction: r.resolveAction || h0 }, this.$ = r.anyAction || "manage", this.A = r.anySubjectType || "all", this.m = t, this.M = !!r.detectSubjectType, this.j = r.detectSubjectType || yh, this.v(t);
  }
  get rules() {
    return this.m;
  }
  detectSubjectType(t) {
    return wr(t) ? t : t ? this.j(t) : this.A;
  }
  update(t) {
    const r = { rules: t, ability: this, target: this };
    return this._("update", r), this.m = t, this.v(t), this._("updated", r), this;
  }
  v(t) {
    const r = /* @__PURE__ */ new Map();
    let n;
    for (let i = t.length - 1; i >= 0; i--) {
      const o = t.length - i - 1, a = new v0(t[i], this.p, o), s = Qi(a.action), u = Qi(a.subject || this.A);
      !this.h && a.fields && (this.h = !0);
      for (let l = 0; l < u.length; l++) {
        const c = mr(r, u[l], Ws);
        n === void 0 && (n = typeof u[l]), typeof u[l] !== n && n !== "mixed" && (n = "mixed");
        for (let h = 0; h < s.length; h++) mr(c, s[h], qs).rules.push(a);
      }
    }
    if (this.l = r, n !== "mixed" && !this.M) {
      const i = Ts[n] || Ts.string;
      this.j = i;
    }
  }
  possibleRulesFor(t, r = this.A) {
    if (!wr(r)) throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');
    const n = mr(this.l, r, Ws), i = mr(n, t, qs);
    if (i.merged) return i.rules;
    const o = t !== this.$ && n.has(this.$) ? n.get(this.$).rules : void 0;
    let a = Cs(i.rules, o);
    return r !== this.A && (a = Cs(a, this.possibleRulesFor(t, this.A))), i.rules = a, i.merged = !0, a;
  }
  rulesFor(t, r, n) {
    const i = this.possibleRulesFor(t, r);
    if (n && typeof n != "string") throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");
    return this.h ? d0(i, (o) => o.matchesField(n)) : i;
  }
  actionsFor(t) {
    if (!wr(t)) throw new Error('"actionsFor" accepts only subject types (i.e., string or class) as a parameter');
    const r = /* @__PURE__ */ new Set(), n = this.l.get(t);
    n && Array.from(n.keys()).forEach((o) => r.add(o));
    const i = t !== this.A ? this.l.get(this.A) : void 0;
    return i && Array.from(i.keys()).forEach((o) => r.add(o)), Array.from(r);
  }
  on(t, r) {
    this.F = this.F || /* @__PURE__ */ new Map();
    const n = this.F, i = n.get(t) || null, o = g0(r, i);
    return n.set(t, o), () => {
      const a = n.get(t);
      !o.next && !o.prev && a === o ? n.delete(t) : o === a && n.set(t, o.prev), b0(o);
    };
  }
  _(t, r) {
    if (!this.F) return;
    let n = this.F.get(t) || null;
    const i = [];
    for (; n !== null; )
      i.push(n.value), n = n.prev;
    for (let o = 0; o < i.length; o++) i[o](r);
  }
}
class _0 extends w0 {
  can(t, r, n) {
    const i = this.relevantRuleFor(t, r, n);
    return !!i && !i.inverted;
  }
  relevantRuleFor(t, r, n) {
    const i = this.detectSubjectType(r), o = this.rulesFor(t, i, n);
    for (let a = 0, s = o.length; a < s; a++) if (o[a].matchesConditions(r)) return o[a];
    return null;
  }
  cannot(t, r, n) {
    return !this.can(t, r, n);
  }
}
const O0 = { $eq: Ao, $ne: Vy, $lt: Uy, $lte: Hy, $gt: Vr, $gte: Eo, $in: Hr, $nin: zy, $all: By, $size: Ly, $regex: Xy, $options: Ky, $elemMatch: Wy, $exists: Gy }, x0 = { eq: Po, ne: th, lt: nh, lte: rh, gt: ih, gte: oh, in: Xr, nin: lh, all: ch, size: sh, regex: uh, elemMatch: fh, exists: ah, and: eh }, E0 = Do(O0, x0), A0 = /[-/\\^$+?.()|[\]{}]/g, k0 = /\.?\*+\.?/g, S0 = /\*+/, P0 = /\./g;
function j0(e, t, r) {
  const n = r[0] === "*" || e[0] === "." && e[e.length - 1] === "." ? "+" : "*", i = e.indexOf("**") === -1 ? "[^.]" : ".", o = e.replace(P0, "\\$&").replace(S0, i + n);
  return t + e.length === r.length ? `(?:${o})?` : o;
}
function D0(e, t, r) {
  return e === "." && (r[t - 1] === "*" || r[t + 1] === "*") ? e : `\\${e}`;
}
function I0(e) {
  const t = e.map((n) => n.replace(A0, D0).replace(k0, j0)), r = t.length > 1 ? `(?:${t.join("|")})` : t[0];
  return new RegExp(`^${r}$`);
}
const R0 = (e) => {
  let t;
  return (r) => (typeof t > "u" && (t = e.every((n) => n.indexOf("*") === -1) ? null : I0(e)), t === null ? e.indexOf(r) !== -1 : t.test(r));
};
function M0(e = [], t = {}) {
  return new _0(e, Object.assign({ conditionsMatcher: E0, fieldMatcher: R0 }, t));
}
function F0(e) {
  return e.prototype !== void 0 && typeof e.prototype.possibleRulesFor == "function";
}
class $0 {
  constructor(t) {
    this.O = t;
  }
  because(t) {
    return this.O.reason = t, this;
  }
}
class T0 {
  constructor(t) {
    this.rules = [], this.C = t, this.can = (r, n, i, o) => this.R(r, n, i, o, !1), this.cannot = (r, n, i, o) => this.R(r, n, i, o, !0), this.build = (r) => F0(this.C) ? new this.C(this.rules, r) : this.C(this.rules, r);
  }
  R(t, r, n, i, o) {
    const a = { action: t };
    return o && (a.inverted = o), r && (a.subject = r, Array.isArray(n) || typeof n == "string" ? a.fields = n : typeof n < "u" && (a.conditions = n), typeof i < "u" && (a.conditions = i)), this.rules.push(a), new $0(a);
  }
}
function N0(e, t) {
  const r = new T0(M0), n = e(r.can, r.cannot);
  return n && typeof n.then == "function" ? n.then(() => r.build(t)) : r.build(t);
}
class C0 extends lr(cr) {
  id;
  name;
  description = null;
  origin;
  subject;
  action;
  conditions = null;
  get editable() {
    return this.origin === "custom";
  }
  get parsedConditions() {
    if (!this.conditions)
      return {};
    const [t, r] = ur.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return t ? {} : r;
  }
}
class q0 {
  static __container_entry_key = "AclEntity";
  ability;
  permissions;
  debug = !1;
  logger;
  constructor(t = {}) {
    const r = (t.permissions || []).map((n) => C0.from(n));
    this.permissions = r, this.debug = t.debug || !1, this.logger = t.logger || new Dt().child({ label: "acl" }), this.ability = N0((n) => {
      r.forEach((i) => {
        n(i.action, i.subject, i.parsedConditions);
      });
    }), this.debug && this.logger.debug("initialized in debug mode", {
      permissions: this.permissions
    });
  }
  can(t, r, n) {
    if (!n)
      return this.ability.can(t, r);
    const i = Wn(r, n);
    return this.ability.can(t, i);
  }
  cannot(t, r, n) {
    if (!n)
      return this.ability.cannot(t, r);
    const i = Wn(r, n);
    return this.ability.cannot(t, i);
  }
  subject(t, r) {
    return Wn(t, r);
  }
}
const W0 = je.proxy(q0);
class L0 {
  static __container_entry_key = "MenuService";
  items = /* @__PURE__ */ new Map();
  add(...t) {
    for (const r of t)
      r.id || (r.id = JSON.stringify(r)), this.items.set(r.id, zw.from(r));
  }
  remove(t) {
    this.items.delete(t);
  }
  list(t = {}) {
    let r = JSON.parse(JSON.stringify(Array.from(this.items.values())));
    return t.layout && (r = r.filter((n) => n.layout === t.layout)), t.group && (r = r.filter((n) => n.group === t.group || n.parent === t.group)), t.parent && (r = r.filter((n) => n.parent === t.parent)), t.allowed !== void 0 && t.allowed === !0 && (r = r.filter((n) => W0.can("view", n))), r.sort((n, i) => {
      const o = n.order ? n.order : 98, a = i.order ? i.order : 98;
      return o - a;
    }), r;
  }
  clear() {
    this.items.clear();
  }
}
const _E = z0;
function z0(e, t = {}) {
  return Jh({
    ...t,
    validationSchema: Zd(e)
  });
}
const hh = globalThis, B0 = hh.layout || new Mg();
hh.layout = B0;
Vh(/* @__PURE__ */ new Map());
const G0 = je.proxy(Bm);
class U0 {
  static __container_entry_key = "DashboardWidgetRegistry";
  definitions = /* @__PURE__ */ new Map();
  register(...t) {
    for (const r of t)
      this.definitions.set(r.id, r);
  }
  get(t) {
    return this.definitions.get(t) || null;
  }
  list() {
    return Array.from(this.definitions.values());
  }
}
je.proxy(U0);
const H0 = je.proxy(Lw);
je.proxy(Dt);
const Ls = je.proxy(L0), OE = je.proxy("route"), Zi = je.proxy("router");
let V0 = class extends lr(cr, Wm(_y)) {
  id;
  name;
  enabled = !1;
  dependencies = {};
  build = {};
  directory;
  upgrade_info;
  setData(e) {
    const t = Object.fromEntries(
      Object.entries(e).filter(([, r]) => r !== void 0)
    );
    Object.assign(this, t), this.hook_id = `module:${this.id}`;
  }
};
class xE extends fy(V0) {
}
let X0 = class extends lr(cr) {
  id;
  name;
  version;
  enabled;
  aliases;
  version_channel;
  version_available_channels;
};
class K0 extends fy(X0) {
  addPagesFolder(t, r) {
    Zi.auto(t, r);
  }
  async load() {
  }
}
function EE(e) {
  return e;
}
function AE(e) {
  return e;
}
const kE = cy;
function J0(e) {
  const t = e.exclude || ["/auth/login", "/auth/register"];
  return (r) => {
    if (!G0.user && !t.includes(r.path))
      return typeof e.redirect == "function" ? e.redirect(r) : e.redirect;
  };
}
const Y0 = J0({
  redirect: (e) => "/auth/login?redirect=" + encodeURIComponent(e.fullPath)
});
var Q0 = typeof global == "object" && global && global.Object === Object && global, Z0 = typeof self == "object" && self && self.Object === Object && self, Io = Q0 || Z0 || Function("return this")(), At = Io.Symbol, dh = Object.prototype, e_ = dh.hasOwnProperty, t_ = dh.toString, Ht = At ? At.toStringTag : void 0;
function r_(e) {
  var t = e_.call(e, Ht), r = e[Ht];
  try {
    e[Ht] = void 0;
    var n = !0;
  } catch {
  }
  var i = t_.call(e);
  return n && (t ? e[Ht] = r : delete e[Ht]), i;
}
var n_ = Object.prototype, i_ = n_.toString;
function o_(e) {
  return i_.call(e);
}
var a_ = "[object Null]", s_ = "[object Undefined]", zs = At ? At.toStringTag : void 0;
function mh(e) {
  return e == null ? e === void 0 ? s_ : a_ : zs && zs in Object(e) ? r_(e) : o_(e);
}
function Pr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var u_ = "[object AsyncFunction]", l_ = "[object Function]", c_ = "[object GeneratorFunction]", f_ = "[object Proxy]";
function p_(e) {
  if (!Pr(e))
    return !1;
  var t = mh(e);
  return t == l_ || t == c_ || t == u_ || t == f_;
}
var Ln = Io["__core-js_shared__"], Bs = (function() {
  var e = /[^.]+$/.exec(Ln && Ln.keys && Ln.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function y_(e) {
  return !!Bs && Bs in e;
}
var h_ = Function.prototype, d_ = h_.toString;
function m_(e) {
  if (e != null) {
    try {
      return d_.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var v_ = /[\\^$.*+?()[\]{}|]/g, g_ = /^\[object .+?Constructor\]$/, b_ = Function.prototype, w_ = Object.prototype, __ = b_.toString, O_ = w_.hasOwnProperty, x_ = RegExp(
  "^" + __.call(O_).replace(v_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function E_(e) {
  if (!Pr(e) || y_(e))
    return !1;
  var t = p_(e) ? x_ : g_;
  return t.test(m_(e));
}
function A_(e, t) {
  return e?.[t];
}
function Ro(e, t) {
  var r = A_(e, t);
  return E_(r) ? r : void 0;
}
var Gs = (function() {
  try {
    var e = Ro(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function k_(e, t, r) {
  t == "__proto__" && Gs ? Gs(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function vh(e, t) {
  return e === t || e !== e && t !== t;
}
var S_ = Object.prototype, P_ = S_.hasOwnProperty;
function j_(e, t, r) {
  var n = e[t];
  (!(P_.call(e, t) && vh(n, r)) || r === void 0 && !(t in e)) && k_(e, t, r);
}
var Mo = Array.isArray;
function D_(e) {
  return e != null && typeof e == "object";
}
var I_ = "[object Symbol]";
function Fo(e) {
  return typeof e == "symbol" || D_(e) && mh(e) == I_;
}
var R_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, M_ = /^\w*$/;
function F_(e, t) {
  if (Mo(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Fo(e) ? !0 : M_.test(e) || !R_.test(e) || t != null && e in Object(t);
}
var tr = Ro(Object, "create");
function $_() {
  this.__data__ = tr ? tr(null) : {}, this.size = 0;
}
function T_(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var N_ = "__lodash_hash_undefined__", C_ = Object.prototype, q_ = C_.hasOwnProperty;
function W_(e) {
  var t = this.__data__;
  if (tr) {
    var r = t[e];
    return r === N_ ? void 0 : r;
  }
  return q_.call(t, e) ? t[e] : void 0;
}
var L_ = Object.prototype, z_ = L_.hasOwnProperty;
function B_(e) {
  var t = this.__data__;
  return tr ? t[e] !== void 0 : z_.call(t, e);
}
var G_ = "__lodash_hash_undefined__";
function U_(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = tr && t === void 0 ? G_ : t, this;
}
function yt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yt.prototype.clear = $_;
yt.prototype.delete = T_;
yt.prototype.get = W_;
yt.prototype.has = B_;
yt.prototype.set = U_;
function H_() {
  this.__data__ = [], this.size = 0;
}
function Kr(e, t) {
  for (var r = e.length; r--; )
    if (vh(e[r][0], t))
      return r;
  return -1;
}
var V_ = Array.prototype, X_ = V_.splice;
function K_(e) {
  var t = this.__data__, r = Kr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : X_.call(t, r, 1), --this.size, !0;
}
function J_(e) {
  var t = this.__data__, r = Kr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Y_(e) {
  return Kr(this.__data__, e) > -1;
}
function Q_(e, t) {
  var r = this.__data__, n = Kr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function It(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
It.prototype.clear = H_;
It.prototype.delete = K_;
It.prototype.get = J_;
It.prototype.has = Y_;
It.prototype.set = Q_;
var Z_ = Ro(Io, "Map");
function eO() {
  this.size = 0, this.__data__ = {
    hash: new yt(),
    map: new (Z_ || It)(),
    string: new yt()
  };
}
function tO(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Jr(e, t) {
  var r = e.__data__;
  return tO(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function rO(e) {
  var t = Jr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function nO(e) {
  return Jr(this, e).get(e);
}
function iO(e) {
  return Jr(this, e).has(e);
}
function oO(e, t) {
  var r = Jr(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function gt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gt.prototype.clear = eO;
gt.prototype.delete = rO;
gt.prototype.get = nO;
gt.prototype.has = iO;
gt.prototype.set = oO;
var aO = "Expected a function";
function $o(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(aO);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(i))
      return o.get(i);
    var a = e.apply(this, n);
    return r.cache = o.set(i, a) || o, a;
  };
  return r.cache = new ($o.Cache || gt)(), r;
}
$o.Cache = gt;
var sO = 500;
function uO(e) {
  var t = $o(e, function(n) {
    return r.size === sO && r.clear(), n;
  }), r = t.cache;
  return t;
}
var lO = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cO = /\\(\\)?/g, fO = uO(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(lO, function(r, n, i, o) {
    t.push(i ? o.replace(cO, "$1") : n || r);
  }), t;
});
function pO(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Us = At ? At.prototype : void 0, Hs = Us ? Us.toString : void 0;
function gh(e) {
  if (typeof e == "string")
    return e;
  if (Mo(e))
    return pO(e, gh) + "";
  if (Fo(e))
    return Hs ? Hs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function yO(e) {
  return e == null ? "" : gh(e);
}
function bh(e, t) {
  return Mo(e) ? e : F_(e, t) ? [e] : fO(yO(e));
}
var hO = 9007199254740991, dO = /^(?:0|[1-9]\d*)$/;
function mO(e, t) {
  var r = typeof e;
  return t = t ?? hO, !!t && (r == "number" || r != "symbol" && dO.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function wh(e) {
  if (typeof e == "string" || Fo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function vO(e, t, r, n) {
  if (!Pr(e))
    return e;
  t = bh(t, e);
  for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
    var u = wh(t[i]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = Pr(c) ? c : mO(t[i + 1]) ? [] : {});
    }
    j_(s, u, l), s = s[u];
  }
  return e;
}
function _h(e, t, r) {
  return e == null ? e : vO(e, t, r);
}
function gO(e, t) {
  t = bh(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[wh(t[r++])];
  return r && r == n ? e : void 0;
}
function bO(e, t, r) {
  var n = e == null ? void 0 : gO(e, t);
  return n === void 0 ? r : n;
}
var wO = class Oh extends Error {
  status = 500;
  constructor(t, r = 500) {
    super(t), this.name = "BaseException", this.status = r;
  }
  static fromError(t) {
    return new Oh(t.message, 500);
  }
};
async function xh(e) {
  try {
    return [null, await e()];
  } catch (t) {
    return [t, null];
  }
}
xh.sync = function(e) {
  try {
    return [null, e()];
  } catch (t) {
    return [t, null];
  }
};
var To = class {
  hook_id;
  hook_aliases;
  order;
  subhooks;
  async register() {
  }
  async load() {
  }
  async boot() {
  }
  async shutdown() {
  }
  async onRegister() {
  }
  async onLoad() {
  }
  async onBoot() {
  }
  async onShutdown() {
  }
}, Vs = Object.defineProperty, _O = (e, t) => {
  let r = {};
  for (var n in e) Vs(r, n, { get: e[n], enumerable: !0 });
  return Vs(r, Symbol.toStringTag, { value: "Module" }), r;
};
const Eh = 6048e5, OO = 864e5, Xs = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Qe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Xs in e ? e[Xs](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Fe(e, t) {
  return Qe(t || e, e);
}
let xO = {};
function Yr() {
  return xO;
}
function rr(e, t) {
  const r = Yr(), n = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = Fe(e, t?.in), o = i.getDay(), a = (o < n ? 7 : 0) + o - n;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function jr(e, t) {
  return rr(e, { ...t, weekStartsOn: 1 });
}
function Ah(e, t) {
  const r = Fe(e, t?.in), n = r.getFullYear(), i = Qe(r, 0);
  i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const o = jr(i), a = Qe(r, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = jr(a);
  return r.getTime() >= o.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Ks(e) {
  const t = Fe(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function EO(e, ...t) {
  const r = Qe.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function Js(e, t) {
  const r = Fe(e, t?.in);
  return r.setHours(0, 0, 0, 0), r;
}
function AO(e, t, r) {
  const [n, i] = EO(
    r?.in,
    e,
    t
  ), o = Js(n), a = Js(i), s = +o - Ks(o), u = +a - Ks(a);
  return Math.round((s - u) / OO);
}
function kO(e, t) {
  const r = Ah(e, t), n = Qe(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), jr(n);
}
function SO(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function PO(e) {
  return !(!SO(e) && typeof e != "number" || isNaN(+Fe(e)));
}
function jO(e, t) {
  const r = Fe(e, t?.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const DO = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, IO = (e, t, r) => {
  let n;
  const i = DO[e];
  return typeof i == "string" ? n = i : t === 1 ? n = i.one : n = i.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function zn(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const RO = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, MO = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, FO = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, $O = {
  date: zn({
    formats: RO,
    defaultWidth: "full"
  }),
  time: zn({
    formats: MO,
    defaultWidth: "full"
  }),
  dateTime: zn({
    formats: FO,
    defaultWidth: "full"
  })
}, TO = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, NO = (e, t, r, n) => TO[e];
function Vt(e) {
  return (t, r) => {
    const n = r?.context ? String(r.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = r?.width ? String(r.width) : a;
      i = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = r?.width ? String(r.width) : e.defaultWidth;
      i = e.values[s] || e.values[a];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
const CO = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, qO = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, WO = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, LO = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, zO = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, BO = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, GO = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, UO = {
  ordinalNumber: GO,
  era: Vt({
    values: CO,
    defaultWidth: "wide"
  }),
  quarter: Vt({
    values: qO,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Vt({
    values: WO,
    defaultWidth: "wide"
  }),
  day: Vt({
    values: LO,
    defaultWidth: "wide"
  }),
  dayPeriod: Vt({
    values: zO,
    defaultWidth: "wide",
    formattingValues: BO,
    defaultFormattingWidth: "wide"
  })
};
function Xt(e) {
  return (t, r = {}) => {
    const n = r.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], o = t.match(i);
    if (!o)
      return null;
    const a = o[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? VO(s, (h) => h.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      HO(s, (h) => h.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(u) : u, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const c = t.slice(a.length);
    return { value: l, rest: c };
  };
}
function HO(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function VO(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function XO(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    a = r.valueCallback ? r.valueCallback(a) : a;
    const s = t.slice(i.length);
    return { value: a, rest: s };
  };
}
const KO = /^(\d+)(th|st|nd|rd)?/i, JO = /\d+/i, YO = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, QO = {
  any: [/^b/i, /^(a|c)/i]
}, ZO = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ex = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, rx = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, nx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ix = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ox = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ax = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, sx = {
  ordinalNumber: XO({
    matchPattern: KO,
    parsePattern: JO,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Xt({
    matchPatterns: YO,
    defaultMatchWidth: "wide",
    parsePatterns: QO,
    defaultParseWidth: "any"
  }),
  quarter: Xt({
    matchPatterns: ZO,
    defaultMatchWidth: "wide",
    parsePatterns: ex,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Xt({
    matchPatterns: tx,
    defaultMatchWidth: "wide",
    parsePatterns: rx,
    defaultParseWidth: "any"
  }),
  day: Xt({
    matchPatterns: nx,
    defaultMatchWidth: "wide",
    parsePatterns: ix,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xt({
    matchPatterns: ox,
    defaultMatchWidth: "any",
    parsePatterns: ax,
    defaultParseWidth: "any"
  })
}, ux = {
  code: "en-US",
  formatDistance: IO,
  formatLong: $O,
  formatRelative: NO,
  localize: UO,
  match: sx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function lx(e, t) {
  const r = Fe(e, t?.in);
  return AO(r, jO(r)) + 1;
}
function cx(e, t) {
  const r = Fe(e, t?.in), n = +jr(r) - +kO(r);
  return Math.round(n / Eh) + 1;
}
function kh(e, t) {
  const r = Fe(e, t?.in), n = r.getFullYear(), i = Yr(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, a = Qe(t?.in || e, 0);
  a.setFullYear(n + 1, 0, o), a.setHours(0, 0, 0, 0);
  const s = rr(a, t), u = Qe(t?.in || e, 0);
  u.setFullYear(n, 0, o), u.setHours(0, 0, 0, 0);
  const l = rr(u, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function fx(e, t) {
  const r = Yr(), n = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = kh(e, t), o = Qe(t?.in || e, 0);
  return o.setFullYear(i, 0, n), o.setHours(0, 0, 0, 0), rr(o, t);
}
function px(e, t) {
  const r = Fe(e, t?.in), n = +rr(r, t) - +fx(r, t);
  return Math.round(n / Eh) + 1;
}
function ee(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Xe = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return ee(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : ee(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ee(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ee(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ee(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ee(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ee(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return ee(i, t.length);
  }
}, bt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ys = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), i = n > 0 ? n : 1 - n;
      return r.ordinalNumber(i, { unit: "year" });
    }
    return Xe.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const i = kh(e, n), o = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const a = o % 100;
      return ee(a, 2);
    }
    return t === "Yo" ? r.ordinalNumber(o, { unit: "year" }) : ee(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Ah(e);
    return ee(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return ee(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(n);
      // 01, 02, 03, 04
      case "QQ":
        return ee(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(n);
      // 01, 02, 03, 04
      case "qq":
        return ee(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Xe.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(n + 1);
      // 01, 02, ..., 12
      case "LL":
        return ee(n + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const i = px(e, n);
    return t === "wo" ? r.ordinalNumber(i, { unit: "week" }) : ee(i, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = cx(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : ee(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Xe.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = lx(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : ee(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const i = e.getDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return ee(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(o, { unit: "day" });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const i = e.getDay(), o = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return ee(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), i = n === 0 ? 7 : n;
    switch (t) {
      // 2
      case "i":
        return String(i);
      // 02
      case "ii":
        return ee(i, t.length);
      // 2nd
      case "io":
        return r.ordinalNumber(i, { unit: "day" });
      // Tue
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n === 12 ? i = bt.noon : n === 0 ? i = bt.midnight : i = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n >= 17 ? i = bt.evening : n >= 12 ? i = bt.afternoon : n >= 4 ? i = bt.morning : i = bt.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Xe.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Xe.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : ee(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : ee(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Xe.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Xe.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Xe.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Zs(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return ut(n);
      // Hours and minutes with `:` delimiter
      default:
        return ut(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Zs(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return ut(n);
      // Hours and minutes with `:` delimiter
      default:
        return ut(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Qs(n, ":");
      default:
        return "GMT" + ut(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Qs(n, ":");
      default:
        return "GMT" + ut(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return ee(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return ee(+e, t.length);
  }
};
function Qs(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = Math.trunc(n / 60), o = n % 60;
  return o === 0 ? r + String(i) : r + String(i) + t + ee(o, 2);
}
function Zs(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ee(Math.abs(e) / 60, 2) : ut(e, t);
}
function ut(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = ee(Math.trunc(n / 60), 2), o = ee(n % 60, 2);
  return r + i + t + o;
}
const eu = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, Sh = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, yx = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], i = r[2];
  if (!i)
    return eu(e, t);
  let o;
  switch (n) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", eu(n, t)).replace("{{time}}", Sh(i, t));
}, hx = {
  p: Sh,
  P: yx
}, dx = /^D+$/, mx = /^Y+$/, vx = ["D", "DD", "YY", "YYYY"];
function gx(e) {
  return dx.test(e);
}
function bx(e) {
  return mx.test(e);
}
function wx(e, t, r) {
  const n = _x(e, t, r);
  if (console.warn(n), vx.includes(e)) throw new RangeError(n);
}
function _x(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ox = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, xx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ex = /^'([^]*?)'?$/, Ax = /''/g, kx = /[a-zA-Z]/;
function Ph(e, t, r) {
  const n = Yr(), i = n.locale ?? ux, o = n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, a = n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, s = Fe(e, r?.in);
  if (!PO(s))
    throw new RangeError("Invalid time value");
  let u = t.match(xx).map((c) => {
    const h = c[0];
    if (h === "p" || h === "P") {
      const O = hx[h];
      return O(c, i.formatLong);
    }
    return c;
  }).join("").match(Ox).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const h = c[0];
    if (h === "'")
      return { isToken: !1, value: Sx(c) };
    if (Ys[h])
      return { isToken: !0, value: c };
    if (h.match(kx))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: c };
  });
  i.localize.preprocessor && (u = i.localize.preprocessor(s, u));
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: a,
    locale: i
  };
  return u.map((c) => {
    if (!c.isToken) return c.value;
    const h = c.value;
    (bx(h) || gx(h)) && wx(h, t, String(e));
    const O = Ys[h[0]];
    return O(s, h, i.localize, l);
  }).join("");
}
function Sx(e) {
  const t = e.match(Ex);
  return t ? t[1].replace(Ax, "'") : e;
}
var tu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Px(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jx(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Bn, ru;
function Rt() {
  return ru || (ru = 1, Bn = TypeError), Bn;
}
const Dx = {}, Ix = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dx
}, Symbol.toStringTag, { value: "Module" })), Rx = /* @__PURE__ */ jx(Ix);
var Gn, nu;
function Qr() {
  if (nu) return Gn;
  nu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, a = i && o && typeof o.get == "function" ? o.get : null, s = i && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, h = c ? WeakSet.prototype.has : null, O = typeof WeakRef == "function" && WeakRef.prototype, d = O ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, y = Object.prototype.toString, g = Function.prototype.toString, S = String.prototype.match, w = String.prototype.slice, P = String.prototype.replace, D = String.prototype.toUpperCase, j = String.prototype.toLowerCase, x = RegExp.prototype.test, _ = Array.prototype.concat, E = Array.prototype.join, v = Array.prototype.slice, A = Math.floor, k = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, M = Object.getOwnPropertySymbols, L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, F = typeof Symbol == "function" && typeof Symbol.iterator == "object", W = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === F || !0) ? Symbol.toStringTag : null, V = Object.prototype.propertyIsEnumerable, N = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(f) {
    return f.__proto__;
  } : null);
  function R(f, p) {
    if (f === 1 / 0 || f === -1 / 0 || f !== f || f && f > -1e3 && f < 1e3 || x.call(/e/, p))
      return p;
    var q = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof f == "number") {
      var U = f < 0 ? -A(-f) : A(f);
      if (U !== f) {
        var X = String(U), $ = w.call(p, X.length + 1);
        return P.call(X, q, "$&_") + "." + P.call(P.call($, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return P.call(p, q, "$&_");
  }
  var B = Rx, T = B.custom, C = Z(T) ? T : null, te = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ue = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Gn = function f(p, q, U, X) {
    var $ = q || {};
    if (Y($, "quoteStyle") && !Y(te, $.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Y($, "maxStringLength") && (typeof $.maxStringLength == "number" ? $.maxStringLength < 0 && $.maxStringLength !== 1 / 0 : $.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var he = Y($, "customInspect") ? $.customInspect : !0;
    if (typeof he != "boolean" && he !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Y($, "indent") && $.indent !== null && $.indent !== "	" && !(parseInt($.indent, 10) === $.indent && $.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Y($, "numericSeparator") && typeof $.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var be = $.numericSeparator;
    if (typeof p > "u")
      return "undefined";
    if (p === null)
      return "null";
    if (typeof p == "boolean")
      return p ? "true" : "false";
    if (typeof p == "string")
      return Mt(p, $);
    if (typeof p == "number") {
      if (p === 0)
        return 1 / 0 / p > 0 ? "0" : "-0";
      var re = String(p);
      return be ? R(p, re) : re;
    }
    if (typeof p == "bigint") {
      var de = String(p) + "n";
      return be ? R(p, de) : de;
    }
    var tt = typeof $.depth > "u" ? 5 : $.depth;
    if (typeof U > "u" && (U = 0), U >= tt && tt > 0 && typeof p == "object")
      return fe(p) ? "[Array]" : "[Object]";
    var xe = on($, U);
    if (typeof X > "u")
      X = [];
    else if (ce(X, p) >= 0)
      return "[Circular]";
    function le(Ee, We, sn) {
      if (We && (X = v.call(X), X.push(We)), sn) {
        var Bt = {
          depth: $.depth
        };
        return Y($, "quoteStyle") && (Bt.quoteStyle = $.quoteStyle), f(Ee, Bt, U + 1, X);
      }
      return f(Ee, $, U + 1, X);
    }
    if (typeof p == "function" && !K(p)) {
      var Tt = we(p), Nt = Ce(p, le);
      return "[Function" + (Tt ? ": " + Tt : " (anonymous)") + "]" + (Nt.length > 0 ? " { " + E.call(Nt, ", ") + " }" : "");
    }
    if (Z(p)) {
      var Ct = F ? P.call(String(p), /^(Symbol\(.*\))_[^)]*$/, "$1") : L.call(p);
      return typeof p == "object" && !F ? Re(Ct) : Ct;
    }
    if (tn(p)) {
      for (var Me = "<" + j.call(String(p.nodeName)), rt = p.attributes || [], qe = 0; qe < rt.length; qe++)
        Me += " " + rt[qe].name + "=" + me(ve(rt[qe].value), "double", $);
      return Me += ">", p.childNodes && p.childNodes.length && (Me += "..."), Me += "</" + j.call(String(p.nodeName)) + ">", Me;
    }
    if (fe(p)) {
      if (p.length === 0)
        return "[]";
      var nt = Ce(p, le);
      return xe && !nn(nt) ? "[" + et(nt, xe) + "]" : "[ " + E.call(nt, ", ") + " ]";
    }
    if (z(p)) {
      var it = Ce(p, le);
      return !("cause" in Error.prototype) && "cause" in p && !V.call(p, "cause") ? "{ [" + String(p) + "] " + E.call(_.call("[cause]: " + le(p.cause), it), ", ") + " }" : it.length === 0 ? "[" + String(p) + "]" : "{ [" + String(p) + "] " + E.call(it, ", ") + " }";
    }
    if (typeof p == "object" && he) {
      if (C && typeof p[C] == "function" && B)
        return B(p, { depth: tt - U });
      if (he !== "symbol" && typeof p.inspect == "function")
        return p.inspect();
    }
    if (ye(p)) {
      var qt = [];
      return n && n.call(p, function(Ee, We) {
        qt.push(le(We, p, !0) + " => " + le(Ee, p));
      }), Ft("Map", r.call(p), qt, xe);
    }
    if (Ve(p)) {
      var Wt = [];
      return s && s.call(p, function(Ee) {
        Wt.push(le(Ee, p));
      }), Ft("Set", a.call(p), Wt, xe);
    }
    if (_e(p))
      return Ze("WeakMap");
    if (en(p))
      return Ze("WeakSet");
    if (Oe(p))
      return Ze("WeakRef");
    if (H(p))
      return Re(le(Number(p)));
    if (Q(p))
      return Re(le(k.call(p)));
    if (J(p))
      return Re(m.call(p));
    if (G(p))
      return Re(le(String(p)));
    if (typeof window < "u" && p === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && p === globalThis || typeof tu < "u" && p === tu)
      return "{ [object globalThis] }";
    if (!ge(p) && !K(p)) {
      var ot = Ce(p, le), Lt = N ? N(p) === Object.prototype : p instanceof Object || p.constructor === Object, at = p instanceof Object ? "" : "null prototype", zt = !Lt && W && Object(p) === p && W in p ? w.call(oe(p), 8, -1) : at ? "Object" : "", an = Lt || typeof p.constructor != "function" ? "" : p.constructor.name ? p.constructor.name + " " : "", st = an + (zt || at ? "[" + E.call(_.call([], zt || [], at || []), ": ") + "] " : "");
      return ot.length === 0 ? st + "{}" : xe ? st + "{" + et(ot, xe) + "}" : st + "{ " + E.call(ot, ", ") + " }";
    }
    return String(p);
  };
  function me(f, p, q) {
    var U = q.quoteStyle || p, X = te[U];
    return X + f + X;
  }
  function ve(f) {
    return P.call(String(f), /"/g, "&quot;");
  }
  function ne(f) {
    return !W || !(typeof f == "object" && (W in f || typeof f[W] < "u"));
  }
  function fe(f) {
    return oe(f) === "[object Array]" && ne(f);
  }
  function ge(f) {
    return oe(f) === "[object Date]" && ne(f);
  }
  function K(f) {
    return oe(f) === "[object RegExp]" && ne(f);
  }
  function z(f) {
    return oe(f) === "[object Error]" && ne(f);
  }
  function G(f) {
    return oe(f) === "[object String]" && ne(f);
  }
  function H(f) {
    return oe(f) === "[object Number]" && ne(f);
  }
  function J(f) {
    return oe(f) === "[object Boolean]" && ne(f);
  }
  function Z(f) {
    if (F)
      return f && typeof f == "object" && f instanceof Symbol;
    if (typeof f == "symbol")
      return !0;
    if (!f || typeof f != "object" || !L)
      return !1;
    try {
      return L.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Q(f) {
    if (!f || typeof f != "object" || !k)
      return !1;
    try {
      return k.call(f), !0;
    } catch {
    }
    return !1;
  }
  var ie = Object.prototype.hasOwnProperty || function(f) {
    return f in this;
  };
  function Y(f, p) {
    return ie.call(f, p);
  }
  function oe(f) {
    return y.call(f);
  }
  function we(f) {
    if (f.name)
      return f.name;
    var p = S.call(g.call(f), /^function\s*([\w$]+)/);
    return p ? p[1] : null;
  }
  function ce(f, p) {
    if (f.indexOf)
      return f.indexOf(p);
    for (var q = 0, U = f.length; q < U; q++)
      if (f[q] === p)
        return q;
    return -1;
  }
  function ye(f) {
    if (!r || !f || typeof f != "object")
      return !1;
    try {
      r.call(f);
      try {
        a.call(f);
      } catch {
        return !0;
      }
      return f instanceof Map;
    } catch {
    }
    return !1;
  }
  function _e(f) {
    if (!l || !f || typeof f != "object")
      return !1;
    try {
      l.call(f, l);
      try {
        h.call(f, h);
      } catch {
        return !0;
      }
      return f instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Oe(f) {
    if (!d || !f || typeof f != "object")
      return !1;
    try {
      return d.call(f), !0;
    } catch {
    }
    return !1;
  }
  function Ve(f) {
    if (!a || !f || typeof f != "object")
      return !1;
    try {
      a.call(f);
      try {
        r.call(f);
      } catch {
        return !0;
      }
      return f instanceof Set;
    } catch {
    }
    return !1;
  }
  function en(f) {
    if (!h || !f || typeof f != "object")
      return !1;
    try {
      h.call(f, h);
      try {
        l.call(f, l);
      } catch {
        return !0;
      }
      return f instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function tn(f) {
    return !f || typeof f != "object" ? !1 : typeof HTMLElement < "u" && f instanceof HTMLElement ? !0 : typeof f.nodeName == "string" && typeof f.getAttribute == "function";
  }
  function Mt(f, p) {
    if (f.length > p.maxStringLength) {
      var q = f.length - p.maxStringLength, U = "... " + q + " more character" + (q > 1 ? "s" : "");
      return Mt(w.call(f, 0, p.maxStringLength), p) + U;
    }
    var X = ue[p.quoteStyle || "single"];
    X.lastIndex = 0;
    var $ = P.call(P.call(f, X, "\\$1"), /[\x00-\x1f]/g, rn);
    return me($, "single", p);
  }
  function rn(f) {
    var p = f.charCodeAt(0), q = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[p];
    return q ? "\\" + q : "\\x" + (p < 16 ? "0" : "") + D.call(p.toString(16));
  }
  function Re(f) {
    return "Object(" + f + ")";
  }
  function Ze(f) {
    return f + " { ? }";
  }
  function Ft(f, p, q, U) {
    var X = U ? et(q, U) : E.call(q, ", ");
    return f + " (" + p + ") {" + X + "}";
  }
  function nn(f) {
    for (var p = 0; p < f.length; p++)
      if (ce(f[p], `
`) >= 0)
        return !1;
    return !0;
  }
  function on(f, p) {
    var q;
    if (f.indent === "	")
      q = "	";
    else if (typeof f.indent == "number" && f.indent > 0)
      q = E.call(Array(f.indent + 1), " ");
    else
      return null;
    return {
      base: q,
      prev: E.call(Array(p + 1), q)
    };
  }
  function et(f, p) {
    if (f.length === 0)
      return "";
    var q = `
` + p.prev + p.base;
    return q + E.call(f, "," + q) + `
` + p.prev;
  }
  function Ce(f, p) {
    var q = fe(f), U = [];
    if (q) {
      U.length = f.length;
      for (var X = 0; X < f.length; X++)
        U[X] = Y(f, X) ? p(f[X], f) : "";
    }
    var $ = typeof M == "function" ? M(f) : [], he;
    if (F) {
      he = {};
      for (var be = 0; be < $.length; be++)
        he["$" + $[be]] = $[be];
    }
    for (var re in f)
      Y(f, re) && (q && String(Number(re)) === re && re < f.length || F && he["$" + re] instanceof Symbol || (x.call(/[^\w$]/, re) ? U.push(p(re, f) + ": " + p(f[re], f)) : U.push(re + ": " + p(f[re], f))));
    if (typeof M == "function")
      for (var de = 0; de < $.length; de++)
        V.call(f, $[de]) && U.push("[" + p($[de]) + "]: " + p(f[$[de]], f));
    return U;
  }
  return Gn;
}
var Un, iu;
function Mx() {
  if (iu) return Un;
  iu = 1;
  var e = /* @__PURE__ */ Qr(), t = /* @__PURE__ */ Rt(), r = function(s, u, l) {
    for (var c = s, h; (h = c.next) != null; c = h)
      if (h.key === u)
        return c.next = h.next, l || (h.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = h), h;
  }, n = function(s, u) {
    if (s) {
      var l = r(s, u);
      return l && l.value;
    }
  }, i = function(s, u, l) {
    var c = r(s, u);
    c ? c.value = l : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: s.next,
      value: l
    };
  }, o = function(s, u) {
    return s ? !!r(s, u) : !1;
  }, a = function(s, u) {
    if (s)
      return r(s, u, !0);
  };
  return Un = function() {
    var u, l = {
      assert: function(c) {
        if (!l.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var h = a(u, c);
        return h && u && !u.next && (u = void 0), !!h;
      },
      get: function(c) {
        return n(u, c);
      },
      has: function(c) {
        return o(u, c);
      },
      set: function(c, h) {
        u || (u = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          u,
          c,
          h
        );
      }
    };
    return l;
  }, Un;
}
var Hn, ou;
function jh() {
  return ou || (ou = 1, Hn = Object), Hn;
}
var Vn, au;
function Fx() {
  return au || (au = 1, Vn = Error), Vn;
}
var Xn, su;
function $x() {
  return su || (su = 1, Xn = EvalError), Xn;
}
var Kn, uu;
function Tx() {
  return uu || (uu = 1, Kn = RangeError), Kn;
}
var Jn, lu;
function Nx() {
  return lu || (lu = 1, Jn = ReferenceError), Jn;
}
var Yn, cu;
function Cx() {
  return cu || (cu = 1, Yn = SyntaxError), Yn;
}
var Qn, fu;
function qx() {
  return fu || (fu = 1, Qn = URIError), Qn;
}
var Zn, pu;
function Wx() {
  return pu || (pu = 1, Zn = Math.abs), Zn;
}
var ei, yu;
function Lx() {
  return yu || (yu = 1, ei = Math.floor), ei;
}
var ti, hu;
function zx() {
  return hu || (hu = 1, ti = Math.max), ti;
}
var ri, du;
function Bx() {
  return du || (du = 1, ri = Math.min), ri;
}
var ni, mu;
function Gx() {
  return mu || (mu = 1, ni = Math.pow), ni;
}
var ii, vu;
function Ux() {
  return vu || (vu = 1, ii = Math.round), ii;
}
var oi, gu;
function Hx() {
  return gu || (gu = 1, oi = Number.isNaN || function(t) {
    return t !== t;
  }), oi;
}
var ai, bu;
function Vx() {
  if (bu) return ai;
  bu = 1;
  var e = /* @__PURE__ */ Hx();
  return ai = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, ai;
}
var si, wu;
function Xx() {
  return wu || (wu = 1, si = Object.getOwnPropertyDescriptor), si;
}
var ui, _u;
function Dh() {
  if (_u) return ui;
  _u = 1;
  var e = /* @__PURE__ */ Xx();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ui = e, ui;
}
var li, Ou;
function Ih() {
  if (Ou) return li;
  Ou = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return li = e, li;
}
var ci, xu;
function Kx() {
  return xu || (xu = 1, ci = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = /* @__PURE__ */ Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (var o in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(t);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (s.value !== i || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), ci;
}
var fi, Eu;
function Jx() {
  if (Eu) return fi;
  Eu = 1;
  var e = typeof Symbol < "u" && Symbol, t = Kx();
  return fi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, fi;
}
var pi, Au;
function Rh() {
  return Au || (Au = 1, pi = typeof Reflect < "u" && Reflect.getPrototypeOf || null), pi;
}
var yi, ku;
function Mh() {
  if (ku) return yi;
  ku = 1;
  var e = /* @__PURE__ */ jh();
  return yi = e.getPrototypeOf || null, yi;
}
var hi, Su;
function Yx() {
  if (Su) return hi;
  Su = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(u, l) {
    for (var c = [], h = 0; h < u.length; h += 1)
      c[h] = u[h];
    for (var O = 0; O < l.length; O += 1)
      c[O + u.length] = l[O];
    return c;
  }, o = function(u, l) {
    for (var c = [], h = l, O = 0; h < u.length; h += 1, O += 1)
      c[O] = u[h];
    return c;
  }, a = function(s, u) {
    for (var l = "", c = 0; c < s.length; c += 1)
      l += s[c], c + 1 < s.length && (l += u);
    return l;
  };
  return hi = function(u) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var c = o(arguments, 1), h, O = function() {
      if (this instanceof h) {
        var S = l.apply(
          this,
          i(c, arguments)
        );
        return Object(S) === S ? S : this;
      }
      return l.apply(
        u,
        i(c, arguments)
      );
    }, d = r(0, l.length - c.length), m = [], y = 0; y < d; y++)
      m[y] = "$" + y;
    if (h = Function("binder", "return function (" + a(m, ",") + "){ return binder.apply(this,arguments); }")(O), l.prototype) {
      var g = function() {
      };
      g.prototype = l.prototype, h.prototype = new g(), g.prototype = null;
    }
    return h;
  }, hi;
}
var di, Pu;
function Zr() {
  if (Pu) return di;
  Pu = 1;
  var e = Yx();
  return di = Function.prototype.bind || e, di;
}
var mi, ju;
function No() {
  return ju || (ju = 1, mi = Function.prototype.call), mi;
}
var vi, Du;
function Fh() {
  return Du || (Du = 1, vi = Function.prototype.apply), vi;
}
var gi, Iu;
function Qx() {
  return Iu || (Iu = 1, gi = typeof Reflect < "u" && Reflect && Reflect.apply), gi;
}
var bi, Ru;
function Zx() {
  if (Ru) return bi;
  Ru = 1;
  var e = Zr(), t = Fh(), r = No(), n = Qx();
  return bi = n || e.call(r, t), bi;
}
var wi, Mu;
function $h() {
  if (Mu) return wi;
  Mu = 1;
  var e = Zr(), t = /* @__PURE__ */ Rt(), r = No(), n = Zx();
  return wi = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, wi;
}
var _i, Fu;
function eE() {
  if (Fu) return _i;
  Fu = 1;
  var e = $h(), t = /* @__PURE__ */ Dh(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (a) {
    if (!a || typeof a != "object" || !("code" in a) || a.code !== "ERR_PROTO_ACCESS")
      throw a;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, o = i.getPrototypeOf;
  return _i = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return o(s == null ? s : i(s));
    }
  ) : !1, _i;
}
var Oi, $u;
function tE() {
  if ($u) return Oi;
  $u = 1;
  var e = Rh(), t = Mh(), r = /* @__PURE__ */ eE();
  return Oi = e ? function(i) {
    return e(i);
  } : t ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return t(i);
  } : r ? function(i) {
    return r(i);
  } : null, Oi;
}
var xi, Tu;
function rE() {
  if (Tu) return xi;
  Tu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Zr();
  return xi = r.call(e, t), xi;
}
var Ei, Nu;
function Co() {
  if (Nu) return Ei;
  Nu = 1;
  var e, t = /* @__PURE__ */ jh(), r = /* @__PURE__ */ Fx(), n = /* @__PURE__ */ $x(), i = /* @__PURE__ */ Tx(), o = /* @__PURE__ */ Nx(), a = /* @__PURE__ */ Cx(), s = /* @__PURE__ */ Rt(), u = /* @__PURE__ */ qx(), l = /* @__PURE__ */ Wx(), c = /* @__PURE__ */ Lx(), h = /* @__PURE__ */ zx(), O = /* @__PURE__ */ Bx(), d = /* @__PURE__ */ Gx(), m = /* @__PURE__ */ Ux(), y = /* @__PURE__ */ Vx(), g = Function, S = function(K) {
    try {
      return g('"use strict"; return (' + K + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Dh(), P = /* @__PURE__ */ Ih(), D = function() {
    throw new s();
  }, j = w ? (function() {
    try {
      return arguments.callee, D;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return D;
      }
    }
  })() : D, x = Jx()(), _ = tE(), E = Mh(), v = Rh(), A = Fh(), k = No(), M = {}, L = typeof Uint8Array > "u" || !_ ? e : _(Uint8Array), F = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": x && _ ? _([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": M,
    "%AsyncGenerator%": M,
    "%AsyncGeneratorFunction%": M,
    "%AsyncIteratorPrototype%": M,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": g,
    "%GeneratorFunction%": M,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": x && _ ? _(_([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !x || !_ ? e : _((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !x || !_ ? e : _((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": x && _ ? _(""[Symbol.iterator]()) : e,
    "%Symbol%": x ? Symbol : e,
    "%SyntaxError%": a,
    "%ThrowTypeError%": j,
    "%TypedArray%": L,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": k,
    "%Function.prototype.apply%": A,
    "%Object.defineProperty%": P,
    "%Object.getPrototypeOf%": E,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": h,
    "%Math.min%": O,
    "%Math.pow%": d,
    "%Math.round%": m,
    "%Math.sign%": y,
    "%Reflect.getPrototypeOf%": v
  };
  if (_)
    try {
      null.error;
    } catch (K) {
      var W = _(_(K));
      F["%Error.prototype%"] = W;
    }
  var V = function K(z) {
    var G;
    if (z === "%AsyncFunction%")
      G = S("async function () {}");
    else if (z === "%GeneratorFunction%")
      G = S("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      G = S("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var H = K("%AsyncGeneratorFunction%");
      H && (G = H.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var J = K("%AsyncGenerator%");
      J && _ && (G = _(J.prototype));
    }
    return F[z] = G, G;
  }, N = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, R = Zr(), B = /* @__PURE__ */ rE(), T = R.call(k, Array.prototype.concat), C = R.call(A, Array.prototype.splice), te = R.call(k, String.prototype.replace), ue = R.call(k, String.prototype.slice), me = R.call(k, RegExp.prototype.exec), ve = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ne = /\\(\\)?/g, fe = function(z) {
    var G = ue(z, 0, 1), H = ue(z, -1);
    if (G === "%" && H !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (H === "%" && G !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var J = [];
    return te(z, ve, function(Z, Q, ie, Y) {
      J[J.length] = ie ? te(Y, ne, "$1") : Q || Z;
    }), J;
  }, ge = function(z, G) {
    var H = z, J;
    if (B(N, H) && (J = N[H], H = "%" + J[0] + "%"), B(F, H)) {
      var Z = F[H];
      if (Z === M && (Z = V(H)), typeof Z > "u" && !G)
        throw new s("intrinsic " + z + " exists, but is not available. Please file an issue!");
      return {
        alias: J,
        name: H,
        value: Z
      };
    }
    throw new a("intrinsic " + z + " does not exist!");
  };
  return Ei = function(z, G) {
    if (typeof z != "string" || z.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof G != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (me(/^%?[^%]*%?$/, z) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var H = fe(z), J = H.length > 0 ? H[0] : "", Z = ge("%" + J + "%", G), Q = Z.name, ie = Z.value, Y = !1, oe = Z.alias;
    oe && (J = oe[0], C(H, T([0, 1], oe)));
    for (var we = 1, ce = !0; we < H.length; we += 1) {
      var ye = H[we], _e = ue(ye, 0, 1), Oe = ue(ye, -1);
      if ((_e === '"' || _e === "'" || _e === "`" || Oe === '"' || Oe === "'" || Oe === "`") && _e !== Oe)
        throw new a("property names with quotes must have matching quotes");
      if ((ye === "constructor" || !ce) && (Y = !0), J += "." + ye, Q = "%" + J + "%", B(F, Q))
        ie = F[Q];
      else if (ie != null) {
        if (!(ye in ie)) {
          if (!G)
            throw new s("base intrinsic for " + z + " exists, but the property is not available.");
          return;
        }
        if (w && we + 1 >= H.length) {
          var Ve = w(ie, ye);
          ce = !!Ve, ce && "get" in Ve && !("originalValue" in Ve.get) ? ie = Ve.get : ie = ie[ye];
        } else
          ce = B(ie, ye), ie = ie[ye];
        ce && !Y && (F[Q] = ie);
      }
    }
    return ie;
  }, Ei;
}
var Ai, Cu;
function Th() {
  if (Cu) return Ai;
  Cu = 1;
  var e = /* @__PURE__ */ Co(), t = $h(), r = t([e("%String.prototype.indexOf%")]);
  return Ai = function(i, o) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!o)
    );
    return typeof a == "function" && r(i, ".prototype.") > -1 ? t(
      /** @type {const} */
      [a]
    ) : a;
  }, Ai;
}
var ki, qu;
function Nh() {
  if (qu) return ki;
  qu = 1;
  var e = /* @__PURE__ */ Co(), t = /* @__PURE__ */ Th(), r = /* @__PURE__ */ Qr(), n = /* @__PURE__ */ Rt(), i = e("%Map%", !0), o = t("Map.prototype.get", !0), a = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return ki = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var h, O = {
      assert: function(d) {
        if (!O.has(d))
          throw new n("Side channel does not contain " + r(d));
      },
      delete: function(d) {
        if (h) {
          var m = u(h, d);
          return l(h) === 0 && (h = void 0), m;
        }
        return !1;
      },
      get: function(d) {
        if (h)
          return o(h, d);
      },
      has: function(d) {
        return h ? s(h, d) : !1;
      },
      set: function(d, m) {
        h || (h = new i()), a(h, d, m);
      }
    };
    return O;
  }, ki;
}
var Si, Wu;
function nE() {
  if (Wu) return Si;
  Wu = 1;
  var e = /* @__PURE__ */ Co(), t = /* @__PURE__ */ Th(), r = /* @__PURE__ */ Qr(), n = Nh(), i = /* @__PURE__ */ Rt(), o = e("%WeakMap%", !0), a = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Si = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var h, O, d = {
        assert: function(m) {
          if (!d.has(m))
            throw new i("Side channel does not contain " + r(m));
        },
        delete: function(m) {
          if (o && m && (typeof m == "object" || typeof m == "function")) {
            if (h)
              return l(h, m);
          } else if (n && O)
            return O.delete(m);
          return !1;
        },
        get: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && h ? a(h, m) : O && O.get(m);
        },
        has: function(m) {
          return o && m && (typeof m == "object" || typeof m == "function") && h ? u(h, m) : !!O && O.has(m);
        },
        set: function(m, y) {
          o && m && (typeof m == "object" || typeof m == "function") ? (h || (h = new o()), s(h, m, y)) : n && (O || (O = n()), O.set(m, y));
        }
      };
      return d;
    }
  ) : n, Si;
}
var Pi, Lu;
function Ch() {
  if (Lu) return Pi;
  Lu = 1;
  var e = /* @__PURE__ */ Rt(), t = /* @__PURE__ */ Qr(), r = Mx(), n = Nh(), i = nE(), o = i || n || r;
  return Pi = function() {
    var s, u = {
      assert: function(l) {
        if (!u.has(l)) {
          var c = l && Object(l) === l ? "the given object key" : t(l);
          throw new e("Side channel does not contain " + c);
        }
      },
      delete: function(l) {
        return !!s && s.delete(l);
      },
      get: function(l) {
        return s && s.get(l);
      },
      has: function(l) {
        return !!s && s.has(l);
      },
      set: function(l, c) {
        s || (s = o()), s.set(l, c);
      }
    };
    return u;
  }, Pi;
}
var ji, zu;
function qo() {
  if (zu) return ji;
  zu = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return ji = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, ji;
}
var Di, Bu;
function qh() {
  if (Bu) return Di;
  Bu = 1;
  var e = /* @__PURE__ */ qo(), t = Ch(), r = /* @__PURE__ */ Ih(), n = Object.prototype.hasOwnProperty, i = Array.isArray, o = t(), a = function(v, A) {
    return o.set(v, A), v;
  }, s = function(v) {
    return o.has(v);
  }, u = function(v) {
    return o.get(v);
  }, l = function(v, A) {
    o.set(v, A);
  }, c = (function() {
    for (var E = [], v = 0; v < 256; ++v)
      E[E.length] = "%" + ((v < 16 ? "0" : "") + v.toString(16)).toUpperCase();
    return E;
  })(), h = function(v) {
    for (; v.length > 1; ) {
      var A = v.pop(), k = A.obj[A.prop];
      if (i(k)) {
        for (var M = [], L = 0; L < k.length; ++L)
          typeof k[L] < "u" && (M[M.length] = k[L]);
        A.obj[A.prop] = M;
      }
    }
  }, O = function(v, A) {
    for (var k = A && A.plainObjects ? { __proto__: null } : {}, M = 0; M < v.length; ++M)
      typeof v[M] < "u" && (k[M] = v[M]);
    return k;
  }, d = function(v, A, k) {
    A === "__proto__" && r ? r(v, A, {
      configurable: !0,
      enumerable: !0,
      value: k,
      writable: !0
    }) : v[A] = k;
  }, m = function E(v, A, k) {
    if (!A)
      return v;
    if (typeof A != "object" && typeof A != "function") {
      if (i(v)) {
        var M = v.length;
        if (k && typeof k.arrayLimit == "number" && M >= k.arrayLimit) {
          if (k.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          return a(O(v.concat(A), k), M);
        }
        v[M] = A;
      } else if (v && typeof v == "object")
        if (s(v)) {
          var L = u(v) + 1;
          v[L] = A, l(v, L);
        } else {
          if (k && k.strictMerge)
            return [v, A];
          (k && (k.plainObjects || k.allowPrototypes) || !n.call(Object.prototype, A)) && (v[A] = !0);
        }
      else
        return [v, A];
      return v;
    }
    if (!v || typeof v != "object") {
      if (s(A)) {
        for (var F = Object.keys(A), W = k && k.plainObjects ? { __proto__: null, 0: v } : { 0: v }, V = 0; V < F.length; V++) {
          var N = parseInt(F[V], 10);
          W[N + 1] = A[F[V]];
        }
        return a(W, u(A) + 1);
      }
      var R = [v].concat(A);
      if (k && typeof k.arrayLimit == "number" && R.length > k.arrayLimit) {
        if (k.throwOnLimitExceeded)
          throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        return a(O(R, k), R.length - 1);
      }
      return R;
    }
    var B = v;
    if (i(v) && !i(A) && (B = O(v, k)), i(v) && i(A)) {
      if (A.forEach(function(T, C) {
        if (n.call(v, C)) {
          var te = v[C];
          te && typeof te == "object" && T && typeof T == "object" ? v[C] = E(te, T, k) : v[v.length] = T;
        } else
          v[C] = T;
      }), k && typeof k.arrayLimit == "number" && v.length > k.arrayLimit) {
        if (k.throwOnLimitExceeded)
          throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        return a(O(v, k), v.length - 1);
      }
      return v;
    }
    return Object.keys(A).reduce(function(T, C) {
      var te = A[C];
      if (n.call(T, C) ? d(T, C, E(T[C], te, k)) : d(T, C, te), s(A) && !s(T) && a(T, u(A)), s(T)) {
        var ue = parseInt(C, 10);
        String(ue) === C && ue >= 0 && ue > u(T) && l(T, ue);
      }
      return T;
    }, B);
  }, y = function(v, A) {
    return Object.keys(A).reduce(function(k, M) {
      return d(k, M, A[M]), k;
    }, v);
  }, g = function(E, v, A) {
    var k = E.replace(/\+/g, " ");
    if (A === "iso-8859-1")
      return k.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(k);
    } catch {
      return k;
    }
  }, S = 1024, w = function(v, A, k, M, L) {
    if (v.length === 0)
      return v;
    var F = v;
    if (typeof v == "symbol" ? F = Symbol.prototype.toString.call(v) : typeof v != "string" && (F = String(v)), k === "iso-8859-1")
      return escape(F).replace(/%u[0-9a-f]{4}/gi, function(te) {
        return "%26%23" + parseInt(te.slice(2), 16) + "%3B";
      });
    for (var W = "", V = 0; V < F.length; V += S) {
      var N = F.length >= S ? F.slice(V, V + S) : F;
      if (V + S < F.length) {
        var R = N.charCodeAt(N.length - 1);
        R >= 55296 && R <= 56319 && (N = N.slice(0, -1), V -= 1);
      }
      for (var B = [], T = 0; T < N.length; ++T) {
        var C = N.charCodeAt(T);
        if (C === 45 || C === 46 || C === 95 || C === 126 || C >= 48 && C <= 57 || C >= 65 && C <= 90 || C >= 97 && C <= 122 || L === e.RFC1738 && (C === 40 || C === 41)) {
          B[B.length] = N.charAt(T);
          continue;
        }
        if (C < 128) {
          B[B.length] = c[C];
          continue;
        }
        if (C < 2048) {
          B[B.length] = c[192 | C >> 6] + c[128 | C & 63];
          continue;
        }
        if (C < 55296 || C >= 57344) {
          B[B.length] = c[224 | C >> 12] + c[128 | C >> 6 & 63] + c[128 | C & 63];
          continue;
        }
        T += 1, C = 65536 + ((C & 1023) << 10 | N.charCodeAt(T) & 1023), B[B.length] = c[240 | C >> 18] + c[128 | C >> 12 & 63] + c[128 | C >> 6 & 63] + c[128 | C & 63];
      }
      W += B.join("");
    }
    return W;
  }, P = function(v) {
    for (var A = [{ obj: { o: v }, prop: "o" }], k = t(), M = 0; M < A.length; ++M)
      for (var L = A[M], F = L.obj[L.prop], W = Object.keys(F), V = 0; V < W.length; ++V) {
        var N = W[V], R = F[N];
        typeof R == "object" && R !== null && !k.has(R) && (A[A.length] = { obj: F, prop: N }, k.set(R, !0));
      }
    return h(A), v;
  }, D = function(v) {
    return Object.prototype.toString.call(v) === "[object RegExp]";
  }, j = function(v) {
    return !v || typeof v != "object" ? !1 : !!(v.constructor && typeof v.constructor.isBuffer == "function" && v.constructor.isBuffer(v));
  }, x = function(v, A, k, M, L) {
    if (s(v)) {
      if (L)
        throw new RangeError("Array limit exceeded. Only " + k + " element" + (k === 1 ? "" : "s") + " allowed in an array.");
      for (var F = i(A) ? A : [A], W = u(v), V = 0; V < F.length; ++V)
        W += 1, v[W] = F[V];
      return l(v, W), v;
    }
    var N = [].concat(v, A);
    if (N.length > k) {
      if (L)
        throw new RangeError("Array limit exceeded. Only " + k + " element" + (k === 1 ? "" : "s") + " allowed in an array.");
      return a(O(N, { plainObjects: M }), N.length - 1);
    }
    return N;
  }, _ = function(v, A) {
    if (i(v)) {
      for (var k = [], M = 0; M < v.length; M += 1)
        k[k.length] = A(v[M]);
      return k;
    }
    return A(v);
  };
  return Di = {
    arrayToObject: O,
    assign: y,
    combine: x,
    compact: P,
    decode: g,
    encode: w,
    isBuffer: j,
    isOverflow: s,
    isRegExp: D,
    markOverflow: a,
    maybeMap: _,
    merge: m
  }, Di;
}
var Ii, Gu;
function iE() {
  if (Gu) return Ii;
  Gu = 1;
  var e = Ch(), t = /* @__PURE__ */ qh(), r = /* @__PURE__ */ qo(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(g) {
      return g + "[]";
    },
    comma: "comma",
    indices: function(g, S) {
      return g + "[" + S + "]";
    },
    repeat: function(g) {
      return g;
    }
  }, o = Array.isArray, a = Array.prototype.push, s = function(y, g) {
    a.apply(y, o(g) ? g : [g]);
  }, u = Date.prototype.toISOString, l = r.default, c = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    depth: 1 / 0,
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: r.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(g) {
      return u.call(g);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, h = function(g) {
    return typeof g == "string" || typeof g == "number" || typeof g == "boolean" || typeof g == "symbol" || typeof g == "bigint";
  }, O = {}, d = function y(g, S, w, P, D, j, x, _, E, v, A, k, M, L, F, W, V, N, R, B) {
    var T = g;
    if (B > R)
      throw new RangeError("Input depth exceeded depth option of " + R);
    for (var C = N, te = 0, ue = !1; (C = C.get(O)) !== void 0 && !ue; ) {
      var me = C.get(g);
      if (te += 1, typeof me < "u") {
        if (me === te)
          throw new RangeError("Cyclic object value");
        ue = !0;
      }
      typeof C.get(O) > "u" && (te = 0);
    }
    if (T = typeof v == "function" ? v(S, T) : T, T instanceof Date ? T = M(T) : w === "comma" && o(T) && (T = t.maybeMap(T, function(Y) {
      return Y instanceof Date ? M(Y) : Y;
    })), T === null) {
      if (j)
        return F(E && !W ? E(S, c.encoder, V, "key", L) : S);
      T = "";
    }
    if (h(T) || t.isBuffer(T)) {
      if (E) {
        var ve = W ? S : E(S, c.encoder, V, "key", L);
        return [F(ve) + "=" + F(E(T, c.encoder, V, "value", L))];
      }
      return [F(S) + "=" + F(String(T))];
    }
    var ne = [];
    if (typeof T > "u")
      return ne;
    var fe;
    if (w === "comma" && o(T))
      W && E && (T = t.maybeMap(T, function(Y) {
        return Y == null ? Y : E(Y);
      })), fe = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
    else if (o(v))
      fe = v;
    else {
      var ge = Object.keys(T);
      fe = A ? ge.sort(A) : ge;
    }
    var K = _ ? String(S).replace(/\./g, "%2E") : String(S), z = P && o(T) && T.length === 1 ? K + "[]" : K;
    if (D && o(T) && T.length === 0 && Object.keys(T).length === 0)
      return z + "[]";
    for (var G = 0; G < fe.length; ++G) {
      var H = fe[G], J = typeof H == "object" && H && typeof H.value < "u" ? H.value : T[H];
      if (!(x && J === null)) {
        var Z = k && _ ? String(H).replace(/\./g, "%2E") : String(H), Q = o(T) ? typeof w == "function" ? w(z, Z) : z : z + (k ? "." + Z : "[" + Z + "]");
        N.set(g, te);
        var ie = e();
        ie.set(O, N), s(ne, y(
          J,
          Q,
          w,
          P,
          D,
          j,
          x,
          _,
          w === "comma" && W && o(T) ? null : E,
          v,
          A,
          k,
          M,
          L,
          F,
          W,
          V,
          ie,
          R,
          B + 1
        ));
      }
    }
    return ne;
  }, m = function(g) {
    if (!g)
      return c;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.encodeDotInKeys < "u" && typeof g.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.encoder !== null && typeof g.encoder < "u" && typeof g.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var S = g.charset || c.charset;
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var w = r.default;
    if (typeof g.format < "u") {
      if (!n.call(r.formatters, g.format))
        throw new TypeError("Unknown format option provided.");
      w = g.format;
    }
    var P = r.formatters[w], D = c.filter;
    (typeof g.filter == "function" || o(g.filter)) && (D = g.filter);
    var j;
    if (g.arrayFormat in i ? j = g.arrayFormat : "indices" in g ? j = g.indices ? "indices" : "repeat" : j = c.arrayFormat, "commaRoundTrip" in g && typeof g.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var x = typeof g.allowDots > "u" ? g.encodeDotInKeys === !0 ? !0 : c.allowDots : !!g.allowDots;
    return {
      addQueryPrefix: typeof g.addQueryPrefix == "boolean" ? g.addQueryPrefix : c.addQueryPrefix,
      allowDots: x,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: j,
      charset: S,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!g.commaRoundTrip,
      delimiter: typeof g.delimiter > "u" ? c.delimiter : g.delimiter,
      depth: typeof g.depth == "number" ? g.depth : c.depth,
      encode: typeof g.encode == "boolean" ? g.encode : c.encode,
      encodeDotInKeys: typeof g.encodeDotInKeys == "boolean" ? g.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof g.encoder == "function" ? g.encoder : c.encoder,
      encodeValuesOnly: typeof g.encodeValuesOnly == "boolean" ? g.encodeValuesOnly : c.encodeValuesOnly,
      filter: D,
      format: w,
      formatter: P,
      serializeDate: typeof g.serializeDate == "function" ? g.serializeDate : c.serializeDate,
      skipNulls: typeof g.skipNulls == "boolean" ? g.skipNulls : c.skipNulls,
      sort: typeof g.sort == "function" ? g.sort : null,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : c.strictNullHandling
    };
  };
  return Ii = function(y, g) {
    var S = y, w = m(g), P, D;
    typeof w.filter == "function" ? (D = w.filter, S = D("", S)) : o(w.filter) && (D = w.filter, P = D);
    var j = [];
    if (typeof S != "object" || S === null)
      return "";
    var x = i[w.arrayFormat], _ = x === "comma" && w.commaRoundTrip;
    P || (P = Object.keys(S)), w.sort && P.sort(w.sort);
    for (var E = e(), v = 0; v < P.length; ++v) {
      var A = P[v];
      if (!(typeof A > "u" || A === null)) {
        var k = S[A];
        if (!(w.skipNulls && k === null)) {
          var M = w.encodeDotInKeys ? String(A).replace(/\./g, "%2E") : String(A);
          s(j, d(
            k,
            M,
            x,
            _,
            w.allowEmptyArrays,
            w.strictNullHandling,
            w.skipNulls,
            w.encodeDotInKeys,
            w.encode ? w.encoder : null,
            w.filter,
            w.sort,
            w.allowDots,
            w.serializeDate,
            w.format,
            w.formatter,
            w.encodeValuesOnly,
            w.charset,
            E,
            w.depth,
            0
          ));
        }
      }
    }
    var L = j.join(w.delimiter), F = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? F += "utf8=%26%2310003%3B" + w.delimiter : F += "utf8=%E2%9C%93" + w.delimiter), L.length > 0 ? F + L : "";
  }, Ii;
}
var Ri, Uu;
function oE() {
  if (Uu) return Ri;
  Uu = 1;
  var e = /* @__PURE__ */ qh(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictMerge: !0,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, i = function(d) {
    return d.replace(/&#(\d+);/g, function(m, y) {
      return String.fromCharCode(parseInt(y, 10));
    });
  }, o = function(d, m, y) {
    if (d && typeof d == "string" && m.comma && d.indexOf(",") > -1) {
      if (m.throwOnLimitExceeded)
        for (var g = 0, S = d.indexOf(","); S > -1; ) {
          if (g += 1, g >= m.arrayLimit)
            throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          S = d.indexOf(",", S + 1);
        }
      return d.split(",");
    }
    if (m.throwOnLimitExceeded && y >= m.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return d;
  }, a = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", u = function(m, y) {
    var g = { __proto__: null }, S = y.ignoreQueryPrefix ? m.replace(/^\?/, "") : m;
    S = S.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var w = y.parameterLimit === 1 / 0 ? void 0 : y.parameterLimit, P = S.split(
      y.delimiter,
      y.throwOnLimitExceeded && typeof w < "u" ? w + 1 : w
    );
    if (y.throwOnLimitExceeded && typeof w < "u" && P.length > w)
      throw new RangeError("Parameter limit exceeded. Only " + w + " parameter" + (w === 1 ? "" : "s") + " allowed.");
    var D = -1, j, x = y.charset;
    if (y.charsetSentinel)
      for (j = 0; j < P.length; ++j)
        P[j].indexOf("utf8=") === 0 && (P[j] === s ? x = "utf-8" : P[j] === a && (x = "iso-8859-1"), D = j, j = P.length);
    for (j = 0; j < P.length; ++j)
      if (j !== D) {
        var _ = P[j], E = _.indexOf("]="), v = E === -1 ? _.indexOf("=") : E + 1, A, k;
        if (v === -1 ? (A = y.decoder(_, n.decoder, x, "key"), k = y.strictNullHandling ? null : "") : (A = y.decoder(_.slice(0, v), n.decoder, x, "key"), A !== null && (k = e.maybeMap(
          o(
            _.slice(v + 1),
            y,
            r(g[A]) ? g[A].length : 0
          ),
          function(L) {
            return y.decoder(L, n.decoder, x, "value");
          }
        ))), k && y.interpretNumericEntities && x === "iso-8859-1" && (k = i(String(k))), _.indexOf("[]=") > -1 && (k = r(k) ? [k] : k), y.comma && r(k) && k.length > y.arrayLimit && (k = e.combine([], k, y.arrayLimit, y.plainObjects, y.throwOnLimitExceeded)), A !== null) {
          var M = t.call(g, A);
          M && (y.duplicates === "combine" || _.indexOf("[]=") > -1) ? g[A] = e.combine(
            g[A],
            k,
            y.arrayLimit,
            y.plainObjects,
            y.throwOnLimitExceeded
          ) : (!M || y.duplicates === "last") && (g[A] = k);
        }
      }
    return g;
  }, l = function(d, m, y, g) {
    var S = 0;
    if (d.length > 0 && d[d.length - 1] === "[]") {
      var w = d.slice(0, -1).join("");
      S = Array.isArray(m) && m[w] ? m[w].length : 0;
    }
    for (var P = g ? m : o(m, y, S), D = d.length - 1; D >= 0; --D) {
      var j, x = d[D];
      if (x === "[]" && y.parseArrays)
        e.isOverflow(P) ? j = P : j = y.allowEmptyArrays && (P === "" || y.strictNullHandling && P === null) ? [] : e.combine(
          [],
          P,
          y.arrayLimit,
          y.plainObjects,
          y.throwOnLimitExceeded
        );
      else {
        j = y.plainObjects ? { __proto__: null } : {};
        var _ = x.charAt(0) === "[" && x.charAt(x.length - 1) === "]" ? x.slice(1, -1) : x, E = y.decodeDotInKeys ? _.replace(/%2E/g, ".") : _, v = parseInt(E, 10), A = !isNaN(v) && x !== E && String(v) === E && v >= 0 && y.parseArrays;
        if (!y.parseArrays && E === "")
          j = { 0: P };
        else if (A && v < y.arrayLimit)
          j = [], j[v] = P;
        else {
          if (A && y.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + y.arrayLimit + " element" + (y.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          A ? (j[v] = P, e.markOverflow(j, v)) : E !== "__proto__" && (j[E] = P);
        }
      }
      P = j;
    }
    return P;
  }, c = function(m, y) {
    var g = y.allowDots ? m.replace(/\.([^.[]+)/g, "[$1]") : m;
    if (y.depth <= 0)
      return !y.plainObjects && t.call(Object.prototype, g) && !y.allowPrototypes ? void 0 : [g];
    var S = [], w = g.indexOf("["), P = w >= 0 ? g.slice(0, w) : g;
    if (P) {
      if (!y.plainObjects && t.call(Object.prototype, P) && !y.allowPrototypes)
        return;
      S[S.length] = P;
    }
    for (var D = g.length, j = w, x = 0; j >= 0 && x < y.depth; ) {
      for (var _ = 1, E = j + 1, v = -1; E < D && v < 0; ) {
        var A = g.charCodeAt(E);
        A === 91 ? _ += 1 : A === 93 && (_ -= 1, _ === 0 && (v = E)), E += 1;
      }
      if (v < 0)
        return S[S.length] = "[" + g.slice(j) + "]", S;
      var k = g.slice(j, v + 1), M = k.slice(1, -1);
      if (!y.plainObjects && t.call(Object.prototype, M) && !y.allowPrototypes)
        return;
      S[S.length] = k, x += 1, j = g.indexOf("[", v + 1);
    }
    if (j >= 0) {
      if (y.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + y.depth + " and strictDepth is true");
      S[S.length] = "[" + g.slice(j) + "]";
    }
    return S;
  }, h = function(m, y, g, S) {
    if (m) {
      var w = c(m, g);
      if (w)
        return l(w, y, g, S);
    }
  }, O = function(m) {
    if (!m)
      return n;
    if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof m.decodeDotInKeys < "u" && typeof m.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (m.decoder !== null && typeof m.decoder < "u" && typeof m.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof m.throwOnLimitExceeded < "u" && typeof m.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var y = typeof m.charset > "u" ? n.charset : m.charset, g = typeof m.duplicates > "u" ? n.duplicates : m.duplicates;
    if (g !== "combine" && g !== "first" && g !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var S = typeof m.allowDots > "u" ? m.decodeDotInKeys === !0 ? !0 : n.allowDots : !!m.allowDots;
    return {
      allowDots: S,
      allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof m.allowPrototypes == "boolean" ? m.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof m.allowSparse == "boolean" ? m.allowSparse : n.allowSparse,
      arrayLimit: typeof m.arrayLimit == "number" ? m.arrayLimit : n.arrayLimit,
      charset: y,
      charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : n.charsetSentinel,
      comma: typeof m.comma == "boolean" ? m.comma : n.comma,
      decodeDotInKeys: typeof m.decodeDotInKeys == "boolean" ? m.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof m.decoder == "function" ? m.decoder : n.decoder,
      delimiter: typeof m.delimiter == "string" || e.isRegExp(m.delimiter) ? m.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof m.depth == "number" || m.depth === !1 ? +m.depth : n.depth,
      duplicates: g,
      ignoreQueryPrefix: m.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof m.interpretNumericEntities == "boolean" ? m.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof m.parameterLimit == "number" ? m.parameterLimit : n.parameterLimit,
      parseArrays: m.parseArrays !== !1,
      plainObjects: typeof m.plainObjects == "boolean" ? m.plainObjects : n.plainObjects,
      strictDepth: typeof m.strictDepth == "boolean" ? !!m.strictDepth : n.strictDepth,
      strictMerge: typeof m.strictMerge == "boolean" ? !!m.strictMerge : n.strictMerge,
      strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof m.throwOnLimitExceeded == "boolean" ? m.throwOnLimitExceeded : !1
    };
  };
  return Ri = function(d, m) {
    var y = O(m);
    if (d === "" || d === null || typeof d > "u")
      return y.plainObjects ? { __proto__: null } : {};
    for (var g = typeof d == "string" ? u(d, y) : d, S = y.plainObjects ? { __proto__: null } : {}, w = Object.keys(g), P = 0; P < w.length; ++P) {
      var D = w[P], j = h(D, g[D], y, typeof d == "string");
      S = e.merge(S, j, y);
    }
    return y.allowSparse === !0 ? S : e.compact(S);
  }, Ri;
}
var Mi, Hu;
function aE() {
  if (Hu) return Mi;
  Hu = 1;
  var e = /* @__PURE__ */ iE(), t = /* @__PURE__ */ oE(), r = /* @__PURE__ */ qo();
  return Mi = {
    formats: r,
    parse: t,
    stringify: e
  }, Mi;
}
var sE = /* @__PURE__ */ aE();
const uE = /* @__PURE__ */ Px(sE);
function eo(e = /* @__PURE__ */ sr()) {
  return /* @__PURE__ */ Te(/* @__PURE__ */ $e([e, /* @__PURE__ */ _t(e)]), /* @__PURE__ */ ke((t) => Array.isArray(t) ? t : [t]), /* @__PURE__ */ _t(e));
}
eo.number = () => eo(/* @__PURE__ */ Fr());
const Wh = () => /* @__PURE__ */ Te(/* @__PURE__ */ $e([/* @__PURE__ */ De(), /* @__PURE__ */ Fr()]), /* @__PURE__ */ ke(Number), /* @__PURE__ */ ro()), Lh = () => /* @__PURE__ */ Te(/* @__PURE__ */ $e([/* @__PURE__ */ De(), /* @__PURE__ */ no()]), /* @__PURE__ */ ke((e) => e === !0 || e === "true")), zh = () => /* @__PURE__ */ Te(/* @__PURE__ */ $e([/* @__PURE__ */ De(), /* @__PURE__ */ Mr()]), /* @__PURE__ */ ke((e) => e instanceof Date ? e : new Date(e)), /* @__PURE__ */ ke((e) => e && Ph(e, "yyyy-MM-dd"))), Bh = () => /* @__PURE__ */ Te(/* @__PURE__ */ $e([/* @__PURE__ */ De(), /* @__PURE__ */ Mr()]), /* @__PURE__ */ ke((e) => e && (e === "null" ? null : (typeof e == "string" && (e = new Date(e)), Ph(e, "yyyy-MM-dd HH:mm"))))), Gh = (e = /* @__PURE__ */ sr()) => /* @__PURE__ */ Te(/* @__PURE__ */ $e([/* @__PURE__ */ De(), /* @__PURE__ */ _t(/* @__PURE__ */ De())]), /* @__PURE__ */ ke((t) => Array.isArray(t) ? t : t.split(",")), /* @__PURE__ */ _t(e)), Uh = () => /* @__PURE__ */ Te(Gh(), /* @__PURE__ */ ke((e) => e.map(Number))), Wo = () => /* @__PURE__ */ Te(/* @__PURE__ */ $e([/* @__PURE__ */ De(), /* @__PURE__ */ uo(/* @__PURE__ */ De(), /* @__PURE__ */ sr())]), /* @__PURE__ */ ke((e) => typeof e == "string" ? uE.parse(e) : e), /* @__PURE__ */ ke((e) => {
  let t = {};
  for (let r in e) _h(t, r, bO(e, r));
  return t;
}));
function Ae() {
  return Wo();
}
Ae.number = Wh, Ae.boolean = Lh, Ae.date = zh, Ae.datetime = Bh, Ae.array = Gh, Ae.arrayNumber = Uh, Ae.object = Wo;
const lE = () => /* @__PURE__ */ Te(/* @__PURE__ */ De(), /* @__PURE__ */ ke((e) => {
  let t = e.split(/[;\n]/).filter(Boolean).filter((i) => i.includes("=")).map((i) => i.trim().split("=")), r = Object.fromEntries(t), n = {};
  for (let [i, o] of Object.entries(r)) {
    let a = o;
    o.startsWith("bool:") && (a = o.replace("bool:", "").trim() === "true"), _h(n, i, a);
  }
  return n;
})), Lo = (e = {}) => /* @__PURE__ */ ao({ page: /* @__PURE__ */ Ot(Ae.number(), 1), limit: /* @__PURE__ */ Ot(Ae.number(), e.maxLimit || 100), orderBy: /* @__PURE__ */ Er(e.orderFields ? Ae.array(/* @__PURE__ */ $r(e.orderFields)) : Ae.array(/* @__PURE__ */ De()), []), orderDirection: /* @__PURE__ */ Er(Ae.array(/* @__PURE__ */ $e([/* @__PURE__ */ xr("asc"), /* @__PURE__ */ xr("desc")])), []) });
function Hh(e = {}) {
  return Lo(e);
}
Hh.base = Lo;
var cE = _O({ array: () => eo, arrayNumber: () => Uh, base: () => Lo, boolean: () => Lh, date: () => zh, datetime: () => Bh, keyValue: () => lE, number: () => Wh, object: () => Wo, pagination: () => Hh, url: () => Ae }), fE = class {
  static __container_entry_key = "ValidatorService";
  v = { ...Kd, extras: cE };
  create(e) {
    return e(this.v);
  }
  validate(e, t) {
    let r = typeof t == "function" ? t(this.v) : t, { output: n, issues: i, success: o } = /* @__PURE__ */ Qt(r, e);
    if (!o) {
      let a = /* @__PURE__ */ Fi(i), s = [];
      a.root && s.push(...a.root), a.nested && Object.entries(a.nested).forEach((l) => {
        let [c, h] = l;
        s.push(...h.map((O) => `${c}: ${O}`));
      });
      let u = new wO(s.length ? s.join(", ") : "Validation failed", 422);
      throw u.name = "ValidationError", Object.assign(u, { messages: s }), u;
    }
    return n;
  }
  async validateAsync(e, t) {
    let r = typeof t == "function" ? t(this.v) : t, { output: n, issues: i, success: o } = await /* @__PURE__ */ Tr(r, e);
    if (!o) {
      let a = Error("Validation failed"), s = /* @__PURE__ */ Fi(i), u = { ...s.root, ...s.nested };
      throw Object.assign(a, { details: u }), a;
    }
    return n;
  }
  isValid(e, t) {
    let r = typeof t == "function" ? t(this.v) : t, { success: n } = /* @__PURE__ */ Qt(r, e);
    return n;
  }
};
function Ue(...e) {
  return e.reduce((t, r) => r(t), class {
  });
}
function pE(e) {
  return function(t) {
    class r extends t {
      constructor(...i) {
        super(...i);
        let o = new e(...i);
        Object.assign(this, o);
      }
    }
    for (let n of Reflect.ownKeys(e.prototype)) n !== "constructor" && Object.defineProperty(r.prototype, n, Object.getOwnPropertyDescriptor(e.prototype, n));
    return r;
  };
}
const kt = new fE();
function vr() {
  return kt.create((e) => e.object({ id: e.number(), dashboard_id: e.number(), name: e.string(), value: e.nullable(e.string()) }));
}
vr.create = kt.create((e) => e.pick(vr(), ["dashboard_id", "name", "value"])), vr.update = kt.create((e) => e.partial(vr.create));
function gr() {
  return kt.create((e) => e.object({ id: e.number(), name: e.string(), description: e.nullable(e.string()), created_at: e.string(), updated_at: e.string(), deleted_at: e.nullable(e.string()), metas: e.optional(e.record(e.string(), e.any())) }));
}
gr.create = kt.create((e) => e.pick(gr(), ["name", "description"])), gr.update = kt.create((e) => e.partial(gr.create));
function He(e) {
  return class extends e {
    static from(t) {
      let r = typeof this == "function" ? this : e, n = new r(), i = { ...t };
      return typeof r?.parse == "function" && (i = r.parse(t)), typeof this?.parse == "function" && (i = this.parse(t)), Object.assign(n, i), n;
    }
    merge(t) {
      return Object.assign(this, t), this;
    }
  };
}
function pr(e) {
  return class extends e {
    deleted_at = null;
  };
}
function yr(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
(class extends Ue(He) {
  id;
  name;
  description = null;
  origin;
  subject;
  action;
  conditions = null;
  get editable() {
    return this.origin === "custom";
  }
  get parsedConditions() {
    if (!this.conditions) return {};
    let [e, t] = xh.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return e ? {} : t;
  }
});
(class extends Ue(He, yr, pr) {
  id;
  drive;
  mimetype;
  purpose;
  client_name;
  filename;
  public;
  url;
  metas;
  isImage() {
    return this.mimetype.startsWith("image/");
  }
});
(class extends Ue(He, yr, pr) {
  id;
  file_id;
  name;
  value;
});
(class extends Ue(He, yr, pr) {
  id;
  purpose;
  mime_types;
  max_size;
  upload_url;
  create_file_url;
  getParsedMimeTypes() {
    return this.mime_types.split(",").map((e) => e.trim());
  }
  isAllowedMimeType(e) {
    let t = this.getParsedMimeTypes();
    return t.includes(e) || t.includes("*/*");
  }
  isAllowedSize(e) {
    return e <= this.max_size;
  }
});
(class extends Ue(He, pE(To)) {
  id;
  name;
  enabled = !1;
  dependencies = {};
  build = {};
  directory;
  upgrade_info;
  setData(e) {
    let t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
    Object.assign(this, t), this.hook_id = `module:${this.id}`;
  }
});
(class extends Ue(He) {
  id;
  name;
  version;
  description;
  enabled;
  author;
  dependencies;
  build;
});
(class extends Ue(He) {
  id;
  name;
  version;
  enabled;
  aliases;
  version_channel;
  version_available_channels;
});
(class extends Ue(He, yr, pr) {
  id;
  name;
  description;
});
(class extends Ue(He, yr, pr) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    let [e, t] = this.name.split(" ");
    return t ? e[0].toUpperCase() + t[0].toUpperCase() : e[0].toUpperCase();
  }
});
class yE extends To {
  async onLoad() {
    Ls.add({
      layout: "admin",
      label: $t("Plans"),
      icon: "FileText",
      group: $t("Backups"),
      to: "/admin/zbackup/plans"
    }), Ls.add({
      layout: "admin",
      label: $t("Triggers"),
      icon: "Clock",
      group: $t("Backups"),
      to: "/admin/zbackup/triggers"
    });
  }
}
const hE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yE
}, Symbol.toStringTag, { value: "Module" }));
class dE extends To {
  async onLoad() {
    Zi.addRoute({
      path: "/admin/zbackup",
      redirect: "/admin/zbackup/plans"
    }), Zi.auto(/* @__PURE__ */ Object.assign({ "../pages/plans/[id].vue": () => import("./_id_-B3GAY4q4.mjs"), "../pages/plans/index.vue": () => import("./index-CaNiQjGa.mjs"), "../pages/triggers/index.vue": () => import("./index-IQQUBsia.mjs") }), {
      strip: ["pages"],
      prefix: "/admin/zbackup",
      guards: [Y0]
    });
  }
}
const mE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dE
}, Symbol.toStringTag, { value: "Module" }));
class PE extends K0 {
  async load() {
    H0.addImports(/* @__PURE__ */ Object.assign({ "./hooks/menu.ts": hE, "./hooks/routes.ts": mE }));
  }
}
export {
  OE as D,
  EE as P,
  AE as R,
  kE as U,
  _t as a,
  sr as b,
  _E as c,
  no as d,
  Ot as e,
  Ph as f,
  PE as i,
  ao as o,
  qd as p,
  Zi as q,
  uo as r,
  De as s,
  Zd as t,
  cy as x
};
