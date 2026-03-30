const { cleanupNonNestedPath: e } = await globalThis.importAsync("vee-validate"), { isNotNestedPath: t } = await globalThis.importAsync("vee-validate");
//#region node_modules/valibot/dist/index.mjs
var n;
/* @__NO_SIDE_EFFECTS__ */
function r(e) {
	return {
		lang: e?.lang ?? n?.lang,
		message: e?.message,
		abortEarly: e?.abortEarly ?? n?.abortEarly,
		abortPipeEarly: e?.abortPipeEarly ?? n?.abortPipeEarly
	};
}
var i;
/* @__NO_SIDE_EFFECTS__ */
function a(e) {
	return i?.get(e);
}
var o;
/* @__NO_SIDE_EFFECTS__ */
function s(e) {
	return o?.get(e);
}
var c;
/* @__NO_SIDE_EFFECTS__ */
function l(e, t) {
	return c?.get(e)?.get(t);
}
/* @__NO_SIDE_EFFECTS__ */
function u(e) {
	let t = typeof e;
	return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function d(e, t, n, r, i) {
	let o = i && "input" in i ? i.input : n.value, c = i?.expected ?? e.expects ?? null, d = i?.received ?? /* @__PURE__ */ u(o), f = {
		kind: e.kind,
		type: e.type,
		input: o,
		expected: c,
		received: d,
		message: `Invalid ${t}: ${c ? `Expected ${c} but r` : "R"}eceived ${d}`,
		requirement: e.requirement,
		path: i?.path,
		issues: i?.issues,
		lang: r.lang,
		abortEarly: r.abortEarly,
		abortPipeEarly: r.abortPipeEarly
	}, p = e.kind === "schema", m = i?.message ?? e.message ?? /* @__PURE__ */ l(e.reference, f.lang) ?? (p ? /* @__PURE__ */ s(f.lang) : null) ?? r.message ?? /* @__PURE__ */ a(f.lang);
	m !== void 0 && (f.message = typeof m == "function" ? m(f) : m), p && (n.typed = !1), n.issues ? n.issues.push(f) : n.issues = [f];
}
/* @__NO_SIDE_EFFECTS__ */
function f(e) {
	return {
		version: 1,
		vendor: "valibot",
		validate(t) {
			return e["~run"]({ value: t }, /* @__PURE__ */ r());
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function p(e) {
	if (e.path) {
		let t = "";
		for (let n of e.path) if (typeof n.key == "string" || typeof n.key == "number") t ? t += `.${n.key}` : t += n.key;
		else return null;
		return t;
	}
	return null;
}
/* @__NO_SIDE_EFFECTS__ */
function m(e, t) {
	return {
		kind: "validation",
		type: "min_value",
		reference: m,
		async: !1,
		expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ u(e)}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !(e.value >= this.requirement) && d(this, "value", e, t, { received: e.value instanceof Date ? e.value.toJSON() : /* @__PURE__ */ u(e.value) }), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function h(e, t) {
	return {
		kind: "validation",
		type: "regex",
		reference: h,
		async: !1,
		expects: `${e}`,
		requirement: e,
		message: t,
		"~run"(e, t) {
			return e.typed && !this.requirement.test(e.value) && d(this, "format", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function g(e, t, n) {
	return typeof e.fallback == "function" ? e.fallback(t, n) : e.fallback;
}
/* @__NO_SIDE_EFFECTS__ */
function _(e, t, n) {
	return typeof e.default == "function" ? e.default(t, n) : e.default;
}
/* @__NO_SIDE_EFFECTS__ */
function v(e) {
	return {
		kind: "schema",
		type: "number",
		reference: v,
		expects: "number",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ f(this);
		},
		"~run"(e, t) {
			return typeof e.value == "number" && !isNaN(e.value) ? e.typed = !0 : d(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function y(e, t) {
	return {
		kind: "schema",
		type: "object",
		reference: y,
		expects: "Object",
		async: !1,
		entries: e,
		message: t,
		get "~standard"() {
			return /* @__PURE__ */ f(this);
		},
		"~run"(e, t) {
			let n = e.value;
			if (n && typeof n == "object") {
				e.typed = !0, e.value = {};
				for (let r in this.entries) {
					let i = this.entries[r];
					if (r in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
						let a = r in n ? n[r] : /* @__PURE__ */ _(i), o = i["~run"]({ value: a }, t);
						if (o.issues) {
							let i = {
								type: "object",
								origin: "value",
								input: n,
								key: r,
								value: a
							};
							for (let t of o.issues) t.path ? t.path.unshift(i) : t.path = [i], e.issues?.push(t);
							if (e.issues ||= o.issues, t.abortEarly) {
								e.typed = !1;
								break;
							}
						}
						o.typed || (e.typed = !1), e.value[r] = o.value;
					} else if (i.fallback !== void 0) e.value[r] = /* @__PURE__ */ g(i);
					else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (d(this, "key", e, t, {
						input: void 0,
						expected: `"${r}"`,
						path: [{
							type: "object",
							origin: "key",
							input: n,
							key: r,
							value: n[r]
						}]
					}), t.abortEarly)) break;
				}
			} else d(this, "type", e, t);
			return e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function b(e, t) {
	return {
		kind: "schema",
		type: "optional",
		reference: b,
		expects: `(${e.expects} | undefined)`,
		async: !1,
		wrapped: e,
		default: t,
		get "~standard"() {
			return /* @__PURE__ */ f(this);
		},
		"~run"(e, t) {
			return e.value === void 0 && (this.default !== void 0 && (e.value = /* @__PURE__ */ _(this, e, t)), e.value === void 0) ? (e.typed = !0, e) : this.wrapped["~run"](e, t);
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function x(e) {
	return {
		kind: "schema",
		type: "string",
		reference: x,
		expects: "string",
		async: !1,
		message: e,
		get "~standard"() {
			return /* @__PURE__ */ f(this);
		},
		"~run"(e, t) {
			return typeof e.value == "string" ? e.typed = !0 : d(this, "type", e, t), e;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function S(...e) {
	return {
		...e[0],
		pipe: e,
		get "~standard"() {
			return /* @__PURE__ */ f(this);
		},
		"~run"(t, n) {
			for (let r of e) if (r.kind !== "metadata") {
				if (t.issues && (r.kind === "schema" || r.kind === "transformation")) {
					t.typed = !1;
					break;
				}
				(!t.issues || !n.abortEarly && !n.abortPipeEarly) && (t = r["~run"](t, n));
			}
			return t;
		}
	};
}
/* @__NO_SIDE_EFFECTS__ */
function C(e, t, n) {
	let i = e["~run"]({ value: t }, /* @__PURE__ */ r(n));
	return {
		typed: i.typed,
		success: !i.issues,
		output: i.value,
		issues: i.issues
	};
}
/* @__NO_SIDE_EFFECTS__ */
async function w(e, t, n) {
	let i = await e["~run"]({ value: t }, /* @__PURE__ */ r(n));
	return {
		typed: i.typed,
		success: !i.issues,
		output: i.value,
		issues: i.issues
	};
}
//#endregion
//#region node_modules/@vee-validate/valibot/dist/vee-validate-valibot.mjs
var T = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function E(e) {
	return Number(e) >= 0;
}
function D(e) {
	return typeof e == "object" && !!e;
}
function O(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function k(e) {
	if (!D(e) || O(e) !== "[object Object]") return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
function A(e, t) {
	return Object.keys(t).forEach((n) => {
		if (k(t[n]) && k(e[n])) {
			e[n] || (e[n] = {}), A(e[n], t[n]);
			return;
		}
		e[n] = t[n];
	}), e;
}
function j(e) {
	let t = e.split(".");
	if (!t.length) return "";
	let n = String(t[0]);
	for (let e = 1; e < t.length; e++) {
		if (E(t[e])) {
			n += `[${t[e]}]`;
			continue;
		}
		n += `.${t[e]}`;
	}
	return n;
}
function M(e, t) {
	return {
		__type: "VVTypedSchema",
		async parse(n) {
			let r = await /* @__PURE__ */ w(e, n, t);
			if (r.success) return {
				value: r.output,
				errors: []
			};
			let i = {};
			return N(r.issues, i), { errors: Object.values(i) };
		},
		cast(n) {
			if (e.async) return n;
			let r = /* @__PURE__ */ C(e, n, t);
			if (r.success) return r.output;
			let i = /* @__PURE__ */ _(/* @__PURE__ */ b(e));
			return T(i) && T(n) ? A(i, n) : n;
		},
		describe(t) {
			try {
				if (!t) return {
					required: !F(e),
					exists: !0
				};
				let n = P(t, e);
				return n ? {
					required: !F(n),
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
function N(e, t) {
	e.forEach((e) => {
		let n = j(/* @__PURE__ */ p(e) || "");
		e.issues && (N(e.issues.flatMap((e) => e.issues || []), t), !n) || (t[n] || (t[n] = {
			errors: [],
			path: n
		}), t[n].errors.push(e.message));
	});
}
function P(n, r) {
	if (R(r) || z(r)) return r.options.map((e) => P(n, e)).find(Boolean) ?? null;
	if (!L(r)) return null;
	if (t(n)) return r.entries[e(n)];
	let i = (n || "").split(/\.|\[(\d+)\]/).filter(Boolean), a = r;
	for (let e = 0; e <= i.length; e++) {
		let t = i[e];
		if (!t || !a) return a;
		if (R(a) && (a = a.options.find((e) => L(e) && e.entries[t]) ?? a), z(a) && (a = a.options.find((e) => L(e) && e.entries[t]) ?? a), L(a)) {
			a = a.entries[t] || null;
			continue;
		}
		E(t) && I(a) && (a = a.item);
	}
	return null;
}
function F(e) {
	return e.type === "optional";
}
function I(e) {
	return T(e) && "item" in e;
}
function L(e) {
	return T(e) && "entries" in e;
}
function R(e) {
	return e.type === "intersect";
}
function z(e) {
	return e.type === "variant";
}
//#endregion
export { b as a, x as c, y as i, m as n, S as o, v as r, h as s, M as t };
