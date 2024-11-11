var Cr = Object.defineProperty;
var Dr = (e, t, n) => t in e ? Cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var j = (e, t, n) => Dr(e, typeof t != "symbol" ? t + "" : t, n);
import { defineComponent as kt, h as gn, getCurrentInstance as mn, effectScope as Mr, inject as Ir, onMounted as se, onUnmounted as ba, computed as Yt, watch as Kn, Fragment as Be, isRef as Pr, ref as pt, shallowRef as es, createVNode as Pt, Text as Rr, openBlock as Y, createElementBlock as G, normalizeStyle as Fr, createStaticVNode as Vr, createElementVNode as E, toDisplayString as D, unref as W, withModifiers as De, createTextVNode as Nt, renderList as li, version as $r, toRaw as Pi, nextTick as jr, isProxy as ya, normalizeClass as va, createBlock as Wr, resolveDynamicComponent as zr, createApp as Hr } from "vue";
/*!
  * shared v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ft = typeof window < "u";
let Ct, Se;
if (process.env.NODE_ENV !== "production") {
  const e = Ft && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ct = (t) => {
    e.mark(t);
  }, Se = (t, n, i) => {
    e.measure(t, n, i), e.clearMarks(n), e.clearMarks(i);
  });
}
const Ur = /\{([0-9a-zA-Z]+)\}/g;
function ci(e, ...t) {
  return t.length === 1 && z(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ur, (n, i) => t.hasOwnProperty(i) ? t[i] : "");
}
const Xt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Br = (e, t, n) => Yr({ l: e, k: t, s: n }), Yr = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ht = (e) => typeof e == "number" && isFinite(e), Xr = (e) => ns(e) === "[object Date]", ze = (e) => ns(e) === "[object RegExp]", ui = (e) => $(e) && Object.keys(e).length === 0, ft = Object.assign;
let Ns;
const ke = () => Ns || (Ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cs(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Kr = Object.prototype.hasOwnProperty;
function Gn(e, t) {
  return Kr.call(e, t);
}
const st = Array.isArray, tt = (e) => typeof e == "function", C = (e) => typeof e == "string", H = (e) => typeof e == "boolean", z = (e) => e !== null && typeof e == "object", Gr = (e) => z(e) && tt(e.then) && tt(e.catch), xa = Object.prototype.toString, ns = (e) => xa.call(e), $ = (e) => ns(e) === "[object Object]", qr = (e) => e == null ? "" : st(e) || $(e) && e.toString === xa ? JSON.stringify(e, null, 2) : String(e);
function is(e, t = "") {
  return e.reduce((n, i, s) => s === 0 ? n + i : n + t + i, "");
}
const Ds = 2;
function Qr(e, t = 0, n = e.length) {
  const i = e.split(/\r?\n/);
  let s = 0;
  const o = [];
  for (let a = 0; a < i.length; a++)
    if (s += i[a].length + 1, s >= t) {
      for (let r = a - Ds; r <= a + Ds || n > s; r++) {
        if (r < 0 || r >= i.length)
          continue;
        const l = r + 1;
        o.push(`${l}${" ".repeat(3 - String(l).length)}|  ${i[r]}`);
        const c = i[r].length;
        if (r === a) {
          const u = t - (s - c) + 1, h = Math.max(1, n > s ? c - u : n - t);
          o.push("   |  " + " ".repeat(u) + "^".repeat(h));
        } else if (r > a) {
          if (n > s) {
            const u = Math.max(Math.min(n - s, c), 1);
            o.push("   |  " + "^".repeat(u));
          }
          s += c + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function fe(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ms = {};
function Ea(e) {
  Ms[e] || (Ms[e] = !0, fe(e));
}
function ss() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, i) {
      const s = e.get(n);
      s && s.push(i) || e.set(n, [i]);
    },
    off(n, i) {
      const s = e.get(n);
      s && s.splice(s.indexOf(i) >>> 0, 1);
    },
    emit(n, i) {
      (e.get(n) || []).slice().map((s) => s(i)), (e.get("*") || []).slice().map((s) => s(n, i));
    }
  };
}
const Nn = (e) => !z(e) || st(e);
function Bn(e, t) {
  if (Nn(e) || Nn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: i, des: s } = n.pop();
    Object.keys(i).forEach((o) => {
      z(i[o]) && !z(s[o]) && (s[o] = Array.isArray(i[o]) ? [] : {}), Nn(s[o]) || Nn(i[o]) ? s[o] = i[o] : n.push({ src: i[o], des: s[o] });
    });
  }
}
/*!
  * message-compiler v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Jr(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ri(e, t, n) {
  return { start: e, end: t };
}
const F = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, Zr = 17, tl = {
  // tokenizer error messages
  [F.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [F.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [F.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [F.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [F.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [F.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [F.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [F.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [F.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [F.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [F.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [F.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [F.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [F.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [F.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [F.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Ye(e, t, n = {}) {
  const { domain: i, messages: s, args: o } = n, a = process.env.NODE_ENV !== "production" ? ci((s || tl)[e] || "", ...o || []) : e, r = new SyntaxError(String(a));
  return r.code = e, t && (r.location = t), r.domain = i, r;
}
function el(e) {
  throw e;
}
const nl = /<\/?[\w\s="/.':;#-\/]+>/, il = (e) => nl.test(e), Qt = " ", sl = "\r", xt = `
`, ol = "\u2028", al = "\u2029";
function rl(e) {
  const t = e;
  let n = 0, i = 1, s = 1, o = 0;
  const a = (w) => t[w] === sl && t[w + 1] === xt, r = (w) => t[w] === xt, l = (w) => t[w] === al, c = (w) => t[w] === ol, u = (w) => a(w) || r(w) || l(w) || c(w), h = () => n, d = () => i, f = () => s, v = () => o, b = (w) => a(w) || l(w) || c(w) ? xt : t[w], m = () => b(n), _ = () => b(n + o);
  function p() {
    return o = 0, u(n) && (i++, s = 0), a(n) && n++, n++, s++, t[n];
  }
  function k() {
    return a(n + o) && o++, o++, t[n + o];
  }
  function x() {
    n = 0, i = 1, s = 1, o = 0;
  }
  function O(w = 0) {
    o = w;
  }
  function S() {
    const w = n + o;
    for (; w !== n; )
      p();
    o = 0;
  }
  return {
    index: h,
    line: d,
    column: f,
    peekOffset: v,
    charAt: b,
    currentChar: m,
    currentPeek: _,
    next: p,
    peek: k,
    reset: x,
    resetPeek: O,
    skipToPeek: S
  };
}
const oe = void 0, ll = ".", Is = "'", cl = "tokenizer";
function ul(e, t = {}) {
  const n = t.location !== !1, i = rl(e), s = () => i.index(), o = () => Jr(i.line(), i.column(), i.index()), a = o(), r = s(), l = {
    currentType: 13,
    offset: r,
    startLoc: a,
    endLoc: a,
    lastType: 13,
    lastOffset: r,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: u } = t;
  function h(g, y, A, ...I) {
    const ot = c();
    if (y.column += A, y.offset += A, u) {
      const at = n ? Ri(ot.startLoc, y) : null, B = Ye(g, at, {
        domain: cl,
        args: I
      });
      u(B);
    }
  }
  function d(g, y, A) {
    g.endLoc = o(), g.currentType = y;
    const I = { type: y };
    return n && (I.loc = Ri(g.startLoc, g.endLoc)), A != null && (I.value = A), I;
  }
  const f = (g) => d(
    g,
    13
    /* TokenTypes.EOF */
  );
  function v(g, y) {
    return g.currentChar() === y ? (g.next(), y) : (h(F.EXPECTED_TOKEN, o(), 0, y), "");
  }
  function b(g) {
    let y = "";
    for (; g.currentPeek() === Qt || g.currentPeek() === xt; )
      y += g.currentPeek(), g.peek();
    return y;
  }
  function m(g) {
    const y = b(g);
    return g.skipToPeek(), y;
  }
  function _(g) {
    if (g === oe)
      return !1;
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y === 95;
  }
  function p(g) {
    if (g === oe)
      return !1;
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function k(g, y) {
    const { currentType: A } = y;
    if (A !== 2)
      return !1;
    b(g);
    const I = _(g.currentPeek());
    return g.resetPeek(), I;
  }
  function x(g, y) {
    const { currentType: A } = y;
    if (A !== 2)
      return !1;
    b(g);
    const I = g.currentPeek() === "-" ? g.peek() : g.currentPeek(), ot = p(I);
    return g.resetPeek(), ot;
  }
  function O(g, y) {
    const { currentType: A } = y;
    if (A !== 2)
      return !1;
    b(g);
    const I = g.currentPeek() === Is;
    return g.resetPeek(), I;
  }
  function S(g, y) {
    const { currentType: A } = y;
    if (A !== 7)
      return !1;
    b(g);
    const I = g.currentPeek() === ".";
    return g.resetPeek(), I;
  }
  function w(g, y) {
    const { currentType: A } = y;
    if (A !== 8)
      return !1;
    b(g);
    const I = _(g.currentPeek());
    return g.resetPeek(), I;
  }
  function N(g, y) {
    const { currentType: A } = y;
    if (!(A === 7 || A === 11))
      return !1;
    b(g);
    const I = g.currentPeek() === ":";
    return g.resetPeek(), I;
  }
  function M(g, y) {
    const { currentType: A } = y;
    if (A !== 9)
      return !1;
    const I = () => {
      const at = g.currentPeek();
      return at === "{" ? _(g.peek()) : at === "@" || at === "|" || at === ":" || at === "." || at === Qt || !at ? !1 : at === xt ? (g.peek(), I()) : V(g, !1);
    }, ot = I();
    return g.resetPeek(), ot;
  }
  function P(g) {
    b(g);
    const y = g.currentPeek() === "|";
    return g.resetPeek(), y;
  }
  function V(g, y = !0) {
    const A = (ot = !1, at = "") => {
      const B = g.currentPeek();
      return B === "{" || B === "@" || !B ? ot : B === "|" ? !(at === Qt || at === xt) : B === Qt ? (g.peek(), A(!0, Qt)) : B === xt ? (g.peek(), A(!0, xt)) : !0;
    }, I = A();
    return y && g.resetPeek(), I;
  }
  function R(g, y) {
    const A = g.currentChar();
    return A === oe ? oe : y(A) ? (g.next(), A) : null;
  }
  function it(g) {
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36;
  }
  function gt(g) {
    return R(g, it);
  }
  function U(g) {
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36 || // $
    y === 45;
  }
  function J(g) {
    return R(g, U);
  }
  function et(g) {
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function vt(g) {
    return R(g, et);
  }
  function ct(g) {
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57 || // 0-9
    y >= 65 && y <= 70 || // A-F
    y >= 97 && y <= 102;
  }
  function bt(g) {
    return R(g, ct);
  }
  function $t(g) {
    let y = "", A = "";
    for (; y = vt(g); )
      A += y;
    return A;
  }
  function jt(g) {
    let y = "";
    for (; ; ) {
      const A = g.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
        break;
      if (A === Qt || A === xt)
        if (V(g))
          y += A, g.next();
        else {
          if (P(g))
            break;
          y += A, g.next();
        }
      else
        y += A, g.next();
    }
    return y;
  }
  function Gt(g) {
    m(g);
    let y = "", A = "";
    for (; y = J(g); )
      A += y;
    return g.currentChar() === oe && h(F.UNTERMINATED_CLOSING_BRACE, o(), 0), A;
  }
  function Rt(g) {
    m(g);
    let y = "";
    return g.currentChar() === "-" ? (g.next(), y += `-${$t(g)}`) : y += $t(g), g.currentChar() === oe && h(F.UNTERMINATED_CLOSING_BRACE, o(), 0), y;
  }
  function qt(g) {
    return g !== Is && g !== xt;
  }
  function Wt(g) {
    m(g), v(g, "'");
    let y = "", A = "";
    for (; y = R(g, qt); )
      y === "\\" ? A += pi(g) : A += y;
    const I = g.currentChar();
    return I === xt || I === oe ? (h(F.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), I === xt && (g.next(), v(g, "'")), A) : (v(g, "'"), A);
  }
  function pi(g) {
    const y = g.currentChar();
    switch (y) {
      case "\\":
      case "'":
        return g.next(), `\\${y}`;
      case "u":
        return An(g, y, 4);
      case "U":
        return An(g, y, 6);
      default:
        return h(F.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, y), "";
    }
  }
  function An(g, y, A) {
    v(g, y);
    let I = "";
    for (let ot = 0; ot < A; ot++) {
      const at = bt(g);
      if (!at) {
        h(F.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${y}${I}${g.currentChar()}`);
        break;
      }
      I += at;
    }
    return `\\${y}${I}`;
  }
  function bi(g) {
    return g !== "{" && g !== "}" && g !== Qt && g !== xt;
  }
  function yi(g) {
    m(g);
    let y = "", A = "";
    for (; y = R(g, bi); )
      A += y;
    return A;
  }
  function vi(g) {
    let y = "", A = "";
    for (; y = gt(g); )
      A += y;
    return A;
  }
  function xi(g) {
    const y = (A) => {
      const I = g.currentChar();
      return I === "{" || I === "@" || I === "|" || I === "(" || I === ")" || !I || I === Qt ? A : (A += I, g.next(), y(A));
    };
    return y("");
  }
  function Ge(g) {
    m(g);
    const y = v(
      g,
      "|"
      /* TokenChars.Pipe */
    );
    return m(g), y;
  }
  function qe(g, y) {
    let A = null;
    switch (g.currentChar()) {
      case "{":
        return y.braceNest >= 1 && h(F.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), g.next(), A = d(
          y,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), m(g), y.braceNest++, A;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && h(F.EMPTY_PLACEHOLDER, o(), 0), g.next(), A = d(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), y.braceNest--, y.braceNest > 0 && m(g), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), A;
      case "@":
        return y.braceNest > 0 && h(F.UNTERMINATED_CLOSING_BRACE, o(), 0), A = ge(g, y) || f(y), y.braceNest = 0, A;
      default: {
        let ot = !0, at = !0, B = !0;
        if (P(g))
          return y.braceNest > 0 && h(F.UNTERMINATED_CLOSING_BRACE, o(), 0), A = d(y, 1, Ge(g)), y.braceNest = 0, y.inLinked = !1, A;
        if (y.braceNest > 0 && (y.currentType === 4 || y.currentType === 5 || y.currentType === 6))
          return h(F.UNTERMINATED_CLOSING_BRACE, o(), 0), y.braceNest = 0, Qe(g, y);
        if (ot = k(g, y))
          return A = d(y, 4, Gt(g)), m(g), A;
        if (at = x(g, y))
          return A = d(y, 5, Rt(g)), m(g), A;
        if (B = O(g, y))
          return A = d(y, 6, Wt(g)), m(g), A;
        if (!ot && !at && !B)
          return A = d(y, 12, yi(g)), h(F.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, A.value), m(g), A;
        break;
      }
    }
    return A;
  }
  function ge(g, y) {
    const { currentType: A } = y;
    let I = null;
    const ot = g.currentChar();
    switch ((A === 7 || A === 8 || A === 11 || A === 9) && (ot === xt || ot === Qt) && h(F.INVALID_LINKED_FORMAT, o(), 0), ot) {
      case "@":
        return g.next(), I = d(
          y,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), y.inLinked = !0, I;
      case ".":
        return m(g), g.next(), d(
          y,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return m(g), g.next(), d(
          y,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return P(g) ? (I = d(y, 1, Ge(g)), y.braceNest = 0, y.inLinked = !1, I) : S(g, y) || N(g, y) ? (m(g), ge(g, y)) : w(g, y) ? (m(g), d(y, 11, vi(g))) : M(g, y) ? (m(g), ot === "{" ? qe(g, y) || I : d(y, 10, xi(g))) : (A === 7 && h(F.INVALID_LINKED_FORMAT, o(), 0), y.braceNest = 0, y.inLinked = !1, Qe(g, y));
    }
  }
  function Qe(g, y) {
    let A = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (y.braceNest > 0)
      return qe(g, y) || f(y);
    if (y.inLinked)
      return ge(g, y) || f(y);
    switch (g.currentChar()) {
      case "{":
        return qe(g, y) || f(y);
      case "}":
        return h(F.UNBALANCED_CLOSING_BRACE, o(), 0), g.next(), d(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ge(g, y) || f(y);
      default: {
        if (P(g))
          return A = d(y, 1, Ge(g)), y.braceNest = 0, y.inLinked = !1, A;
        if (V(g))
          return d(y, 0, jt(g));
        break;
      }
    }
    return A;
  }
  function Ei() {
    const { currentType: g, offset: y, startLoc: A, endLoc: I } = l;
    return l.lastType = g, l.lastOffset = y, l.lastStartLoc = A, l.lastEndLoc = I, l.offset = s(), l.startLoc = o(), i.currentChar() === oe ? d(
      l,
      13
      /* TokenTypes.EOF */
    ) : Qe(i, l);
  }
  return {
    nextToken: Ei,
    currentOffset: s,
    currentPosition: o,
    context: c
  };
}
const hl = "parser", dl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function fl(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const i = parseInt(t || n, 16);
      return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "�";
    }
  }
}
function _l(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function i(_, p, k, x, ...O) {
    const S = _.currentPosition();
    if (S.offset += x, S.column += x, n) {
      const w = t ? Ri(k, S) : null, N = Ye(p, w, {
        domain: hl,
        args: O
      });
      n(N);
    }
  }
  function s(_, p, k) {
    const x = { type: _ };
    return t && (x.start = p, x.end = p, x.loc = { start: k, end: k }), x;
  }
  function o(_, p, k, x) {
    t && (_.end = p, _.loc && (_.loc.end = k));
  }
  function a(_, p) {
    const k = _.context(), x = s(3, k.offset, k.startLoc);
    return x.value = p, o(x, _.currentOffset(), _.currentPosition()), x;
  }
  function r(_, p) {
    const k = _.context(), { lastOffset: x, lastStartLoc: O } = k, S = s(5, x, O);
    return S.index = parseInt(p, 10), _.nextToken(), o(S, _.currentOffset(), _.currentPosition()), S;
  }
  function l(_, p) {
    const k = _.context(), { lastOffset: x, lastStartLoc: O } = k, S = s(4, x, O);
    return S.key = p, _.nextToken(), o(S, _.currentOffset(), _.currentPosition()), S;
  }
  function c(_, p) {
    const k = _.context(), { lastOffset: x, lastStartLoc: O } = k, S = s(9, x, O);
    return S.value = p.replace(dl, fl), _.nextToken(), o(S, _.currentOffset(), _.currentPosition()), S;
  }
  function u(_) {
    const p = _.nextToken(), k = _.context(), { lastOffset: x, lastStartLoc: O } = k, S = s(8, x, O);
    return p.type !== 11 ? (i(_, F.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), S.value = "", o(S, x, O), {
      nextConsumeToken: p,
      node: S
    }) : (p.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, zt(p)), S.value = p.value || "", o(S, _.currentOffset(), _.currentPosition()), {
      node: S
    });
  }
  function h(_, p) {
    const k = _.context(), x = s(7, k.offset, k.startLoc);
    return x.value = p, o(x, _.currentOffset(), _.currentPosition()), x;
  }
  function d(_) {
    const p = _.context(), k = s(6, p.offset, p.startLoc);
    let x = _.nextToken();
    if (x.type === 8) {
      const O = u(_);
      k.modifier = O.node, x = O.nextConsumeToken || _.nextToken();
    }
    switch (x.type !== 9 && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(x)), x = _.nextToken(), x.type === 2 && (x = _.nextToken()), x.type) {
      case 10:
        x.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(x)), k.key = h(_, x.value || "");
        break;
      case 4:
        x.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(x)), k.key = l(_, x.value || "");
        break;
      case 5:
        x.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(x)), k.key = r(_, x.value || "");
        break;
      case 6:
        x.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(x)), k.key = c(_, x.value || "");
        break;
      default: {
        i(_, F.UNEXPECTED_EMPTY_LINKED_KEY, p.lastStartLoc, 0);
        const O = _.context(), S = s(7, O.offset, O.startLoc);
        return S.value = "", o(S, O.offset, O.startLoc), k.key = S, o(k, O.offset, O.startLoc), {
          nextConsumeToken: x,
          node: k
        };
      }
    }
    return o(k, _.currentOffset(), _.currentPosition()), {
      node: k
    };
  }
  function f(_) {
    const p = _.context(), k = p.currentType === 1 ? _.currentOffset() : p.offset, x = p.currentType === 1 ? p.endLoc : p.startLoc, O = s(2, k, x);
    O.items = [];
    let S = null;
    do {
      const M = S || _.nextToken();
      switch (S = null, M.type) {
        case 0:
          M.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(M)), O.items.push(a(_, M.value || ""));
          break;
        case 5:
          M.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(M)), O.items.push(r(_, M.value || ""));
          break;
        case 4:
          M.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(M)), O.items.push(l(_, M.value || ""));
          break;
        case 6:
          M.value == null && i(_, F.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, zt(M)), O.items.push(c(_, M.value || ""));
          break;
        case 7: {
          const P = d(_);
          O.items.push(P.node), S = P.nextConsumeToken || null;
          break;
        }
      }
    } while (p.currentType !== 13 && p.currentType !== 1);
    const w = p.currentType === 1 ? p.lastOffset : _.currentOffset(), N = p.currentType === 1 ? p.lastEndLoc : _.currentPosition();
    return o(O, w, N), O;
  }
  function v(_, p, k, x) {
    const O = _.context();
    let S = x.items.length === 0;
    const w = s(1, p, k);
    w.cases = [], w.cases.push(x);
    do {
      const N = f(_);
      S || (S = N.items.length === 0), w.cases.push(N);
    } while (O.currentType !== 13);
    return S && i(_, F.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), o(w, _.currentOffset(), _.currentPosition()), w;
  }
  function b(_) {
    const p = _.context(), { offset: k, startLoc: x } = p, O = f(_);
    return p.currentType === 13 ? O : v(_, k, x, O);
  }
  function m(_) {
    const p = ul(_, ft({}, e)), k = p.context(), x = s(0, k.offset, k.startLoc);
    return t && x.loc && (x.loc.source = _), x.body = b(p), e.onCacheKey && (x.cacheKey = e.onCacheKey(_)), k.currentType !== 13 && i(p, F.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, _[k.offset] || ""), o(x, p.currentOffset(), p.currentPosition()), x;
  }
  return { parse: m };
}
function zt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function gl(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function Ps(e, t) {
  for (let n = 0; n < e.length; n++)
    os(e[n], t);
}
function os(e, t) {
  switch (e.type) {
    case 1:
      Ps(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ps(e.items, t);
      break;
    case 6: {
      os(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function ml(e, t = {}) {
  const n = gl(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && os(e.body, n);
  const i = n.context();
  e.helpers = Array.from(i.helpers);
}
function pl(e) {
  const t = e.body;
  return t.type === 2 ? Rs(t) : t.cases.forEach((n) => Rs(n)), e;
}
function Rs(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const i = e.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      t.push(i.value);
    }
    if (t.length === e.items.length) {
      e.static = is(t);
      for (let n = 0; n < e.items.length; n++) {
        const i = e.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
const bl = "minifier";
function je(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      je(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let i = 0; i < n.length; i++)
        je(n[i]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let i = 0; i < n.length; i++)
        je(n[i]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      je(t.key), t.k = t.key, delete t.key, t.modifier && (je(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production")
        throw Ye(F.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: bl,
          args: [e.type]
        });
  }
  delete e.type;
}
const yl = "parser";
function vl(e, t) {
  const { sourceMap: n, filename: i, breakLineCode: s, needIndent: o } = t, a = t.location !== !1, r = {
    filename: i,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: o,
    indentLevel: 0
  };
  a && e.loc && (r.source = e.loc.source);
  const l = () => r;
  function c(m, _) {
    r.code += m;
  }
  function u(m, _ = !0) {
    const p = _ ? s : "";
    c(o ? p + "  ".repeat(m) : p);
  }
  function h(m = !0) {
    const _ = ++r.indentLevel;
    m && u(_);
  }
  function d(m = !0) {
    const _ = --r.indentLevel;
    m && u(_);
  }
  function f() {
    u(r.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: h,
    deindent: d,
    newline: f,
    helper: (m) => `_${m}`,
    needIndent: () => r.needIndent
  };
}
function xl(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), He(e, t.key), t.modifier ? (e.push(", "), He(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function El(e, t) {
  const { helper: n, needIndent: i } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(i());
  const s = t.items.length;
  for (let o = 0; o < s && (He(e, t.items[o]), o !== s - 1); o++)
    e.push(", ");
  e.deindent(i()), e.push("])");
}
function kl(e, t) {
  const { helper: n, needIndent: i } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(i());
    const s = t.cases.length;
    for (let o = 0; o < s && (He(e, t.cases[o]), o !== s - 1); o++)
      e.push(", ");
    e.deindent(i()), e.push("])");
  }
}
function wl(e, t) {
  t.body ? He(e, t.body) : e.push("null");
}
function He(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      wl(e, t);
      break;
    case 1:
      kl(e, t);
      break;
    case 2:
      El(e, t);
      break;
    case 6:
      xl(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw Ye(F.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: yl,
          args: [t.type]
        });
  }
}
const Ol = (e, t = {}) => {
  const n = C(t.mode) ? t.mode : "normal", i = C(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", r = e.helpers || [], l = vl(e, {
    mode: n,
    filename: i,
    sourceMap: s,
    breakLineCode: o,
    needIndent: a
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(a), r.length > 0 && (l.push(`const { ${is(r.map((h) => `${h}: _${h}`), ", ")} } = ctx`), l.newline()), l.push("return "), He(l, e), l.deindent(a), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Tl(e, t = {}) {
  const n = ft({}, t), i = !!n.jit, s = !!n.minify, o = n.optimize == null ? !0 : n.optimize, r = _l(n).parse(e);
  return i ? (o && pl(r), s && je(r), { ast: r, code: "" }) : (ml(r, n), Ol(r, n));
}
/*!
  * core-base v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Sl() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ke().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ke().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function ki(e) {
  return (n) => Al(n, e);
}
function Al(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const i = n, s = i.c || i.cases;
    return e.plural(s.reduce((o, a) => [
      ...o,
      Fs(e, a)
    ], []));
  } else
    return Fs(e, n);
}
function Fs(e, t) {
  const n = t.s || t.static;
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const i = (t.i || t.items).reduce((s, o) => [...s, Fi(e, o)], []);
    return e.normalize(i);
  }
}
function Fi(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const i = t;
      return i.v || i.value;
    }
    case 9: {
      const i = t;
      return i.v || i.value;
    }
    case 4: {
      const i = t;
      return e.interpolate(e.named(i.k || i.key));
    }
    case 5: {
      const i = t;
      return e.interpolate(e.list(i.i != null ? i.i : i.index));
    }
    case 6: {
      const i = t, s = i.m || i.modifier;
      return e.linked(Fi(e, i.k || i.key), s ? Fi(e, s) : void 0, e.type);
    }
    case 7: {
      const i = t;
      return i.v || i.value;
    }
    case 8: {
      const i = t;
      return i.v || i.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const Ll = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Nl(e, t) {
  t && il(e) && fe(ci(Ll, { source: e }));
}
const Cl = (e) => e;
let Cn = /* @__PURE__ */ Object.create(null);
const he = (e) => z(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Dl(e, t = {}) {
  let n = !1;
  const i = t.onError || el;
  return t.onError = (s) => {
    n = !0, i(s);
  }, { ...Tl(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Ml(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && C(e)) {
    const n = H(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Nl(e, n);
    const s = (t.onCacheKey || Cl)(e), o = Cn[s];
    if (o)
      return o;
    const { ast: a, detectError: r } = Dl(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = ki(a);
    return r ? l : Cn[s] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !he(e))
      return fe(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const i = Cn[n];
      return i || (Cn[n] = ki(e));
    } else
      return ki(e);
  }
}
let pn = null;
function Il(e) {
  pn = e;
}
function Pl(e, t, n) {
  pn && pn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Rl = /* @__PURE__ */ Fl("function:translate");
function Fl(e) {
  return (t) => pn && pn.emit(e, t);
}
const yt = {
  INVALID_ARGUMENT: Zr,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Vl = 24;
function ne(e) {
  return Ye(e, null, process.env.NODE_ENV !== "production" ? { messages: $l } : void 0);
}
const $l = {
  [yt.INVALID_ARGUMENT]: "Invalid arguments",
  [yt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [yt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [yt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [yt.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function as(e, t) {
  return t.locale != null ? Vs(t.locale) : Vs(e.locale);
}
let wi;
function Vs(e) {
  if (C(e))
    return e;
  if (tt(e)) {
    if (e.resolvedOnce && wi != null)
      return wi;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Gr(t))
        throw ne(yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return wi = t;
    } else
      throw ne(yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ne(yt.NOT_SUPPORT_LOCALE_TYPE);
}
function jl(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...st(t) ? t : z(t) ? Object.keys(t) : C(t) ? [t] : [n]
  ])];
}
function ka(e, t, n) {
  const i = C(n) ? n : bn, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let o = s.__localeChainCache.get(i);
  if (!o) {
    o = [];
    let a = [n];
    for (; st(a); )
      a = $s(o, a, t);
    const r = st(t) || !$(t) ? t : t.default ? t.default : null;
    a = C(r) ? [r] : r, st(a) && $s(o, a, !1), s.__localeChainCache.set(i, o);
  }
  return o;
}
function $s(e, t, n) {
  let i = !0;
  for (let s = 0; s < t.length && H(i); s++) {
    const o = t[s];
    C(o) && (i = Wl(e, t[s], n));
  }
  return i;
}
function Wl(e, t, n) {
  let i;
  const s = t.split("-");
  do {
    const o = s.join("-");
    i = zl(e, o, n), s.splice(-1, 1);
  } while (s.length && i === !0);
  return i;
}
function zl(e, t, n) {
  let i = !1;
  if (!e.includes(t) && (i = !0, t)) {
    i = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (st(n) || $(n)) && n[s] && (i = n[s]);
  }
  return i;
}
const _e = [];
_e[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
_e[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
_e[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
_e[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
_e[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
_e[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
_e[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Hl = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ul(e) {
  return Hl.test(e);
}
function Bl(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Yl(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Xl(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ul(t) ? Bl(t) : "*" + t;
}
function Kl(e) {
  const t = [];
  let n = -1, i = 0, s = 0, o, a, r, l, c, u, h;
  const d = [];
  d[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = r : a += r;
  }, d[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, d[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    d[
      0
      /* Actions.APPEND */
    ](), s++;
  }, d[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, i = 4, d[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, a === void 0 || (a = Xl(a), a === !1))
        return !1;
      d[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function f() {
    const v = e[n + 1];
    if (i === 5 && v === "'" || i === 6 && v === '"')
      return n++, r = "\\" + v, d[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, o = e[n], !(o === "\\" && f())) {
      if (l = Yl(o), h = _e[i], c = h[l] || h.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (u = d[c[1]], u && (r = o, u() === !1))))
        return;
      if (i === 7)
        return t;
    }
}
const js = /* @__PURE__ */ new Map();
function Gl(e, t) {
  return z(e) ? e[t] : null;
}
function ql(e, t) {
  if (!z(e))
    return null;
  let n = js.get(t);
  if (n || (n = Kl(t), n && js.set(t, n)), !n)
    return null;
  const i = n.length;
  let s = e, o = 0;
  for (; o < i; ) {
    const a = s[n[o]];
    if (a === void 0 || tt(s))
      return null;
    s = a, o++;
  }
  return s;
}
const Ot = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Ql = 8, Jl = {
  [Ot.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ot.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ot.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ot.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ot.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ot.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ot.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Ae(e, ...t) {
  return ci(Jl[e], ...t);
}
const Zl = "10.0.4", hi = -1, bn = "en-US", qn = "", Ws = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function tc() {
  return {
    upper: (e, t) => t === "text" && C(e) ? e.toUpperCase() : t === "vnode" && z(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && C(e) ? e.toLowerCase() : t === "vnode" && z(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && C(e) ? Ws(e) : t === "vnode" && z(e) && "__v_isVNode" in e ? Ws(e.children) : e
  };
}
let wa;
function ec(e) {
  wa = e;
}
let Oa;
function nc(e) {
  Oa = e;
}
let Ta;
function ic(e) {
  Ta = e;
}
let Sa = null;
const sc = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Sa = e;
}, oc = /* @__NO_SIDE_EFFECTS__ */ () => Sa;
let Aa = null;
const zs = (e) => {
  Aa = e;
}, ac = () => Aa;
let Hs = 0;
function rc(e = {}) {
  const t = tt(e.onWarn) ? e.onWarn : fe, n = C(e.version) ? e.version : Zl, i = C(e.locale) || tt(e.locale) ? e.locale : bn, s = tt(i) ? bn : i, o = st(e.fallbackLocale) || $(e.fallbackLocale) || C(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, a = $(e.messages) ? e.messages : { [s]: {} }, r = $(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = $(e.numberFormats) ? e.numberFormats : { [s]: {} }, c = ft({}, e.modifiers || {}, tc()), u = e.pluralRules || {}, h = tt(e.missing) ? e.missing : null, d = H(e.missingWarn) || ze(e.missingWarn) ? e.missingWarn : !0, f = H(e.fallbackWarn) || ze(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, b = !!e.unresolving, m = tt(e.postTranslation) ? e.postTranslation : null, _ = $(e.processor) ? e.processor : null, p = H(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, x = tt(e.messageCompiler) ? e.messageCompiler : wa;
  process.env.NODE_ENV !== "production" && tt(e.messageCompiler) && Ea(Ae(Ot.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const O = tt(e.messageResolver) ? e.messageResolver : Oa || Gl, S = tt(e.localeFallbacker) ? e.localeFallbacker : Ta || jl, w = z(e.fallbackContext) ? e.fallbackContext : void 0, N = e, M = z(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), P = z(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), V = z(N.__meta) ? N.__meta : {};
  Hs++;
  const R = {
    version: n,
    cid: Hs,
    locale: i,
    fallbackLocale: o,
    messages: a,
    modifiers: c,
    pluralRules: u,
    missing: h,
    missingWarn: d,
    fallbackWarn: f,
    fallbackFormat: v,
    unresolving: b,
    postTranslation: m,
    processor: _,
    warnHtmlMessage: p,
    escapeParameter: k,
    messageCompiler: x,
    messageResolver: O,
    localeFallbacker: S,
    fallbackContext: w,
    onWarn: t,
    __meta: V
  };
  return R.datetimeFormats = r, R.numberFormats = l, R.__datetimeFormatters = M, R.__numberFormatters = P, process.env.NODE_ENV !== "production" && (R.__v_emitter = N.__v_emitter != null ? N.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Pl(R, n, V), R;
}
function di(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function La(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function rs(e, t, n, i, s) {
  const { missing: o, onWarn: a } = e;
  if (process.env.NODE_ENV !== "production") {
    const r = e.__v_emitter;
    r && r.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (o !== null) {
    const r = o(e, n, t, s);
    return C(r) ? r : t;
  } else
    return process.env.NODE_ENV !== "production" && La(i, t) && a(Ae(Ot.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Je(e, t, n) {
  const i = e;
  i.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Na(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function lc(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < t.length; i++)
    if (Na(e, t[i]))
      return !0;
  return !1;
}
const Us = typeof Intl < "u", Ca = {
  dateTimeFormat: Us && typeof Intl.DateTimeFormat < "u",
  numberFormat: Us && typeof Intl.NumberFormat < "u"
};
function Bs(e, ...t) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __datetimeFormatters: r } = e;
  if (process.env.NODE_ENV !== "production" && !Ca.dateTimeFormat)
    return o(Ae(Ot.CANNOT_FORMAT_DATE)), qn;
  const [l, c, u, h] = Vi(...t), d = H(u.missingWarn) ? u.missingWarn : e.missingWarn, f = H(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = !!u.part, b = as(e, u), m = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    b
  );
  if (!C(l) || l === "")
    return new Intl.DateTimeFormat(b, h).format(c);
  let _ = {}, p, k = null, x = b, O = null;
  const S = "datetime format";
  for (let M = 0; M < m.length; M++) {
    if (p = O = m[M], process.env.NODE_ENV !== "production" && b !== p && di(f, l) && o(Ae(Ot.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: p
    })), process.env.NODE_ENV !== "production" && b !== p) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: S,
        key: l,
        from: x,
        to: O,
        groupId: `${S}:${l}`
      });
    }
    if (_ = n[p] || {}, k = _[l], $(k))
      break;
    rs(e, l, p, d, S), x = O;
  }
  if (!$(k) || !C(p))
    return i ? hi : l;
  let w = `${p}__${l}`;
  ui(h) || (w = `${w}__${JSON.stringify(h)}`);
  let N = r.get(w);
  return N || (N = new Intl.DateTimeFormat(p, ft({}, k, h)), r.set(w, N)), v ? N.formatToParts(c) : N.format(c);
}
const Da = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Vi(...e) {
  const [t, n, i, s] = e, o = {};
  let a = {}, r;
  if (C(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw ne(yt.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    r = new Date(c);
    try {
      r.toISOString();
    } catch {
      throw ne(yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Xr(t)) {
    if (isNaN(t.getTime()))
      throw ne(yt.INVALID_DATE_ARGUMENT);
    r = t;
  } else if (ht(t))
    r = t;
  else
    throw ne(yt.INVALID_ARGUMENT);
  return C(n) ? o.key = n : $(n) && Object.keys(n).forEach((l) => {
    Da.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), C(i) ? o.locale = i : $(i) && (a = i), $(s) && (a = s), [o.key || "", r, o, a];
}
function Ys(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__datetimeFormatters.has(o) && i.__datetimeFormatters.delete(o);
  }
}
function Xs(e, ...t) {
  const { numberFormats: n, unresolving: i, fallbackLocale: s, onWarn: o, localeFallbacker: a } = e, { __numberFormatters: r } = e;
  if (process.env.NODE_ENV !== "production" && !Ca.numberFormat)
    return o(Ae(Ot.CANNOT_FORMAT_NUMBER)), qn;
  const [l, c, u, h] = $i(...t), d = H(u.missingWarn) ? u.missingWarn : e.missingWarn, f = H(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = !!u.part, b = as(e, u), m = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    b
  );
  if (!C(l) || l === "")
    return new Intl.NumberFormat(b, h).format(c);
  let _ = {}, p, k = null, x = b, O = null;
  const S = "number format";
  for (let M = 0; M < m.length; M++) {
    if (p = O = m[M], process.env.NODE_ENV !== "production" && b !== p && di(f, l) && o(Ae(Ot.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: p
    })), process.env.NODE_ENV !== "production" && b !== p) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: S,
        key: l,
        from: x,
        to: O,
        groupId: `${S}:${l}`
      });
    }
    if (_ = n[p] || {}, k = _[l], $(k))
      break;
    rs(e, l, p, d, S), x = O;
  }
  if (!$(k) || !C(p))
    return i ? hi : l;
  let w = `${p}__${l}`;
  ui(h) || (w = `${w}__${JSON.stringify(h)}`);
  let N = r.get(w);
  return N || (N = new Intl.NumberFormat(p, ft({}, k, h)), r.set(w, N)), v ? N.formatToParts(c) : N.format(c);
}
const Ma = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function $i(...e) {
  const [t, n, i, s] = e, o = {};
  let a = {};
  if (!ht(t))
    throw ne(yt.INVALID_ARGUMENT);
  const r = t;
  return C(n) ? o.key = n : $(n) && Object.keys(n).forEach((l) => {
    Ma.includes(l) ? a[l] = n[l] : o[l] = n[l];
  }), C(i) ? o.locale = i : $(i) && (a = i), $(s) && (a = s), [o.key || "", r, o, a];
}
function Ks(e, t, n) {
  const i = e;
  for (const s in n) {
    const o = `${t}__${s}`;
    i.__numberFormatters.has(o) && i.__numberFormatters.delete(o);
  }
}
const cc = (e) => e, uc = (e) => "", hc = "text", dc = (e) => e.length === 0 ? "" : is(e), fc = qr;
function Gs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function _c(e) {
  const t = ht(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ht(e.named.count) || ht(e.named.n)) ? ht(e.named.count) ? e.named.count : ht(e.named.n) ? e.named.n : t : t;
}
function gc(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function mc(e = {}) {
  const t = e.locale, n = _c(e), i = z(e.pluralRules) && C(t) && tt(e.pluralRules[t]) ? e.pluralRules[t] : Gs, s = z(e.pluralRules) && C(t) && tt(e.pluralRules[t]) ? Gs : void 0, o = (_) => _[i(n, _.length, s)], a = e.list || [], r = (_) => a[_], l = e.named || {};
  ht(e.pluralIndex) && gc(n, l);
  const c = (_) => l[_];
  function u(_, p) {
    const k = tt(e.messages) ? e.messages(_, !!p) : z(e.messages) ? e.messages[_] : !1;
    return k || (e.parent ? e.parent.message(_) : uc);
  }
  const h = (_) => e.modifiers ? e.modifiers[_] : cc, d = $(e.processor) && tt(e.processor.normalize) ? e.processor.normalize : dc, f = $(e.processor) && tt(e.processor.interpolate) ? e.processor.interpolate : fc, v = $(e.processor) && C(e.processor.type) ? e.processor.type : hc, m = {
    list: r,
    named: c,
    plural: o,
    linked: (_, ...p) => {
      const [k, x] = p;
      let O = "text", S = "";
      p.length === 1 ? z(k) ? (S = k.modifier || S, O = k.type || O) : C(k) && (S = k || S) : p.length === 2 && (C(k) && (S = k || S), C(x) && (O = x || O));
      const w = u(_, !0)(m), N = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && st(w) && S ? w[0] : w
      );
      return S ? h(S)(N, O) : N;
    },
    message: u,
    type: v,
    interpolate: f,
    normalize: d,
    values: ft({}, a, l)
  };
  return m;
}
const qs = () => "", Mt = (e) => tt(e);
function Qs(e, ...t) {
  const { fallbackFormat: n, postTranslation: i, unresolving: s, messageCompiler: o, fallbackLocale: a, messages: r } = e, [l, c] = ji(...t), u = H(c.missingWarn) ? c.missingWarn : e.missingWarn, h = H(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, d = H(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, f = !!c.resolvedMessage, v = C(c.default) || H(c.default) ? H(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, b = n || v != null && (C(v) || tt(v)), m = as(e, c);
  d && pc(c);
  let [_, p, k] = f ? [
    l,
    m,
    r[m] || {}
  ] : Ia(e, l, m, a, h, u), x = _, O = l;
  if (!f && !(C(x) || he(x) || Mt(x)) && b && (x = v, O = x), !f && (!(C(x) || he(x) || Mt(x)) || !C(p)))
    return s ? hi : l;
  if (process.env.NODE_ENV !== "production" && C(x) && e.messageCompiler == null)
    return fe(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let S = !1;
  const w = () => {
    S = !0;
  }, N = Mt(x) ? x : Pa(e, l, p, x, O, w);
  if (S)
    return x;
  const M = xc(e, p, k, c), P = mc(M), V = bc(e, N, P), R = i ? i(V, l) : V;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const it = {
      timestamp: Date.now(),
      key: C(l) ? l : Mt(x) ? x.key : "",
      locale: p || (Mt(x) ? x.locale : ""),
      format: C(x) ? x : Mt(x) ? x.source : "",
      message: R
    };
    it.meta = ft({}, e.__meta, /* @__PURE__ */ oc() || {}), Rl(it);
  }
  return R;
}
function pc(e) {
  st(e.list) ? e.list = e.list.map((t) => C(t) ? Cs(t) : t) : z(e.named) && Object.keys(e.named).forEach((t) => {
    C(e.named[t]) && (e.named[t] = Cs(e.named[t]));
  });
}
function Ia(e, t, n, i, s, o) {
  const { messages: a, onWarn: r, messageResolver: l, localeFallbacker: c } = e, u = c(e, i, n);
  let h = {}, d, f = null, v = n, b = null;
  const m = "translate";
  for (let _ = 0; _ < u.length; _++) {
    if (d = b = u[_], process.env.NODE_ENV !== "production" && n !== d && !Na(n, d) && di(s, t) && r(Ae(Ot.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: d
    })), process.env.NODE_ENV !== "production" && n !== d) {
      const O = e.__v_emitter;
      O && O.emit("fallback", {
        type: m,
        key: t,
        from: v,
        to: b,
        groupId: `${m}:${t}`
      });
    }
    h = a[d] || {};
    let p = null, k, x;
    if (process.env.NODE_ENV !== "production" && Ft && (p = window.performance.now(), k = "intlify-message-resolve-start", x = "intlify-message-resolve-end", Ct && Ct(k)), (f = l(h, t)) === null && (f = h[t]), process.env.NODE_ENV !== "production" && Ft) {
      const O = window.performance.now(), S = e.__v_emitter;
      S && p && f && S.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: f,
        time: O - p,
        groupId: `${m}:${t}`
      }), k && x && Ct && Se && (Ct(x), Se("intlify message resolve", k, x));
    }
    if (C(f) || he(f) || Mt(f))
      break;
    if (!lc(d, u)) {
      const O = rs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        d,
        o,
        m
      );
      O !== t && (f = O);
    }
    v = b;
  }
  return [f, d, h];
}
function Pa(e, t, n, i, s, o) {
  const { messageCompiler: a, warnHtmlMessage: r } = e;
  if (Mt(i)) {
    const d = i;
    return d.locale = d.locale || n, d.key = d.key || t, d;
  }
  if (a == null) {
    const d = () => i;
    return d.locale = n, d.key = t, d;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && Ft && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", Ct && Ct(c));
  const h = a(i, yc(e, n, s, i, r, o));
  if (process.env.NODE_ENV !== "production" && Ft) {
    const d = window.performance.now(), f = e.__v_emitter;
    f && l && f.emit("message-compilation", {
      type: "message-compilation",
      message: i,
      time: d - l,
      groupId: `translate:${t}`
    }), c && u && Ct && Se && (Ct(u), Se("intlify message compilation", c, u));
  }
  return h.locale = n, h.key = t, h.source = i, h;
}
function bc(e, t, n) {
  let i = null, s, o;
  process.env.NODE_ENV !== "production" && Ft && (i = window.performance.now(), s = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", Ct && Ct(s));
  const a = t(n);
  if (process.env.NODE_ENV !== "production" && Ft) {
    const r = window.performance.now(), l = e.__v_emitter;
    l && i && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: a,
      time: r - i,
      groupId: `translate:${t.key}`
    }), s && o && Ct && Se && (Ct(o), Se("intlify message evaluation", s, o));
  }
  return a;
}
function ji(...e) {
  const [t, n, i] = e, s = {};
  if (!C(t) && !ht(t) && !Mt(t) && !he(t))
    throw ne(yt.INVALID_ARGUMENT);
  const o = ht(t) ? String(t) : (Mt(t), t);
  return ht(n) ? s.plural = n : C(n) ? s.default = n : $(n) && !ui(n) ? s.named = n : st(n) && (s.list = n), ht(i) ? s.plural = i : C(i) ? s.default = i : $(i) && ft(s, i), [o, s];
}
function yc(e, t, n, i, s, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (a) => {
      if (o && o(a), process.env.NODE_ENV !== "production") {
        const r = vc(i), l = `Message compilation error: ${a.message}`, c = a.location && r && Qr(r, a.location.start.offset, a.location.end.offset), u = e.__v_emitter;
        u && r && u.emit("compile-error", {
          message: r,
          error: a.message,
          start: a.location && a.location.start.offset,
          end: a.location && a.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${l}
${c}` : l);
      } else
        throw a;
    },
    onCacheKey: (a) => Br(t, n, a)
  };
}
function vc(e) {
  if (C(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function xc(e, t, n, i) {
  const { modifiers: s, pluralRules: o, messageResolver: a, fallbackLocale: r, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, d = {
    locale: t,
    modifiers: s,
    pluralRules: o,
    messages: (f, v) => {
      let b = a(n, f);
      if (b == null && (u || v)) {
        const [, , m] = Ia(
          u || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          f,
          t,
          r,
          l,
          c
        );
        b = a(m, f);
      }
      if (C(b) || he(b)) {
        let m = !1;
        const p = Pa(e, f, t, b, f, () => {
          m = !0;
        });
        return m ? qs : p;
      } else return Mt(b) ? b : qs;
    }
  };
  return e.processor && (d.processor = e.processor), i.list && (d.list = i.list), i.named && (d.named = i.named), ht(i.plural) && (d.pluralIndex = i.plural), d;
}
Sl();
function Ec() {
  return Ra().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Ra() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const kc = typeof Proxy == "function", wc = "devtools-plugin:setup", Oc = "plugin:settings:set";
let Re, Wi;
function Tc() {
  var e;
  return Re !== void 0 || (typeof window < "u" && window.performance ? (Re = !0, Wi = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Re = !0, Wi = globalThis.perf_hooks.performance) : Re = !1), Re;
}
function Sc() {
  return Tc() ? Wi.now() : Date.now();
}
class Ac {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const i = {};
    if (t.settings)
      for (const a in t.settings) {
        const r = t.settings[a];
        i[a] = r.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, i);
    try {
      const a = localStorage.getItem(s), r = JSON.parse(a);
      Object.assign(o, r);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(a) {
        try {
          localStorage.setItem(s, JSON.stringify(a));
        } catch {
        }
        o = a;
      },
      now() {
        return Sc();
      }
    }, n && n.on(Oc, (a, r) => {
      a === this.plugin.id && this.fallbacks.setSettings(r);
    }), this.proxiedOn = new Proxy({}, {
      get: (a, r) => this.target ? this.target.on[r] : (...l) => {
        this.onQueue.push({
          method: r,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (a, r) => this.target ? this.target[r] : r === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(r) ? (...l) => (this.targetQueue.push({
        method: r,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[r](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: r,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Lc(e, t) {
  const n = e, i = Ra(), s = Ec(), o = kc && n.enableEarlyProxy;
  if (s && (i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    s.emit(wc, e, t);
  else {
    const a = o ? new Ac(n, s) : null;
    (i.__VUE_DEVTOOLS_PLUGINS__ = i.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: a
    }), a && t(a.proxiedTarget);
  }
}
/*!
  * vue-i18n v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Nc = "10.0.4";
function Cc() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ke().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ke().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ke().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ke().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const re = {
  FALLBACK_TO_ROOT: Ql,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  DEPRECATE_TC: 11
}, Dc = {
  [re.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [re.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [re.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [re.DEPRECATE_TC]: "'tc' and '$tc' has been deprecated in v10. Use 't' or '$t' instead. 'tc' and '$tc’ are going to remove in v11."
};
function fi(e, ...t) {
  return ci(Dc[e], ...t);
}
const Z = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Vl,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function Et(e, ...t) {
  return Ye(e, null, process.env.NODE_ENV !== "production" ? { messages: Mc, args: t } : void 0);
}
const Mc = {
  [Z.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Z.INVALID_ARGUMENT]: "Invalid argument",
  [Z.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Z.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Z.UNEXPECTED_ERROR]: "Unexpected error",
  [Z.REQUIRED_VALUE]: "Required in value: {0}",
  [Z.INVALID_VALUE]: "Invalid value",
  [Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Z.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Z.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, zi = /* @__PURE__ */ Xt("__translateVNode"), Hi = /* @__PURE__ */ Xt("__datetimeParts"), Ui = /* @__PURE__ */ Xt("__numberParts"), Le = /* @__PURE__ */ Xt("__enableEmitter"), yn = /* @__PURE__ */ Xt("__disableEmitter"), Fa = Xt("__setPluralRules"), Va = /* @__PURE__ */ Xt("__injectWithOption"), Bi = /* @__PURE__ */ Xt("__dispose");
function vn(e) {
  if (!z(e))
    return e;
  for (const t in e)
    if (Gn(e, t))
      if (!t.includes("."))
        z(e[t]) && vn(e[t]);
      else {
        const n = t.split("."), i = n.length - 1;
        let s = e, o = !1;
        for (let a = 0; a < i; a++) {
          if (n[a] in s || (s[n[a]] = {}), !z(s[n[a]])) {
            process.env.NODE_ENV !== "production" && fe(fi(re.IGNORE_OBJ_FLATTEN, {
              key: n[a]
            })), o = !0;
            break;
          }
          s = s[n[a]];
        }
        o || (s[n[i]] = e[t], delete e[t]), z(s[n[i]]) && vn(s[n[i]]);
      }
  return e;
}
function ls(e, t) {
  const { messages: n, __i18n: i, messageResolver: s, flatJson: o } = t, a = $(n) ? n : st(i) ? {} : { [e]: {} };
  if (st(i) && i.forEach((r) => {
    if ("locale" in r && "resource" in r) {
      const { locale: l, resource: c } = r;
      l ? (a[l] = a[l] || {}, Bn(c, a[l])) : Bn(c, a);
    } else
      C(r) && Bn(JSON.parse(r), a);
  }), s == null && o)
    for (const r in a)
      Gn(a, r) && vn(a[r]);
  return a;
}
function $a(e) {
  return e.type;
}
function ja(e, t, n) {
  let i = z(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (i = ls(e.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(i);
  s.length && s.forEach((o) => {
    e.mergeLocaleMessage(o, i[o]);
  });
  {
    if (z(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (z(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function Js(e) {
  return Pt(Rr, null, e, 0);
}
const Zs = "__INTLIFY_META__", to = () => [], Ic = () => !1;
let eo = 0;
function no(e) {
  return (t, n, i, s) => e(n, i, mn() || void 0, s);
}
const Pc = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = mn();
  let t = null;
  return e && (t = $a(e)[Zs]) ? { [Zs]: t } : null;
};
function cs(e = {}) {
  const { __root: t, __injectWithOption: n } = e, i = t === void 0, s = e.flatJson, o = Ft ? pt : es;
  let a = H(e.inheritLocale) ? e.inheritLocale : !0;
  const r = o(
    // prettier-ignore
    t && a ? t.locale.value : C(e.locale) ? e.locale : bn
  ), l = o(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : C(e.fallbackLocale) || st(e.fallbackLocale) || $(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r.value
  ), c = o(ls(r.value, e)), u = o($(e.datetimeFormats) ? e.datetimeFormats : { [r.value]: {} }), h = o($(e.numberFormats) ? e.numberFormats : { [r.value]: {} });
  let d = t ? t.missingWarn : H(e.missingWarn) || ze(e.missingWarn) ? e.missingWarn : !0, f = t ? t.fallbackWarn : H(e.fallbackWarn) || ze(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : H(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, m = tt(e.missing) ? e.missing : null, _ = tt(e.missing) ? no(e.missing) : null, p = tt(e.postTranslation) ? e.postTranslation : null, k = t ? t.warnHtmlMessage : H(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter;
  const O = t ? t.modifiers : $(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || t && t.pluralRules, w;
  w = (() => {
    i && zs(null);
    const T = {
      version: Nc,
      locale: r.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: O,
      pluralRules: S,
      missing: _ === null ? void 0 : _,
      missingWarn: d,
      fallbackWarn: f,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: p === null ? void 0 : p,
      warnHtmlMessage: k,
      escapeParameter: x,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = u.value, T.numberFormats = h.value, T.__datetimeFormatters = $(w) ? w.__datetimeFormatters : void 0, T.__numberFormatters = $(w) ? w.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (T.__v_emitter = $(w) ? w.__v_emitter : void 0);
    const L = rc(T);
    return i && zs(L), L;
  })(), Je(w, r.value, l.value);
  function M() {
    return [
      r.value,
      l.value,
      c.value,
      u.value,
      h.value
    ];
  }
  const P = Yt({
    get: () => r.value,
    set: (T) => {
      r.value = T, w.locale = r.value;
    }
  }), V = Yt({
    get: () => l.value,
    set: (T) => {
      l.value = T, w.fallbackLocale = l.value, Je(w, r.value, T);
    }
  }), R = Yt(() => c.value), it = /* @__PURE__ */ Yt(() => u.value), gt = /* @__PURE__ */ Yt(() => h.value);
  function U() {
    return tt(p) ? p : null;
  }
  function J(T) {
    p = T, w.postTranslation = T;
  }
  function et() {
    return m;
  }
  function vt(T) {
    T !== null && (_ = no(T)), m = T, w.missing = _;
  }
  function ct(T, L) {
    return T !== "translate" || !L.resolvedMessage;
  }
  const bt = (T, L, K, rt, me, Ln) => {
    M();
    let Pe;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, i || (w.fallbackContext = t ? ac() : void 0), Pe = T(w);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, i || (w.fallbackContext = void 0);
    }
    if (K !== "translate exists" && // for not `te` (e.g `t`)
    ht(Pe) && Pe === hi || K === "translate exists" && !Pe) {
      const [pe, Nr] = L();
      if (process.env.NODE_ENV !== "production" && t && C(pe) && ct(K, Nr) && (v && (di(f, pe) || La(d, pe)) && fe(fi(re.FALLBACK_TO_ROOT, {
        key: pe,
        type: K
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ls } = w;
        Ls && v && Ls.emit("fallback", {
          type: K,
          key: pe,
          to: "global",
          groupId: `${K}:${pe}`
        });
      }
      return t && v ? rt(t) : me(pe);
    } else {
      if (Ln(Pe))
        return Pe;
      throw Et(Z.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $t(...T) {
    return bt((L) => Reflect.apply(Qs, null, [L, ...T]), () => ji(...T), "translate", (L) => Reflect.apply(L.t, L, [...T]), (L) => L, (L) => C(L));
  }
  function jt(...T) {
    const [L, K, rt] = T;
    if (rt && !z(rt))
      throw Et(Z.INVALID_ARGUMENT);
    return $t(L, K, ft({ resolvedMessage: !0 }, rt || {}));
  }
  function Gt(...T) {
    return bt((L) => Reflect.apply(Bs, null, [L, ...T]), () => Vi(...T), "datetime format", (L) => Reflect.apply(L.d, L, [...T]), () => qn, (L) => C(L));
  }
  function Rt(...T) {
    return bt((L) => Reflect.apply(Xs, null, [L, ...T]), () => $i(...T), "number format", (L) => Reflect.apply(L.n, L, [...T]), () => qn, (L) => C(L));
  }
  function qt(T) {
    return T.map((L) => C(L) || ht(L) || H(L) ? Js(String(L)) : L);
  }
  const pi = {
    normalize: qt,
    interpolate: (T) => T,
    type: "vnode"
  };
  function An(...T) {
    return bt((L) => {
      let K;
      const rt = L;
      try {
        rt.processor = pi, K = Reflect.apply(Qs, null, [rt, ...T]);
      } finally {
        rt.processor = null;
      }
      return K;
    }, () => ji(...T), "translate", (L) => L[zi](...T), (L) => [Js(L)], (L) => st(L));
  }
  function bi(...T) {
    return bt((L) => Reflect.apply(Xs, null, [L, ...T]), () => $i(...T), "number format", (L) => L[Ui](...T), to, (L) => C(L) || st(L));
  }
  function yi(...T) {
    return bt((L) => Reflect.apply(Bs, null, [L, ...T]), () => Vi(...T), "datetime format", (L) => L[Hi](...T), to, (L) => C(L) || st(L));
  }
  function vi(T) {
    S = T, w.pluralRules = S;
  }
  function xi(T, L) {
    return bt(() => {
      if (!T)
        return !1;
      const K = C(L) ? L : r.value, rt = ge(K), me = w.messageResolver(rt, T);
      return he(me) || Mt(me) || C(me);
    }, () => [T], "translate exists", (K) => Reflect.apply(K.te, K, [T, L]), Ic, (K) => H(K));
  }
  function Ge(T) {
    let L = null;
    const K = ka(w, l.value, r.value);
    for (let rt = 0; rt < K.length; rt++) {
      const me = c.value[K[rt]] || {}, Ln = w.messageResolver(me, T);
      if (Ln != null) {
        L = Ln;
        break;
      }
    }
    return L;
  }
  function qe(T) {
    const L = Ge(T);
    return L ?? (t ? t.tm(T) || {} : {});
  }
  function ge(T) {
    return c.value[T] || {};
  }
  function Qe(T, L) {
    if (s) {
      const K = { [T]: L };
      for (const rt in K)
        Gn(K, rt) && vn(K[rt]);
      L = K[T];
    }
    c.value[T] = L, w.messages = c.value;
  }
  function Ei(T, L) {
    c.value[T] = c.value[T] || {};
    const K = { [T]: L };
    if (s)
      for (const rt in K)
        Gn(K, rt) && vn(K[rt]);
    L = K[T], Bn(L, c.value[T]), w.messages = c.value;
  }
  function g(T) {
    return u.value[T] || {};
  }
  function y(T, L) {
    u.value[T] = L, w.datetimeFormats = u.value, Ys(w, T, L);
  }
  function A(T, L) {
    u.value[T] = ft(u.value[T] || {}, L), w.datetimeFormats = u.value, Ys(w, T, L);
  }
  function I(T) {
    return h.value[T] || {};
  }
  function ot(T, L) {
    h.value[T] = L, w.numberFormats = h.value, Ks(w, T, L);
  }
  function at(T, L) {
    h.value[T] = ft(h.value[T] || {}, L), w.numberFormats = h.value, Ks(w, T, L);
  }
  eo++, t && Ft && (Kn(t.locale, (T) => {
    a && (r.value = T, w.locale = T, Je(w, r.value, l.value));
  }), Kn(t.fallbackLocale, (T) => {
    a && (l.value = T, w.fallbackLocale = T, Je(w, r.value, l.value));
  }));
  const B = {
    id: eo,
    locale: P,
    fallbackLocale: V,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(T) {
      a = T, T && t && (r.value = t.locale.value, l.value = t.fallbackLocale.value, Je(w, r.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: R,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(T) {
      d = T, w.missingWarn = d;
    },
    get fallbackWarn() {
      return f;
    },
    set fallbackWarn(T) {
      f = T, w.fallbackWarn = f;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(T) {
      v = T;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(T) {
      b = T, w.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return k;
    },
    set warnHtmlMessage(T) {
      k = T, w.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return x;
    },
    set escapeParameter(T) {
      x = T, w.escapeParameter = T;
    },
    t: $t,
    getLocaleMessage: ge,
    setLocaleMessage: Qe,
    mergeLocaleMessage: Ei,
    getPostTranslationHandler: U,
    setPostTranslationHandler: J,
    getMissingHandler: et,
    setMissingHandler: vt,
    [Fa]: vi
  };
  return B.datetimeFormats = it, B.numberFormats = gt, B.rt = jt, B.te = xi, B.tm = qe, B.d = Gt, B.n = Rt, B.getDateTimeFormat = g, B.setDateTimeFormat = y, B.mergeDateTimeFormat = A, B.getNumberFormat = I, B.setNumberFormat = ot, B.mergeNumberFormat = at, B[Va] = n, B[zi] = An, B[Hi] = yi, B[Ui] = bi, process.env.NODE_ENV !== "production" && (B[Le] = (T) => {
    w.__v_emitter = T;
  }, B[yn] = () => {
    w.__v_emitter = void 0;
  }), B;
}
const Wa = "vue-i18n: composer properties", Oi = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
  "vue-i18n-resource-inspector": "Vue I18n DevTools",
  "vue-i18n-timeline": "Vue I18n"
}, Rc = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Fc = {
  "vue-i18n-timeline": 16764185
};
let Yi;
async function Vc(e, t) {
  return new Promise((n, i) => {
    try {
      Lc({
        id: "vue-devtools-plugin-vue-i18n",
        label: Oi["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Wa],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        Yi = s, s.on.visitComponentTree(({ componentInstance: a, treeNode: r }) => {
          $c(a, r, t);
        }), s.on.inspectComponent(({ componentInstance: a, instanceData: r }) => {
          a.vnode.el && a.vnode.el.__VUE_I18N__ && r && (t.mode === "legacy" ? a.vnode.el.__VUE_I18N__ !== t.global.__composer && io(r, a.vnode.el.__VUE_I18N__) : io(r, a.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Oi["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: Rc["vue-i18n-resource-inspector"]
        }), s.on.getInspectorTree((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && Uc(a, t);
        });
        const o = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (a) => {
          if (a.app === e && a.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), Yc(a, t), a.nodeId === "global") {
              if (!o.has(a.app)) {
                const [r] = await s.getComponentInstances(a.app);
                o.set(a.app, r);
              }
              s.highlightElement(o.get(a.app));
            } else {
              const r = Bc(a.nodeId, t);
              r && s.highlightElement(r);
            }
        }), s.on.editInspectorState((a) => {
          a.app === e && a.inspectorId === "vue-i18n-resource-inspector" && Kc(a, t);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Oi["vue-i18n-timeline"],
          color: Fc["vue-i18n-timeline"]
        }), n(!0);
      });
    } catch (s) {
      console.error(s), i(!1);
    }
  });
}
function za(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function $c(e, t, n) {
  const i = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== i) {
    const s = {
      label: `i18n (${za(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function io(e, t) {
  const n = Wa;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: us(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function us(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const i = e[n];
    tt(i) && "source" in i ? t[n] = Hc(i) : he(i) && i.loc && i.loc.source ? t[n] = i.loc.source : z(i) ? t[n] = us(i) : t[n] = i;
  }), t;
}
const jc = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Wc(e) {
  return e.replace(/[<>"&]/g, zc);
}
function zc(e) {
  return jc[e] || e;
}
function Hc(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Wc(e.source)}")` : "(?)"}`
    }
  };
}
function Uc(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [i, s] of t.__instances) {
    const o = t.mode === "composition" ? s : s.__composer;
    n !== o && e.rootNodes.push({
      id: o.id.toString(),
      label: `${za(i)} Scope`
    });
  }
}
function Bc(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [i, s] of t.__instances.entries())
      if (s.id.toString() === e) {
        n = i;
        break;
      }
  }
  return n;
}
function Ha(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((i) => i.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Yc(e, t) {
  const n = Ha(e.nodeId, t);
  return n && (e.state = Xc(n)), null;
}
function Xc(e) {
  const t = {}, n = "Locale related info", i = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = i;
  const s = "Locale messages info", o = [
    {
      type: s,
      key: "messages",
      editable: !1,
      value: us(e.messages.value)
    }
  ];
  t[s] = o;
  {
    const a = "Datetime formats info", r = [
      {
        type: a,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[a] = r;
    const l = "Datetime formats info", c = [
      {
        type: l,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[l] = c;
  }
  return t;
}
function xn(e, t) {
  if (Yi) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Yi.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function Kc(e, t) {
  const n = Ha(e.nodeId, t);
  if (n) {
    const [i] = e.path;
    i === "locale" && C(e.state.value) ? n.locale.value = e.state.value : i === "fallbackLocale" && (C(e.state.value) || st(e.state.value) || z(e.state.value)) ? n.fallbackLocale.value = e.state.value : i === "inheritLocale" && H(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function Gc(e) {
  const t = C(e.locale) ? e.locale : bn, n = C(e.fallbackLocale) || st(e.fallbackLocale) || $(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, i = tt(e.missing) ? e.missing : void 0, s = H(e.silentTranslationWarn) || ze(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, o = H(e.silentFallbackWarn) || ze(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = H(e.fallbackRoot) ? e.fallbackRoot : !0, r = !!e.formatFallbackMessages, l = $(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = tt(e.postTranslation) ? e.postTranslation : void 0, h = C(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, d = !!e.escapeParameterHtml, f = H(e.sync) ? e.sync : !0;
  let v = e.messages;
  if ($(e.sharedMessages)) {
    const O = e.sharedMessages;
    v = Object.keys(O).reduce((w, N) => {
      const M = w[N] || (w[N] = {});
      return ft(M, O[N]), w;
    }, v || {});
  }
  const { __i18n: b, __root: m, __injectWithOption: _ } = e, p = e.datetimeFormats, k = e.numberFormats, x = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: v,
    flatJson: x,
    datetimeFormats: p,
    numberFormats: k,
    missing: i,
    missingWarn: s,
    fallbackWarn: o,
    fallbackRoot: a,
    fallbackFormat: r,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: h,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: f,
    __i18n: b,
    __root: m,
    __injectWithOption: _
  };
}
function Xi(e = {}) {
  const t = cs(Gc(e)), { __extender: n } = e, i = {
    // id
    id: t.id,
    // locale
    get locale() {
      return t.locale.value;
    },
    set locale(s) {
      t.locale.value = s;
    },
    // fallbackLocale
    get fallbackLocale() {
      return t.fallbackLocale.value;
    },
    set fallbackLocale(s) {
      t.fallbackLocale.value = s;
    },
    // messages
    get messages() {
      return t.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return t.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return t.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return t.availableLocales;
    },
    // missing
    get missing() {
      return t.getMissingHandler();
    },
    set missing(s) {
      t.setMissingHandler(s);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return H(t.missingWarn) ? !t.missingWarn : t.missingWarn;
    },
    set silentTranslationWarn(s) {
      t.missingWarn = H(s) ? !s : s;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return H(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
    },
    set silentFallbackWarn(s) {
      t.fallbackWarn = H(s) ? !s : s;
    },
    // modifiers
    get modifiers() {
      return t.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return t.fallbackFormat;
    },
    set formatFallbackMessages(s) {
      t.fallbackFormat = s;
    },
    // postTranslation
    get postTranslation() {
      return t.getPostTranslationHandler();
    },
    set postTranslation(s) {
      t.setPostTranslationHandler(s);
    },
    // sync
    get sync() {
      return t.inheritLocale;
    },
    set sync(s) {
      t.inheritLocale = s;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return t.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(s) {
      t.warnHtmlMessage = s !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return t.escapeParameter;
    },
    set escapeParameterHtml(s) {
      t.escapeParameter = s;
    },
    // pluralizationRules
    get pluralizationRules() {
      return t.pluralRules || {};
    },
    // for internal
    __composer: t,
    // t
    t(...s) {
      return Reflect.apply(t.t, t, [...s]);
    },
    // rt
    rt(...s) {
      return Reflect.apply(t.rt, t, [...s]);
    },
    // tc
    tc(...s) {
      const [o, a, r] = s, l = { plural: 1 };
      let c = null, u = null;
      if (process.env.NODE_ENV !== "production" && Ea(fi(re.DEPRECATE_TC)), !C(o))
        throw Et(Z.INVALID_ARGUMENT);
      const h = o;
      return C(a) ? l.locale = a : ht(a) ? l.plural = a : st(a) ? c = a : $(a) && (u = a), C(r) ? l.locale = r : st(r) ? c = r : $(r) && (u = r), Reflect.apply(t.t, t, [
        h,
        c || u || {},
        l
      ]);
    },
    // te
    te(s, o) {
      return t.te(s, o);
    },
    // tm
    tm(s) {
      return t.tm(s);
    },
    // getLocaleMessage
    getLocaleMessage(s) {
      return t.getLocaleMessage(s);
    },
    // setLocaleMessage
    setLocaleMessage(s, o) {
      t.setLocaleMessage(s, o);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(s, o) {
      t.mergeLocaleMessage(s, o);
    },
    // d
    d(...s) {
      return Reflect.apply(t.d, t, [...s]);
    },
    // getDateTimeFormat
    getDateTimeFormat(s) {
      return t.getDateTimeFormat(s);
    },
    // setDateTimeFormat
    setDateTimeFormat(s, o) {
      t.setDateTimeFormat(s, o);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(s, o) {
      t.mergeDateTimeFormat(s, o);
    },
    // n
    n(...s) {
      return Reflect.apply(t.n, t, [...s]);
    },
    // getNumberFormat
    getNumberFormat(s) {
      return t.getNumberFormat(s);
    },
    // setNumberFormat
    setNumberFormat(s, o) {
      t.setNumberFormat(s, o);
    },
    // mergeNumberFormat
    mergeNumberFormat(s, o) {
      t.mergeNumberFormat(s, o);
    }
  };
  return i.__extender = n, process.env.NODE_ENV !== "production" && (i.__enableEmitter = (s) => {
    const o = t;
    o[Le] && o[Le](s);
  }, i.__disableEmitter = () => {
    const s = t;
    s[yn] && s[yn]();
  }), i;
}
function qc(e, t, n) {
  return {
    beforeCreate() {
      const i = mn();
      if (!i)
        throw Et(Z.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const o = s.i18n;
        if (s.__i18n && (o.__i18n = s.__i18n), o.__root = t, this === this.$root)
          this.$i18n = so(e, o);
        else {
          o.__injectWithOption = !0, o.__extender = n.__vueI18nExtend, this.$i18n = Xi(o);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = so(e, s);
        else {
          this.$i18n = Xi({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      s.__i18nGlobal && ja(t, s, s), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, a) => this.$i18n.te(o, a), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = (o) => this.$i18n.tm(o), n.__setInstance(i, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const i = this.$i18n;
        this.$el.__VUE_I18N__ = i.__composer;
        const s = this.__v_emitter = ss();
        i.__enableEmitter && i.__enableEmitter(s), s.on("*", xn);
      }
    },
    unmounted() {
      const i = mn();
      if (!i)
        throw Et(Z.UNEXPECTED_ERROR);
      const s = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", xn), delete this.__v_emitter), this.$i18n && (s.__disableEmitter && s.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(i), delete this.$i18n;
    }
  };
}
function so(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Fa](t.pluralizationRules || e.pluralizationRules);
  const n = ls(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((i) => e.mergeLocaleMessage(i, n[i])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((i) => e.mergeDateTimeFormat(i, t.datetimeFormats[i])), t.numberFormats && Object.keys(t.numberFormats).forEach((i) => e.mergeNumberFormat(i, t.numberFormats[i])), e;
}
const hs = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Qc({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((i, s) => [
    ...i,
    // prettier-ignore
    ...s.type === Be ? s.children : [s]
  ], []) : t.reduce((n, i) => {
    const s = e[i];
    return s && (n[i] = s()), n;
  }, {});
}
function Ua() {
  return Be;
}
const Jc = /* @__PURE__ */ kt({
  /* eslint-disable */
  name: "i18n-t",
  props: ft({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => ht(e) || !isNaN(e)
    }
  }, hs),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: i } = t, s = e.i18n || Kt({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const o = Object.keys(n).filter((h) => h !== "_"), a = {};
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = C(e.plural) ? +e.plural : e.plural);
      const r = Qc(t, o), l = s[zi](e.keypath, r, a), c = ft({}, i), u = C(e.tag) || z(e.tag) ? e.tag : Ua();
      return gn(u, c, l);
    };
  }
}), oo = Jc;
function Zc(e) {
  return st(e) && !C(e[0]);
}
function Ba(e, t, n, i) {
  const { slots: s, attrs: o } = t;
  return () => {
    const a = { part: !0 };
    let r = {};
    e.locale && (a.locale = e.locale), C(e.format) ? a.key = e.format : z(e.format) && (C(e.format.key) && (a.key = e.format.key), r = Object.keys(e.format).reduce((d, f) => n.includes(f) ? ft({}, d, { [f]: e.format[f] }) : d, {}));
    const l = i(e.value, a, r);
    let c = [a.key];
    st(l) ? c = l.map((d, f) => {
      const v = s[d.type], b = v ? v({ [d.type]: d.value, index: f, parts: l }) : [d.value];
      return Zc(b) && (b[0].key = `${d.type}-${f}`), b;
    }) : C(l) && (c = [l]);
    const u = ft({}, o), h = C(e.tag) || z(e.tag) ? e.tag : Ua();
    return gn(h, u, c);
  };
}
const tu = /* @__PURE__ */ kt({
  /* eslint-disable */
  name: "i18n-n",
  props: ft({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, hs),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Kt({
      useScope: e.scope,
      __useComponent: !0
    });
    return Ba(e, t, Ma, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ui](...i)
    ));
  }
}), ao = tu, eu = /* @__PURE__ */ kt({
  /* eslint-disable */
  name: "i18n-d",
  props: ft({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, hs),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Kt({
      useScope: e.scope,
      __useComponent: !0
    });
    return Ba(e, t, Da, (...i) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Hi](...i)
    ));
  }
}), ro = eu;
function nu(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const i = n.__getInstance(t);
    return i != null ? i.__composer : e.global.__composer;
  }
}
function iu(e) {
  const t = (a) => {
    const { instance: r, value: l } = a;
    if (!r || !r.$)
      throw Et(Z.UNEXPECTED_ERROR);
    const c = nu(e, r.$), u = lo(l);
    return [
      Reflect.apply(c.t, c, [...co(u)]),
      c
    ];
  };
  return {
    created: (a, r) => {
      const [l, c] = t(r);
      Ft && e.global === c && (a.__i18nWatcher = Kn(c.locale, () => {
        r.instance && r.instance.$forceUpdate();
      })), a.__composer = c, a.textContent = l;
    },
    unmounted: (a) => {
      Ft && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: r }) => {
      if (a.__composer) {
        const l = a.__composer, c = lo(r);
        a.textContent = Reflect.apply(l.t, l, [
          ...co(c)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [r] = t(a);
      return { textContent: r };
    }
  };
}
function lo(e) {
  if (C(e))
    return { path: e };
  if ($(e)) {
    if (!("path" in e))
      throw Et(Z.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Et(Z.INVALID_VALUE);
}
function co(e) {
  const { path: t, locale: n, args: i, choice: s, plural: o } = e, a = {}, r = i || {};
  return C(n) && (a.locale = n), ht(s) && (a.plural = s), ht(o) && (a.plural = o), [t, r, a];
}
function su(e, t, ...n) {
  const i = $(n[0]) ? n[0] : {};
  (H(i.globalInstall) ? i.globalInstall : !0) && ([oo.name, "I18nT"].forEach((o) => e.component(o, oo)), [ao.name, "I18nN"].forEach((o) => e.component(o, ao)), [ro.name, "I18nD"].forEach((o) => e.component(o, ro))), e.directive("t", iu(t));
}
const ou = /* @__PURE__ */ Xt("global-vue-i18n");
function au(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && H(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, i = H(e.globalInjection) ? e.globalInjection : !0, s = /* @__PURE__ */ new Map(), [o, a] = ru(e, n), r = /* @__PURE__ */ Xt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function l(d) {
    return s.get(d) || null;
  }
  function c(d, f) {
    s.set(d, f);
  }
  function u(d) {
    s.delete(d);
  }
  const h = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
    },
    // install plugin
    async install(d, ...f) {
      if (process.env.NODE_ENV !== "production" && (d.__VUE_I18N__ = h), d.__VUE_I18N_SYMBOL__ = r, d.provide(d.__VUE_I18N_SYMBOL__, h), $(f[0])) {
        const m = f[0];
        h.__composerExtend = m.__composerExtend, h.__vueI18nExtend = m.__vueI18nExtend;
      }
      let v = null;
      !n && i && (v = gu(d, h.global)), __VUE_I18N_FULL_INSTALL__ && su(d, h, ...f), __VUE_I18N_LEGACY_API__ && n && d.mixin(qc(a, a.__composer, h));
      const b = d.unmount;
      if (d.unmount = () => {
        v && v(), h.dispose(), b();
      }, process.env.NODE_ENV !== "production") {
        if (!await Vc(d, h))
          throw Et(Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
        const _ = ss();
        if (n) {
          const p = a;
          p.__enableEmitter && p.__enableEmitter(_);
        } else {
          const p = a;
          p[Le] && p[Le](_);
        }
        _.on("*", xn);
      }
    },
    // global accessor
    get global() {
      return a;
    },
    dispose() {
      o.stop();
    },
    // @internal
    __instances: s,
    // @internal
    __getInstance: l,
    // @internal
    __setInstance: c,
    // @internal
    __deleteInstance: u
  };
  return h;
}
function Kt(e = {}) {
  const t = mn();
  if (t == null)
    throw Et(Z.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Et(Z.NOT_INSTALLED);
  const n = lu(t), i = uu(n), s = $a(t), o = cu(e, s);
  if (o === "global")
    return ja(i, e, s), i;
  if (o === "parent") {
    let l = hu(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && fe(fi(re.NOT_FOUND_PARENT_SCOPE)), l = i), l;
  }
  const a = n;
  let r = a.__getInstance(t);
  if (r == null) {
    const l = ft({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), i && (l.__root = i), r = cs(l), a.__composerExtend && (r[Bi] = a.__composerExtend(r)), fu(a, t, r), a.__setInstance(t, r);
  }
  return r;
}
function ru(e, t, n) {
  const i = Mr(), s = __VUE_I18N_LEGACY_API__ && t ? i.run(() => Xi(e)) : i.run(() => cs(e));
  if (s == null)
    throw Et(Z.UNEXPECTED_ERROR);
  return [i, s];
}
function lu(e) {
  const t = Ir(e.isCE ? ou : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Et(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
  return t;
}
function cu(e, t) {
  return ui(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function uu(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function hu(e, t, n = !1) {
  let i = null;
  const s = t.root;
  let o = du(t, n);
  for (; o != null; ) {
    const a = e;
    if (e.mode === "composition")
      i = a.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const r = a.__getInstance(o);
      r != null && (i = r.__composer, n && i && !i[Va] && (i = null));
    }
    if (i != null || s === o)
      break;
    o = o.parent;
  }
  return i;
}
function du(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function fu(e, t, n) {
  let i = null;
  se(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, i = ss();
      const s = n;
      s[Le] && s[Le](i), i.on("*", xn);
    }
  }, t), ba(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (i && i.off("*", xn), s[yn] && s[yn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const o = s[Bi];
    o && (o(), delete s[Bi]);
  }, t);
}
const _u = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], uo = ["t", "rt", "d", "n", "tm", "te"];
function gu(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return _u.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o)
      throw Et(Z.UNEXPECTED_ERROR);
    const a = Pr(o.value) ? {
      get() {
        return o.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(r) {
        o.value.value = r;
      }
    } : {
      get() {
        return o.get && o.get();
      }
    };
    Object.defineProperty(n, s, a);
  }), e.config.globalProperties.$i18n = n, uo.forEach((s) => {
    const o = Object.getOwnPropertyDescriptor(t, s);
    if (!o || !o.value)
      throw Et(Z.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, o);
  }), () => {
    delete e.config.globalProperties.$i18n, uo.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Cc();
ec(Ml);
nc(ql);
ic(ka);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = ke();
  e.__INTLIFY__ = !0, Il(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function Me(...e) {
  return e = e.map((t) => t.replace(/^\/|\/$/g, "")), e.join("/");
}
const mu = ["fill"], Ie = /* @__PURE__ */ kt({
  __name: "Loader",
  props: {
    width: {
      type: Number,
      default: 120
    },
    fillColor: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    return (t, n) => (Y(), G("svg", {
      class: "mx-auto block display-inline-block",
      style: Fr("width: " + e.width + "px"),
      viewBox: "0 0 120 30",
      xmlns: "http://www.w3.org/2000/svg",
      fill: e.fillColor
    }, n[0] || (n[0] = [
      Vr('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>', 3)
    ]), 12, mu));
  }
}), pu = { class: "panel panel-white no-margin" }, bu = { class: "panel-heading" }, yu = { style: { display: "flex", "align-items": "center" } }, vu = {
  class: "panel-title",
  style: { flex: "1" }
}, xu = { class: "text-default" }, Eu = {
  key: 0,
  class: "panel-body text-center"
}, ku = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "260px" } }, wu = {
  key: 1,
  class: "panel-body no-padding",
  style: { height: "300px", "overflow-y": "auto" }
}, Ou = { class: "table text-nowrap table-fixed-header" }, Tu = { style: { position: "sticky", top: "0", "z-index": "1", "background-color": "#fff", "box-shadow": "0 -4px 8px 0px #000" } }, Su = {
  colspan: "4",
  class: "bg-slate-700"
}, Au = {
  colspan: "4",
  class: "bg-info-700"
}, Lu = {
  width: "150",
  class: "text-center bg-slate"
}, Nu = {
  width: "150",
  class: "text-center bg-slate"
}, Cu = {
  width: "150",
  class: "text-center bg-slate"
}, Du = {
  width: "150",
  class: "text-center bg-slate"
}, Mu = {
  width: "150",
  class: "text-center bg-info"
}, Iu = {
  width: "150",
  class: "text-center bg-info"
}, Pu = {
  width: "150",
  class: "text-center bg-info"
}, Ru = {
  width: "150",
  class: "text-center bg-info"
}, Fu = { class: "text-semibold text-center bg-slate-300" }, Vu = { class: "text-semibold text-center bg-slate-300" }, $u = { class: "text-semibold text-center bg-slate-300" }, ju = { class: "text-semibold text-center bg-slate-300" }, Wu = { class: "text-semibold text-center bg-info-300" }, zu = { class: "text-semibold text-center bg-info-300" }, Hu = { class: "text-semibold text-center bg-info-300" }, Uu = { class: "text-semibold text-center bg-info-300" }, Bu = /* @__PURE__ */ kt({
  __name: "SaleSummaryByDealer",
  setup(e) {
    const { t } = Kt(), n = pt(!1), i = pt([]), s = async () => {
      var o, a;
      if (!n.value) {
        n.value = !0;
        try {
          const r = Me(((o = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : o.api_base_url) || "", "/widgets/sale_summary_by_dealer"), l = (a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_token;
          if (!l)
            throw new Error("API token is missing");
          const c = await window.fetch(r, {
            headers: {
              Authorization: `Bearer ${l}`
            }
          });
          if (!c.ok)
            throw new Error("Failed to fetch data");
          i.value = await c.json();
        } catch (r) {
          console.error(r);
        } finally {
          n.value = !1;
        }
      }
    };
    return se(() => {
      s();
    }), (o, a) => (Y(), G("div", pu, [
      E("div", bu, [
        E("div", yu, [
          E("h6", vu, [
            E("span", xu, D(W(t)("sale_summary_by_dealer.title")), 1)
          ]),
          E("a", {
            href: "#",
            onClick: De(s, ["prevent"])
          }, a[0] || (a[0] = [
            E("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-refresh-ccw"
            }, [
              E("polyline", { points: "1 4 1 10 7 10" }),
              E("polyline", { points: "23 20 23 14 17 14" }),
              E("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (Y(), G("div", Eu, [
        E("div", ku, [
          Pt(Ie, { width: 30 })
        ])
      ])) : (Y(), G("div", wu, [
        E("table", Ou, [
          E("thead", Tu, [
            E("tr", null, [
              a[1] || (a[1] = E("th", null, null, -1)),
              E("th", Su, D(W(t)("sale_summary_by_dealer.current_month")), 1),
              E("th", Au, D(W(t)("sale_summary_by_dealer.current_year")), 1)
            ]),
            E("tr", null, [
              E("th", null, [
                Nt(D(W(t)("sale_summary_by_dealer.dealer")), 1),
                a[2] || (a[2] = E("div", {
                  class: "fht-cell",
                  style: { width: "199px" }
                }, null, -1))
              ]),
              E("th", Lu, [
                Nt(D(W(t)("sale_summary_by_dealer.evaluations")), 1),
                a[3] || (a[3] = E("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              E("th", Nu, [
                Nt(D(W(t)("sale_summary_by_dealer.confirmed_evaluations")), 1),
                a[4] || (a[4] = E("div", {
                  class: "fht-cell",
                  style: { width: "114px" }
                }, null, -1))
              ]),
              E("th", Cu, [
                Nt(D(W(t)("sale_summary_by_dealer.sold")), 1),
                a[5] || (a[5] = E("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              E("th", Du, [
                Nt(D(W(t)("sale_summary_by_dealer.delivered")), 1),
                a[6] || (a[6] = E("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              E("th", Mu, [
                Nt(D(W(t)("sale_summary_by_dealer.evaluations")), 1),
                a[7] || (a[7] = E("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              E("th", Iu, [
                Nt(D(W(t)("sale_summary_by_dealer.confirmed_evaluations")), 1),
                a[8] || (a[8] = E("div", {
                  class: "fht-cell",
                  style: { width: "114px" }
                }, null, -1))
              ]),
              E("th", Pu, [
                Nt(D(W(t)("sale_summary_by_dealer.sold")), 1),
                a[9] || (a[9] = E("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              E("th", Ru, [
                Nt(D(W(t)("sale_summary_by_dealer.delivered")), 1),
                a[10] || (a[10] = E("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ])
            ])
          ]),
          E("tbody", null, [
            (Y(!0), G(Be, null, li(i.value, (r) => (Y(), G("tr", {
              key: r.dealer
            }, [
              E("td", null, D(r.dealer), 1),
              E("td", Fu, D(r.evaluations_current_month_total), 1),
              E("td", Vu, D(r.evaluations_confirmed_current_month_total), 1),
              E("td", $u, D(r.sold_current_month_total), 1),
              E("td", ju, D(r.delivered_current_month_total), 1),
              E("td", Wu, D(r.evaluations_current_year_total), 1),
              E("td", zu, D(r.evaluations_confirmed_current_year_total), 1),
              E("td", Hu, D(r.sold_current_year_total), 1),
              E("td", Uu, D(r.delivered_current_year_total), 1)
            ]))), 128))
          ])
        ])
      ]))
    ]));
  }
});
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function Tn(e) {
  return e + 0.5 | 0;
}
const le = (e, t, n) => Math.max(Math.min(e, n), t);
function on(e) {
  return le(Tn(e * 2.55), 0, 255);
}
function ue(e) {
  return le(Tn(e * 255), 0, 255);
}
function ee(e) {
  return le(Tn(e / 2.55) / 100, 0, 1);
}
function ho(e) {
  return le(Tn(e * 100), 0, 100);
}
const Dt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ki = [..."0123456789ABCDEF"], Yu = (e) => Ki[e & 15], Xu = (e) => Ki[(e & 240) >> 4] + Ki[e & 15], Dn = (e) => (e & 240) >> 4 === (e & 15), Ku = (e) => Dn(e.r) && Dn(e.g) && Dn(e.b) && Dn(e.a);
function Gu(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & Dt[e[1]] * 17,
    g: 255 & Dt[e[2]] * 17,
    b: 255 & Dt[e[3]] * 17,
    a: t === 5 ? Dt[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: Dt[e[1]] << 4 | Dt[e[2]],
    g: Dt[e[3]] << 4 | Dt[e[4]],
    b: Dt[e[5]] << 4 | Dt[e[6]],
    a: t === 9 ? Dt[e[7]] << 4 | Dt[e[8]] : 255
  })), n;
}
const qu = (e, t) => e < 255 ? t(e) : "";
function Qu(e) {
  var t = Ku(e) ? Yu : Xu;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + qu(e.a, t) : void 0;
}
const Ju = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ya(e, t, n) {
  const i = t * Math.min(n, 1 - n), s = (o, a = (o + e / 30) % 12) => n - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [s(0), s(8), s(4)];
}
function Zu(e, t, n) {
  const i = (s, o = (s + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function th(e, t, n) {
  const i = Ya(e, 1, 0.5);
  let s;
  for (t + n > 1 && (s = 1 / (t + n), t *= s, n *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - n, i[s] += t;
  return i;
}
function eh(e, t, n, i, s) {
  return e === s ? (t - n) / i + (t < n ? 6 : 0) : t === s ? (n - e) / i + 2 : (e - t) / i + 4;
}
function ds(e) {
  const n = e.r / 255, i = e.g / 255, s = e.b / 255, o = Math.max(n, i, s), a = Math.min(n, i, s), r = (o + a) / 2;
  let l, c, u;
  return o !== a && (u = o - a, c = r > 0.5 ? u / (2 - o - a) : u / (o + a), l = eh(n, i, s, u, o), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function fs(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(ue);
}
function _s(e, t, n) {
  return fs(Ya, e, t, n);
}
function nh(e, t, n) {
  return fs(th, e, t, n);
}
function ih(e, t, n) {
  return fs(Zu, e, t, n);
}
function Xa(e) {
  return (e % 360 + 360) % 360;
}
function sh(e) {
  const t = Ju.exec(e);
  let n = 255, i;
  if (!t)
    return;
  t[5] !== i && (n = t[6] ? on(+t[5]) : ue(+t[5]));
  const s = Xa(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
  return t[1] === "hwb" ? i = nh(s, o, a) : t[1] === "hsv" ? i = ih(s, o, a) : i = _s(s, o, a), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: n
  };
}
function oh(e, t) {
  var n = ds(e);
  n[0] = Xa(n[0] + t), n = _s(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function ah(e) {
  if (!e)
    return;
  const t = ds(e), n = t[0], i = ho(t[1]), s = ho(t[2]);
  return e.a < 255 ? `hsla(${n}, ${i}%, ${s}%, ${ee(e.a)})` : `hsl(${n}, ${i}%, ${s}%)`;
}
const fo = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, _o = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function rh() {
  const e = {}, t = Object.keys(_o), n = Object.keys(fo);
  let i, s, o, a, r;
  for (i = 0; i < t.length; i++) {
    for (a = r = t[i], s = 0; s < n.length; s++)
      o = n[s], r = r.replace(o, fo[o]);
    o = parseInt(_o[a], 16), e[r] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Mn;
function lh(e) {
  Mn || (Mn = rh(), Mn.transparent = [0, 0, 0, 0]);
  const t = Mn[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const ch = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function uh(e) {
  const t = ch.exec(e);
  let n = 255, i, s, o;
  if (t) {
    if (t[7] !== i) {
      const a = +t[7];
      n = t[8] ? on(a) : le(a * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? on(i) : le(i, 0, 255)), s = 255 & (t[4] ? on(s) : le(s, 0, 255)), o = 255 & (t[6] ? on(o) : le(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: n
    };
  }
}
function hh(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${ee(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Ti = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, Fe = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function dh(e, t, n) {
  const i = Fe(ee(e.r)), s = Fe(ee(e.g)), o = Fe(ee(e.b));
  return {
    r: ue(Ti(i + n * (Fe(ee(t.r)) - i))),
    g: ue(Ti(s + n * (Fe(ee(t.g)) - s))),
    b: ue(Ti(o + n * (Fe(ee(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  };
}
function In(e, t, n) {
  if (e) {
    let i = ds(e);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1)), i = _s(i), e.r = i[0], e.g = i[1], e.b = i[2];
  }
}
function Ka(e, t) {
  return e && Object.assign(t || {}, e);
}
function go(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = ue(e[3]))) : (t = Ka(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = ue(t.a)), t;
}
function fh(e) {
  return e.charAt(0) === "r" ? uh(e) : sh(e);
}
class En {
  constructor(t) {
    if (t instanceof En)
      return t;
    const n = typeof t;
    let i;
    n === "object" ? i = go(t) : n === "string" && (i = Gu(t) || lh(t) || fh(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Ka(this._rgb);
    return t && (t.a = ee(t.a)), t;
  }
  set rgb(t) {
    this._rgb = go(t);
  }
  rgbString() {
    return this._valid ? hh(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Qu(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? ah(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb, s = t.rgb;
      let o;
      const a = n === o ? 0.5 : n, r = 2 * a - 1, l = i.a - s.a, c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      o = 1 - c, i.r = 255 & c * i.r + o * s.r + 0.5, i.g = 255 & c * i.g + o * s.g + 0.5, i.b = 255 & c * i.b + o * s.b + 0.5, i.a = a * i.a + (1 - a) * s.a, this.rgb = i;
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = dh(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new En(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ue(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = Tn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = n, this;
  }
  opaquer(t) {
    const n = this._rgb;
    return n.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return In(this._rgb, 2, t), this;
  }
  darken(t) {
    return In(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return In(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return In(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return oh(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function Jt() {
}
const _h = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function At(e) {
  return e === null || typeof e > "u";
}
function mt(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function X(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function ie(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Ht(e, t) {
  return ie(e) ? e : t;
}
function Q(e, t) {
  return typeof e > "u" ? t : e;
}
const gh = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, Ga = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function nt(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function q(e, t, n, i) {
  let s, o, a;
  if (mt(e))
    for (o = e.length, s = 0; s < o; s++)
      t.call(n, e[s], s);
  else if (X(e))
    for (a = Object.keys(e), o = a.length, s = 0; s < o; s++)
      t.call(n, e[a[s]], a[s]);
}
function Qn(e, t) {
  let n, i, s, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, i = e.length; n < i; ++n)
    if (s = e[n], o = t[n], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function Jn(e) {
  if (mt(e))
    return e.map(Jn);
  if (X(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), i = n.length;
    let s = 0;
    for (; s < i; ++s)
      t[n[s]] = Jn(e[n[s]]);
    return t;
  }
  return e;
}
function qa(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function mh(e, t, n, i) {
  if (!qa(e))
    return;
  const s = t[e], o = n[e];
  X(s) && X(o) ? kn(s, o, i) : t[e] = Jn(o);
}
function kn(e, t, n) {
  const i = mt(t) ? t : [
    t
  ], s = i.length;
  if (!X(e))
    return e;
  n = n || {};
  const o = n.merger || mh;
  let a;
  for (let r = 0; r < s; ++r) {
    if (a = i[r], !X(a))
      continue;
    const l = Object.keys(a);
    for (let c = 0, u = l.length; c < u; ++c)
      o(l[c], e, a, n);
  }
  return e;
}
function un(e, t) {
  return kn(e, t, {
    merger: ph
  });
}
function ph(e, t, n) {
  if (!qa(e))
    return;
  const i = t[e], s = n[e];
  X(i) && X(s) ? un(i, s) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Jn(s));
}
const mo = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function bh(e) {
  const t = e.split("."), n = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (n.push(i), i = "");
  return n;
}
function yh(e) {
  const t = bh(e);
  return (n) => {
    for (const i of t) {
      if (i === "")
        break;
      n = n && n[i];
    }
    return n;
  };
}
function wn(e, t) {
  return (mo[t] || (mo[t] = yh(t)))(e);
}
function gs(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Zn = (e) => typeof e < "u", de = (e) => typeof e == "function", po = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function vh(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const _t = Math.PI, ut = 2 * _t, ti = Number.POSITIVE_INFINITY, xh = _t / 180, dt = _t / 2, be = _t / 4, bo = _t * 2 / 3, yo = Math.log10, vo = Math.sign;
function Eh(e) {
  const t = [], n = Math.sqrt(e);
  let i;
  for (i = 1; i < n; i++)
    e % i === 0 && (t.push(i), t.push(e / i));
  return n === (n | 0) && t.push(n), t.sort((s, o) => s - o).pop(), t;
}
function ei(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function we(e) {
  return e * (_t / 180);
}
function kh(e) {
  return e * (180 / _t);
}
function Qa(e, t) {
  const n = t.x - e.x, i = t.y - e.y, s = Math.sqrt(n * n + i * i);
  let o = Math.atan2(i, n);
  return o < -0.5 * _t && (o += ut), {
    angle: o,
    distance: s
  };
}
function wh(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function ye(e) {
  return (e % ut + ut) % ut;
}
function ni(e, t, n, i) {
  const s = ye(e), o = ye(t), a = ye(n), r = ye(o - s), l = ye(a - s), c = ye(s - o), u = ye(s - a);
  return s === o || s === a || i && o === a || r > l && c < u;
}
function It(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Oh(e) {
  return It(e, -32768, 32767);
}
function an(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function ms(e, t, n) {
  n = n || ((a) => e[a] < t);
  let i = e.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, n(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const Gi = (e, t, n, i) => ms(e, n, i ? (s) => {
  const o = e[s][t];
  return o < n || o === n && e[s + 1][t] === n;
} : (s) => e[s][t] < n), Th = (e, t, n) => ms(e, n, (i) => e[i][t] >= n);
function Sh(e, t, n) {
  let i = 0, s = e.length;
  for (; i < s && e[i] < t; )
    i++;
  for (; s > i && e[s - 1] > n; )
    s--;
  return i > 0 || s < e.length ? e.slice(i, s) : e;
}
const Ja = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Ah(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Ja.forEach((n) => {
    const i = "_onData" + gs(n), s = e[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const a = s.apply(this, o);
        return e._chartjs.listeners.forEach((r) => {
          typeof r[i] == "function" && r[i](...o);
        }), a;
      }
    });
  });
}
function xo(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const i = n.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (Ja.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function Lh(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const Za = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function tr(e, t) {
  let n = [], i = !1;
  return function(...s) {
    n = s, i || (i = !0, Za.call(window, () => {
      i = !1, e.apply(t, n);
    }));
  };
}
function Nh(e, t) {
  let n;
  return function(...i) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, i)) : e.apply(this, i), t;
  };
}
const er = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", Lt = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, Ch = (e, t, n, i) => e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t, Pn = (e) => e === 0 || e === 1, Eo = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * ut / n)), ko = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * ut / n) + 1, hn = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * dt) + 1,
  easeOutSine: (e) => Math.sin(e * dt),
  easeInOutSine: (e) => -0.5 * (Math.cos(_t * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => Pn(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => Pn(e) ? e : Eo(e, 0.075, 0.3),
  easeOutElastic: (e) => Pn(e) ? e : ko(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return Pn(e) ? e : e < 0.5 ? 0.5 * Eo(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * ko(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - hn.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? hn.easeInBounce(e * 2) * 0.5 : hn.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function nr(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function wo(e) {
  return nr(e) ? e : new En(e);
}
function Si(e) {
  return nr(e) ? e : new En(e).saturate(0.5).darken(0.1).hexString();
}
const Dh = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Mh = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Ih(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: Mh
    },
    numbers: {
      type: "number",
      properties: Dh
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Ph(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Oo = /* @__PURE__ */ new Map();
function Rh(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let i = Oo.get(n);
  return i || (i = new Intl.NumberFormat(e, t), Oo.set(n, i)), i;
}
function ir(e, t, n) {
  return Rh(t, n).format(e);
}
const sr = {
  values(e) {
    return mt(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = Fh(e, n);
    }
    const a = yo(Math.abs(o)), r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
      notation: s,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), ir(e, i, l);
  },
  logarithmic(e, t, n) {
    if (e === 0)
      return "0";
    const i = n[t].significand || e / Math.pow(10, Math.floor(yo(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * n.length ? sr.numeric.call(this, e, t, n) : "";
  }
};
function Fh(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Vh = {
  formatters: sr
};
function $h(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Vh.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Ne = /* @__PURE__ */ Object.create(null), qi = /* @__PURE__ */ Object.create(null);
function dn(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let i = 0, s = n.length; i < s; ++i) {
    const o = n[i];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Ai(e, t, n) {
  return typeof t == "string" ? kn(dn(e, t), n) : kn(dn(e, ""), t);
}
class jh {
  constructor(t, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => Si(s.backgroundColor), this.hoverBorderColor = (i, s) => Si(s.borderColor), this.hoverColor = (i, s) => Si(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return Ai(this, t, n);
  }
  get(t) {
    return dn(this, t);
  }
  describe(t, n) {
    return Ai(qi, t, n);
  }
  override(t, n) {
    return Ai(Ne, t, n);
  }
  route(t, n, i, s) {
    const o = dn(this, t), a = dn(this, i), r = "_" + n;
    Object.defineProperties(o, {
      [r]: {
        value: o[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[r], c = a[s];
          return X(l) ? Object.assign({}, c, l) : Q(l, c);
        },
        set(l) {
          this[r] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var lt = /* @__PURE__ */ new jh({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Ih,
  Ph,
  $h
]);
function Wh(e) {
  return !e || At(e.size) || At(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function To(e, t, n, i, s) {
  let o = t[s];
  return o || (o = t[s] = e.measureText(s).width, n.push(s)), o > i && (i = o), i;
}
function ve(e, t, n) {
  const i = e.currentDevicePixelRatio, s = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function So(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function Ao(e, t, n, i) {
  or(e, t, n, i, null);
}
function or(e, t, n, i, s) {
  let o, a, r, l, c, u, h, d;
  const f = t.pointStyle, v = t.rotation, b = t.radius;
  let m = (v || 0) * xh;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, i), e.rotate(m), e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), e.restore();
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch (e.beginPath(), f) {
      default:
        s ? e.ellipse(n, i, s / 2, b, 0, 0, ut) : e.arc(n, i, b, 0, ut), e.closePath();
        break;
      case "triangle":
        u = s ? s / 2 : b, e.moveTo(n + Math.sin(m) * u, i - Math.cos(m) * b), m += bo, e.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * b), m += bo, e.lineTo(n + Math.sin(m) * u, i - Math.cos(m) * b), e.closePath();
        break;
      case "rectRounded":
        c = b * 0.516, l = b - c, a = Math.cos(m + be) * l, h = Math.cos(m + be) * (s ? s / 2 - c : l), r = Math.sin(m + be) * l, d = Math.sin(m + be) * (s ? s / 2 - c : l), e.arc(n - h, i - r, c, m - _t, m - dt), e.arc(n + d, i - a, c, m - dt, m), e.arc(n + h, i + r, c, m, m + dt), e.arc(n - d, i + a, c, m + dt, m + _t), e.closePath();
        break;
      case "rect":
        if (!v) {
          l = Math.SQRT1_2 * b, u = s ? s / 2 : l, e.rect(n - u, i - l, 2 * u, 2 * l);
          break;
        }
        m += be;
      case "rectRot":
        h = Math.cos(m) * (s ? s / 2 : b), a = Math.cos(m) * b, r = Math.sin(m) * b, d = Math.sin(m) * (s ? s / 2 : b), e.moveTo(n - h, i - r), e.lineTo(n + d, i - a), e.lineTo(n + h, i + r), e.lineTo(n - d, i + a), e.closePath();
        break;
      case "crossRot":
        m += be;
      case "cross":
        h = Math.cos(m) * (s ? s / 2 : b), a = Math.cos(m) * b, r = Math.sin(m) * b, d = Math.sin(m) * (s ? s / 2 : b), e.moveTo(n - h, i - r), e.lineTo(n + h, i + r), e.moveTo(n + d, i - a), e.lineTo(n - d, i + a);
        break;
      case "star":
        h = Math.cos(m) * (s ? s / 2 : b), a = Math.cos(m) * b, r = Math.sin(m) * b, d = Math.sin(m) * (s ? s / 2 : b), e.moveTo(n - h, i - r), e.lineTo(n + h, i + r), e.moveTo(n + d, i - a), e.lineTo(n - d, i + a), m += be, h = Math.cos(m) * (s ? s / 2 : b), a = Math.cos(m) * b, r = Math.sin(m) * b, d = Math.sin(m) * (s ? s / 2 : b), e.moveTo(n - h, i - r), e.lineTo(n + h, i + r), e.moveTo(n + d, i - a), e.lineTo(n - d, i + a);
        break;
      case "line":
        a = s ? s / 2 : Math.cos(m) * b, r = Math.sin(m) * b, e.moveTo(n - a, i - r), e.lineTo(n + a, i + r);
        break;
      case "dash":
        e.moveTo(n, i), e.lineTo(n + Math.cos(m) * (s ? s / 2 : b), i + Math.sin(m) * b);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function ar(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function ps(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function bs(e) {
  e.restore();
}
function zh(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), At(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Hh(e, t, n, i, s) {
  if (s.strikethrough || s.underline) {
    const o = e.measureText(i), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l = n - o.actualBoundingBoxAscent, c = n + o.actualBoundingBoxDescent, u = s.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = s.decorationWidth || 2, e.moveTo(a, u), e.lineTo(r, u), e.stroke();
  }
}
function Uh(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function ii(e, t, n, i, s, o = {}) {
  const a = mt(t) ? t : [
    t
  ], r = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = s.string, zh(e, o), l = 0; l < a.length; ++l)
    c = a[l], o.backdrop && Uh(e, o.backdrop), r && (o.strokeColor && (e.strokeStyle = o.strokeColor), At(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, n, i, o.maxWidth)), e.fillText(c, n, i, o.maxWidth), Hh(e, n, i, c, o), i += Number(s.lineHeight);
  e.restore();
}
function Qi(e, t) {
  const { x: n, y: i, w: s, h: o, radius: a } = t;
  e.arc(n + a.topLeft, i + a.topLeft, a.topLeft, 1.5 * _t, _t, !0), e.lineTo(n, i + o - a.bottomLeft), e.arc(n + a.bottomLeft, i + o - a.bottomLeft, a.bottomLeft, _t, dt, !0), e.lineTo(n + s - a.bottomRight, i + o), e.arc(n + s - a.bottomRight, i + o - a.bottomRight, a.bottomRight, dt, 0, !0), e.lineTo(n + s, i + a.topRight), e.arc(n + s - a.topRight, i + a.topRight, a.topRight, 0, -dt, !0), e.lineTo(n + a.topLeft, i);
}
const Bh = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Yh = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Xh(e, t) {
  const n = ("" + e).match(Bh);
  if (!n || n[1] === "normal")
    return t * 1.2;
  switch (e = +n[2], n[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const Kh = (e) => +e || 0;
function ys(e, t) {
  const n = {}, i = X(t), s = i ? Object.keys(t) : t, o = X(e) ? i ? (a) => Q(e[a], e[t[a]]) : (a) => e[a] : () => e;
  for (const a of s)
    n[a] = Kh(o(a));
  return n;
}
function Gh(e) {
  return ys(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function fn(e) {
  return ys(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Vt(e) {
  const t = Gh(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function St(e, t) {
  e = e || {}, t = t || lt.font;
  let n = Q(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = Q(e.style, t.style);
  i && !("" + i).match(Yh) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: Q(e.family, t.family),
    lineHeight: Xh(Q(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: Q(e.weight, t.weight),
    string: ""
  };
  return s.string = Wh(s), s;
}
function Rn(e, t, n, i) {
  let s, o, a;
  for (s = 0, o = e.length; s < o; ++s)
    if (a = e[s], a !== void 0 && a !== void 0)
      return a;
}
function qh(e, t, n) {
  const { min: i, max: s } = e, o = Ga(t, (s - i) / 2), a = (r, l) => n && r === 0 ? 0 : r + l;
  return {
    min: a(i, -Math.abs(o)),
    max: a(s, o)
  };
}
function Xe(e, t) {
  return Object.assign(Object.create(e), t);
}
function vs(e, t = [
  ""
], n, i, s = () => e[0]) {
  const o = n || e;
  typeof i > "u" && (i = ur("_fallback", e));
  const a = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: i,
    _getTarget: s,
    override: (r) => vs([
      r,
      ...e
    ], t, o, i)
  };
  return new Proxy(a, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(r, l) {
      return delete r[l], delete r._keys, delete e[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(r, l) {
      return lr(r, l, () => sd(l, t, e, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(r, l) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(r, l) {
      return No(r).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return No(r);
    },
    /**
    * A trap for setting property values.
    */
    set(r, l, c) {
      const u = r._storage || (r._storage = s());
      return r[l] = u[l] = c, delete r._keys, !0;
    }
  });
}
function Ue(e, t, n, i) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: rr(e, i),
    setContext: (o) => Ue(e, o, n, i),
    override: (o) => Ue(e.override(o), t, n, i)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, a) {
      return delete o[a], delete e[a], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, a, r) {
      return lr(o, a, () => Jh(o, a, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys ? Reflect.has(e, a) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, a);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    /**
    * A trap for the in operator.
    */
    has(o, a) {
      return Reflect.has(e, a);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    /**
    * A trap for setting property values.
    */
    set(o, a, r) {
      return e[a] = r, delete o[a], !0;
    }
  });
}
function rr(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = e;
  return {
    allKeys: s,
    scriptable: n,
    indexable: i,
    isScriptable: de(n) ? n : () => n,
    isIndexable: de(i) ? i : () => i
  };
}
const Qh = (e, t) => e ? e + gs(t) : t, xs = (e, t) => X(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function lr(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const i = n();
  return e[t] = i, i;
}
function Jh(e, t, n) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: a } = e;
  let r = i[t];
  return de(r) && a.isScriptable(t) && (r = Zh(t, r, e, n)), mt(r) && r.length && (r = td(t, r, e, a.isIndexable)), xs(t, r) && (r = Ue(r, s, o && o[t], a)), r;
}
function Zh(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: a, _stack: r } = n;
  if (r.has(e))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + e);
  r.add(e);
  let l = t(o, a || i);
  return r.delete(e), xs(e, l) && (l = Es(s._scopes, s, e, l)), l;
}
function td(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: a, _descriptors: r } = n;
  if (typeof o.index < "u" && i(e))
    return t[o.index % t.length];
  if (X(t[0])) {
    const l = t, c = s._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const h = Es(c, s, e, u);
      t.push(Ue(h, o, a && a[e], r));
    }
  }
  return t;
}
function cr(e, t, n) {
  return de(e) ? e(t, n) : e;
}
const ed = (e, t) => e === !0 ? t : typeof e == "string" ? wn(t, e) : void 0;
function nd(e, t, n, i, s) {
  for (const o of t) {
    const a = ed(n, o);
    if (a) {
      e.add(a);
      const r = cr(a._fallback, n, s);
      if (typeof r < "u" && r !== n && r !== i)
        return r;
    } else if (a === !1 && typeof i < "u" && n !== i)
      return null;
  }
  return !1;
}
function Es(e, t, n, i) {
  const s = t._rootScopes, o = cr(t._fallback, n, i), a = [
    ...e,
    ...s
  ], r = /* @__PURE__ */ new Set();
  r.add(i);
  let l = Lo(r, a, n, o || n, i);
  return l === null || typeof o < "u" && o !== n && (l = Lo(r, a, o, l, i), l === null) ? !1 : vs(Array.from(r), [
    ""
  ], s, o, () => id(t, n, i));
}
function Lo(e, t, n, i, s) {
  for (; n; )
    n = nd(e, t, n, i, s);
  return n;
}
function id(e, t, n) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return mt(s) && X(n) ? n : s || {};
}
function sd(e, t, n, i) {
  let s;
  for (const o of t)
    if (s = ur(Qh(o, e), n), typeof s < "u")
      return xs(e, s) ? Es(n, i, e, s) : s;
}
function ur(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const i = n[e];
    if (typeof i < "u")
      return i;
  }
}
function No(e) {
  let t = e._keys;
  return t || (t = e._keys = od(e._scopes)), t;
}
function od(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const i of Object.keys(n).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function ks() {
  return typeof window < "u" && typeof document < "u";
}
function ws(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function si(e, t, n) {
  let i;
  return typeof e == "string" ? (i = parseInt(e, 10), e.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[n])) : i = e, i;
}
const _i = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function ad(e, t) {
  return _i(e).getPropertyValue(t);
}
const rd = [
  "top",
  "right",
  "bottom",
  "left"
];
function Te(e, t, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let s = 0; s < 4; s++) {
    const o = rd[s];
    i[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const ld = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function cd(e, t) {
  const n = e.touches, i = n && n.length ? n[0] : e, { offsetX: s, offsetY: o } = i;
  let a = !1, r, l;
  if (ld(s, o, e.target))
    r = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    r = i.clientX - c.left, l = i.clientY - c.top, a = !0;
  }
  return {
    x: r,
    y: l,
    box: a
  };
}
function Ee(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: i } = t, s = _i(n), o = s.boxSizing === "border-box", a = Te(s, "padding"), r = Te(s, "border", "width"), { x: l, y: c, box: u } = cd(e, n), h = a.left + (u && r.left), d = a.top + (u && r.top);
  let { width: f, height: v } = t;
  return o && (f -= a.width + r.width, v -= a.height + r.height), {
    x: Math.round((l - h) / f * n.width / i),
    y: Math.round((c - d) / v * n.height / i)
  };
}
function ud(e, t, n) {
  let i, s;
  if (t === void 0 || n === void 0) {
    const o = e && ws(e);
    if (!o)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const a = o.getBoundingClientRect(), r = _i(o), l = Te(r, "border", "width"), c = Te(r, "padding");
      t = a.width - c.width - l.width, n = a.height - c.height - l.height, i = si(r.maxWidth, o, "clientWidth"), s = si(r.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: i || ti,
    maxHeight: s || ti
  };
}
const Fn = (e) => Math.round(e * 10) / 10;
function hd(e, t, n, i) {
  const s = _i(e), o = Te(s, "margin"), a = si(s.maxWidth, e, "clientWidth") || ti, r = si(s.maxHeight, e, "clientHeight") || ti, l = ud(e, t, n);
  let { width: c, height: u } = l;
  if (s.boxSizing === "content-box") {
    const d = Te(s, "border", "width"), f = Te(s, "padding");
    c -= f.width + d.width, u -= f.height + d.height;
  }
  return c = Math.max(0, c - o.width), u = Math.max(0, i ? c / i : u - o.height), c = Fn(Math.min(c, a, l.maxWidth)), u = Fn(Math.min(u, r, l.maxHeight)), c && !u && (u = Fn(c / 2)), (t !== void 0 || n !== void 0) && i && l.height && u > l.height && (u = l.height, c = Fn(Math.floor(u * i))), {
    width: c,
    height: u
  };
}
function Co(e, t, n) {
  const i = t || 1, s = Math.floor(e.height * i), o = Math.floor(e.width * i);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const a = e.canvas;
  return a.style && (n || !a.style.height && !a.style.width) && (a.style.height = `${e.height}px`, a.style.width = `${e.width}px`), e.currentDevicePixelRatio !== i || a.height !== s || a.width !== o ? (e.currentDevicePixelRatio = i, a.height = s, a.width = o, e.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const dd = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    ks() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function Do(e, t) {
  const n = ad(e, t), i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
const fd = function(e, t) {
  return {
    x(n) {
      return e + e + t - n;
    },
    setWidth(n) {
      t = n;
    },
    textAlign(n) {
      return n === "center" ? n : n === "right" ? "left" : "right";
    },
    xPlus(n, i) {
      return n - i;
    },
    leftForLtr(n, i) {
      return n - i;
    }
  };
}, _d = function() {
  return {
    x(e) {
      return e;
    },
    setWidth(e) {
    },
    textAlign(e) {
      return e;
    },
    xPlus(e, t) {
      return e + t;
    },
    leftForLtr(e, t) {
      return e;
    }
  };
};
function We(e, t, n) {
  return e ? fd(t, n) : _d();
}
function hr(e, t) {
  let n, i;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, i = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = i);
}
function dr(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class gd {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, n, i, s) {
    const o = n.listeners[s], a = n.duration;
    o.forEach((r) => r({
      chart: t,
      initial: n.initial,
      numSteps: a,
      currentStep: Math.min(i - n.start, a)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Za.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length)
        return;
      const o = i.items;
      let a = o.length - 1, r = !1, l;
      for (; a >= 0; --a)
        l = o[a], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
      r && (s.draw(), this._notify(s, i, t, "progress")), o.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), n += o.length;
    }), this._lastDate = t, n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let i = n.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, n.set(t, i)), i;
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n && (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((i, s) => Math.max(i, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length)
      return;
    const i = n.items;
    let s = i.length - 1;
    for (; s >= 0; --s)
      i[s].cancel();
    n.items = [], this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Zt = /* @__PURE__ */ new gd();
const Mo = "transparent", md = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const i = wo(e || Mo), s = i.valid && wo(t || Mo);
    return s && s.valid ? s.mix(i, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class pd {
  constructor(t, n, i, s) {
    const o = n[i];
    s = Rn([
      t.to,
      s,
      o,
      t.from
    ]);
    const a = Rn([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || md[t.type || typeof a], this._easing = hn[t.easing] || hn.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = i, this._from = a, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, a = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Rn([
        t.to,
        n,
        s,
        t.from
      ]), this._from = Rn([
        t.from,
        s,
        n
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const n = t - this._start, i = this._duration, s = this._prop, o = this._from, a = this._loop, r = this._to;
    let l;
    if (this._active = o !== r && (a || n < i), !this._active) {
      this._target[s] = r, this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[s] = o;
      return;
    }
    l = n / i % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, r, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      t.push({
        res: n,
        rej: i
      });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej", i = this._promises || [];
    for (let s = 0; s < i.length; s++)
      i[s][n]();
  }
}
class fr {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!X(t))
      return;
    const n = Object.keys(lt.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!X(o))
        return;
      const a = {};
      for (const r of n)
        a[r] = o[r];
      (mt(o.properties) && o.properties || [
        s
      ]).forEach((r) => {
        (r === s || !i.has(r)) && i.set(r, a);
      });
    });
  }
  _animateOptions(t, n) {
    const i = n.options, s = yd(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && bd(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), o;
  }
  _createAnimations(t, n) {
    const i = this._properties, s = [], o = t.$animations || (t.$animations = {}), a = Object.keys(n), r = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const c = a[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, n));
        continue;
      }
      const u = n[c];
      let h = o[c];
      const d = i.get(c);
      if (h)
        if (d && h.active()) {
          h.update(d, u, r);
          continue;
        } else
          h.cancel();
      if (!d || !d.duration) {
        t[c] = u;
        continue;
      }
      o[c] = h = new pd(d, t, c, u), s.push(h);
    }
    return s;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const i = this._createAnimations(t, n);
    if (i.length)
      return Zt.add(this._chart, i), !0;
  }
}
function bd(e, t) {
  const n = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = e[i[s]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function yd(e, t) {
  if (!t)
    return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return n.$shared && (e.options = n = Object.assign({}, n, {
    $shared: !1,
    $animations: {}
  })), n;
}
function Io(e, t) {
  const n = e && e.options || {}, i = n.reverse, s = n.min === void 0 ? t : 0, o = n.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function vd(e, t, n) {
  if (n === !1)
    return !1;
  const i = Io(e, n), s = Io(t, n);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function xd(e) {
  let t, n, i, s;
  return X(e) ? (t = e.top, n = e.right, i = e.bottom, s = e.left) : t = n = i = s = e, {
    top: t,
    right: n,
    bottom: i,
    left: s,
    disabled: e === !1
  };
}
function _r(e, t) {
  const n = [], i = e._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    n.push(i[s].index);
  return n;
}
function Po(e, t, n, i = {}) {
  const s = e.keys, o = i.mode === "single";
  let a, r, l, c;
  if (t === null)
    return;
  let u = !1;
  for (a = 0, r = s.length; a < r; ++a) {
    if (l = +s[a], l === n) {
      if (u = !0, i.all)
        continue;
      break;
    }
    c = e.values[l], ie(c) && (o || t === 0 || vo(t) === vo(c)) && (t += c);
  }
  return !u && !i.all ? 0 : t;
}
function Ed(e, t) {
  const { iScale: n, vScale: i } = t, s = n.axis === "x" ? "x" : "y", o = i.axis === "x" ? "x" : "y", a = Object.keys(e), r = new Array(a.length);
  let l, c, u;
  for (l = 0, c = a.length; l < c; ++l)
    u = a[l], r[l] = {
      [s]: u,
      [o]: e[u]
    };
  return r;
}
function Li(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function kd(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function wd(e) {
  const { min: t, max: n, minDefined: i, maxDefined: s } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? n : Number.POSITIVE_INFINITY
  };
}
function Od(e, t, n) {
  const i = e[t] || (e[t] = {});
  return i[n] || (i[n] = {});
}
function Ro(e, t, n, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = e[s.index];
    if (n && o > 0 || !n && o < 0)
      return s.index;
  }
  return null;
}
function Fo(e, t) {
  const { chart: n, _cachedMeta: i } = e, s = n._stacks || (n._stacks = {}), { iScale: o, vScale: a, index: r } = i, l = o.axis, c = a.axis, u = kd(o, a, i), h = t.length;
  let d;
  for (let f = 0; f < h; ++f) {
    const v = t[f], { [l]: b, [c]: m } = v, _ = v._stacks || (v._stacks = {});
    d = _[c] = Od(s, u, b), d[r] = m, d._top = Ro(d, a, !0, i.type), d._bottom = Ro(d, a, !1, i.type);
    const p = d._visualValues || (d._visualValues = {});
    p[r] = m;
  }
}
function Ni(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((i) => n[i].axis === t).shift();
}
function Td(e, t) {
  return Xe(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Sd(e, t, n) {
  return Xe(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Ze(e, t) {
  const n = e.controller.index, i = e.vScale && e.vScale.axis;
  if (i) {
    t = t || e._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][n] === void 0)
        return;
      delete o[i][n], o[i]._visualValues !== void 0 && o[i]._visualValues[n] !== void 0 && delete o[i]._visualValues[n];
    }
  }
}
const Ci = (e) => e === "reset" || e === "none", Vo = (e, t) => t ? e : Object.assign({}, e), Ad = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: _r(n, !0),
  values: null
};
class _n {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Li(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ze(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, i = this.getDataset(), s = (h, d, f, v) => h === "x" ? d : h === "r" ? v : f, o = n.xAxisID = Q(i.xAxisID, Ni(t, "x")), a = n.yAxisID = Q(i.yAxisID, Ni(t, "y")), r = n.rAxisID = Q(i.rAxisID, Ni(t, "r")), l = n.indexAxis, c = n.iAxisID = s(l, o, a, r), u = n.vAxisID = s(l, a, o, r);
    n.xScale = this.getScaleForId(o), n.yScale = this.getScaleForId(a), n.rScale = this.getScaleForId(r), n.iScale = this.getScaleForId(c), n.vScale = this.getScaleForId(u);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && xo(this._data, this), t._stacked && Ze(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), i = this._data;
    if (X(n)) {
      const s = this._cachedMeta;
      this._data = Ed(n, s);
    } else if (i !== n) {
      if (i) {
        xo(i, this);
        const s = this._cachedMeta;
        Ze(s), s._parsed = [];
      }
      n && Object.isExtensible(n) && Ah(n, this), this._syncList = [], this._data = n;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta, i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = n._stacked;
    n._stacked = Li(n.vScale, n), n.stack !== i.stack && (s = !0, Ze(n), n.stack = i.stack), this._resyncElements(t), (s || o !== n._stacked) && (Fo(this, n._parsed), n._stacked = Li(n.vScale, n));
  }
  configure() {
    const t = this.chart.config, n = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), n, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: a } = i, r = o.axis;
    let l = t === 0 && n === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], u, h, d;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, d = s;
    else {
      mt(s[t]) ? d = this.parseArrayData(i, s, t, n) : X(s[t]) ? d = this.parseObjectData(i, s, t, n) : d = this.parsePrimitiveData(i, s, t, n);
      const f = () => h[r] === null || c && h[r] < c[r];
      for (u = 0; u < n; ++u)
        i._parsed[u + t] = h = d[u], l && (f() && (l = !1), c = h);
      i._sorted = l;
    }
    a && Fo(this, d);
  }
  parsePrimitiveData(t, n, i, s) {
    const { iScale: o, vScale: a } = t, r = o.axis, l = a.axis, c = o.getLabels(), u = o === a, h = new Array(s);
    let d, f, v;
    for (d = 0, f = s; d < f; ++d)
      v = d + i, h[d] = {
        [r]: u || o.parse(c[v], v),
        [l]: a.parse(n[v], v)
      };
    return h;
  }
  parseArrayData(t, n, i, s) {
    const { xScale: o, yScale: a } = t, r = new Array(s);
    let l, c, u, h;
    for (l = 0, c = s; l < c; ++l)
      u = l + i, h = n[u], r[l] = {
        x: o.parse(h[0], u),
        y: a.parse(h[1], u)
      };
    return r;
  }
  parseObjectData(t, n, i, s) {
    const { xScale: o, yScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let u, h, d, f;
    for (u = 0, h = s; u < h; ++u)
      d = u + i, f = n[d], c[u] = {
        x: o.parse(wn(f, r), d),
        y: a.parse(wn(f, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, i) {
    const s = this.chart, o = this._cachedMeta, a = n[t.axis], r = {
      keys: _r(s, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return Po(r, a, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, n, i, s) {
    const o = i[n.axis];
    let a = o === null ? NaN : o;
    const r = s && i._stacks[n.axis];
    s && r && (s.values = r, a = Po(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
  }
  getMinMax(t, n) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, a = s.length, r = this._getOtherScale(t), l = Ad(n, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: h } = wd(r);
    let d, f;
    function v() {
      f = s[d];
      const b = f[r.axis];
      return !ie(f[t.axis]) || u > b || h < b;
    }
    for (d = 0; d < a && !(!v() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d)
      ;
    if (o) {
      for (d = a - 1; d >= 0; --d)
        if (!v()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed, i = [];
    let s, o, a;
    for (s = 0, o = n.length; s < o; ++s)
      a = n[s][t.axis], ie(a) && i.push(a);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = n.iScale, s = n.vScale, o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"), n._clip = xd(Q(this.options.clip, vd(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, n = this.chart, i = this._cachedMeta, s = i.data || [], o = n.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || s.length - r, c = this.options.drawActiveElementsOnTop;
    let u;
    for (i.dataset && i.dataset.draw(t, o, r, l), u = r; u < r + l; ++u) {
      const h = s[u];
      h.hidden || (h.active && c ? a.push(h) : h.draw(t, o));
    }
    for (u = 0; u < a.length; ++u)
      a[u].draw(t, o);
  }
  getStyle(t, n) {
    const i = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, n, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      o = a.$context || (a.$context = Sd(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Td(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!n, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", i) {
    const s = n === "active", o = this._cachedDataOpts, a = t + "-" + n, r = o[a], l = this.enableOptionSharing && Zn(i);
    if (r)
      return Vo(r, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), h = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), f = Object.keys(lt.elements[t]), v = () => this.getContext(i, s, n), b = c.resolveNamedOptions(d, f, v, h);
    return b.$shared && (b.$shared = l, o[a] = Object.freeze(Vo(b, l))), b;
  }
  _resolveAnimations(t, n, i) {
    const s = this.chart, o = this._cachedDataOpts, a = `animation-${n}`, r = o[a];
    if (r)
      return r;
    let l;
    if (s.options.animation !== !1) {
      const u = this.chart.config, h = u.datasetAnimationScopeKeys(this._type, n), d = u.getOptionScopes(this.getDataset(), h);
      l = u.createResolver(d, this.getContext(t, i, n));
    }
    const c = new fr(s, l && l.animations);
    return l && l._cacheable && (o[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || Ci(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n), s = this._sharedOptions, o = this.getSharedOptions(i), a = this.includeOptions(n, o) || o !== s;
    return this.updateSharedOptions(o, n, i), {
      sharedOptions: o,
      includeOptions: a
    };
  }
  updateElement(t, n, i, s) {
    Ci(s) ? Object.assign(t, i) : this._resolveAnimations(n, s).update(t, i);
  }
  updateSharedOptions(t, n, i) {
    t && !Ci(n) && this._resolveAnimations(void 0, n).update(t, i);
  }
  _setStyle(t, n, i, s) {
    t.active = s;
    const o = this.getStyle(n, s);
    this._resolveAnimations(n, i, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data, i = this._cachedMeta.data;
    for (const [r, l, c] of this._syncList)
      this[r](l, c);
    this._syncList = [];
    const s = i.length, o = n.length, a = Math.min(o, s);
    a && this.parse(0, a), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, n, i = !0) {
    const s = this._cachedMeta, o = s.data, a = t + n;
    let r;
    const l = (c) => {
      for (c.length += n, r = c.length - 1; r >= a; r--)
        c[r] = c[r - n];
    };
    for (l(o), r = t; r < a; ++r)
      o[r] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, n), i && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, i, s) {
  }
  _removeElements(t, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, n);
      i._stacked && Ze(i, s);
    }
    i.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [n, i, s] = t;
      this[n](i, s);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, n) {
    n && this._sync([
      "_removeElements",
      t,
      n
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      t,
      i
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
j(_n, "defaults", {}), j(_n, "datasetElementType", null), j(_n, "dataElementType", null);
function Ld(e, t, n) {
  let i = 1, s = 1, o = 0, a = 0;
  if (t < ut) {
    const r = e, l = r + t, c = Math.cos(r), u = Math.sin(r), h = Math.cos(l), d = Math.sin(l), f = (k, x, O) => ni(k, r, l, !0) ? 1 : Math.max(x, x * n, O, O * n), v = (k, x, O) => ni(k, r, l, !0) ? -1 : Math.min(x, x * n, O, O * n), b = f(0, c, h), m = f(dt, u, d), _ = v(_t, c, h), p = v(_t + dt, u, d);
    i = (b - _) / 2, s = (m - p) / 2, o = -(b + _) / 2, a = -(m + p) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: a
  };
}
class rn extends _n {
  constructor(t, n) {
    super(t, n), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, n) {
    const i = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = i;
    else {
      let o = (l) => +i[l];
      if (X(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +wn(i[c], l);
      }
      let a, r;
      for (a = t, r = t + n; a < r; ++a)
        s._parsed[a] = o(a);
    }
  }
  _getRotation() {
    return we(this.options.rotation - 90);
  }
  _getCircumference() {
    return we(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ut, n = -ut;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller, o = s._getRotation(), a = s._getCircumference();
        t = Math.min(t, o), n = Math.max(n, o + a);
      }
    return {
      rotation: t,
      circumference: n - t
    };
  }
  update(t) {
    const n = this.chart, { chartArea: i } = n, s = this._cachedMeta, o = s.data, a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, r = Math.max((Math.min(i.width, i.height) - a) / 2, 0), l = Math.min(gh(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: h } = this._getRotationExtents(), { ratioX: d, ratioY: f, offsetX: v, offsetY: b } = Ld(h, u, l), m = (i.width - a) / d, _ = (i.height - a) / f, p = Math.max(Math.min(m, _) / 2, 0), k = Ga(this.options.radius, p), x = Math.max(k * l, 0), O = (k - x) / this._getVisibleDatasetWeightTotal();
    this.offsetX = v * k, this.offsetY = b * k, s.total = this.calculateTotal(), this.outerRadius = k - O * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - O * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, n) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return n && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / ut);
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, u = (r.left + r.right) / 2, h = (r.top + r.bottom) / 2, d = o && c.animateScale, f = d ? 0 : this.innerRadius, v = d ? 0 : this.outerRadius, { sharedOptions: b, includeOptions: m } = this._getSharedOptions(n, s);
    let _ = this._getRotation(), p;
    for (p = 0; p < n; ++p)
      _ += this._circumference(p, o);
    for (p = n; p < n + i; ++p) {
      const k = this._circumference(p, o), x = t[p], O = {
        x: u + this.offsetX,
        y: h + this.offsetY,
        startAngle: _,
        endAngle: _ + k,
        circumference: k,
        outerRadius: v,
        innerRadius: f
      };
      m && (O.options = b || this.resolveDataElementOptions(p, x.active ? "active" : s)), _ += k, this.updateElement(x, p, O, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, n = t.data;
    let i = 0, s;
    for (s = 0; s < n.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !n[s].hidden && (i += Math.abs(o));
    }
    return i;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? ut * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = ir(n._parsed[t], i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const i = this.chart;
    let s, o, a, r, l;
    if (!t) {
      for (s = 0, o = i.data.datasets.length; s < o; ++s)
        if (i.isDatasetVisible(s)) {
          a = i.getDatasetMeta(s), t = a.data, r = a.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = r.resolveDataElementOptions(s), l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i);
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(Q(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
j(rn, "id", "doughnut"), j(rn, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), j(rn, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), j(rn, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: i, color: s } } = t.legend.options;
            return n.labels.map((o, a) => {
              const l = t.getDatasetMeta(0).controller.getStyle(a);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: s,
                lineWidth: l.borderWidth,
                pointStyle: i,
                hidden: !t.getDataVisibility(a),
                index: a
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, i) {
        i.chart.toggleDataVisibility(n.index), i.chart.update();
      }
    }
  }
});
function xe() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Os {
  constructor(t) {
    j(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Os.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return xe();
  }
  parse() {
    return xe();
  }
  format() {
    return xe();
  }
  add() {
    return xe();
  }
  diff() {
    return xe();
  }
  startOf() {
    return xe();
  }
  endOf() {
    return xe();
  }
}
var Nd = {
  _date: Os
};
function Cd(e, t, n, i) {
  const { controller: s, data: o, _sorted: a } = e, r = s._cachedMeta.iScale;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    const l = r._reversePixels ? Th : Gi;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0], u = typeof c.getRange == "function" && c.getRange(t);
        if (u) {
          const h = l(o, t, n - u), d = l(o, t, n + u);
          return {
            lo: h.lo,
            hi: d.hi
          };
        }
      }
    } else return l(o, t, n);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Sn(e, t, n, i, s) {
  const o = e.getSortedVisibleDatasetMetas(), a = n[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: c, data: u } = o[r], { lo: h, hi: d } = Cd(o[r], t, a, s);
    for (let f = h; f <= d; ++f) {
      const v = u[f];
      v.skip || i(v, c, f);
    }
  }
}
function Dd(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, a = n ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function Di(e, t, n, i, s) {
  const o = [];
  return !s && !e.isPointInArea(t) || Sn(e, n, t, function(r, l, c) {
    !s && !ar(r, e.chartArea, 0) || r.inRange(t.x, t.y, i) && o.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Md(e, t, n, i) {
  let s = [];
  function o(a, r, l) {
    const { startAngle: c, endAngle: u } = a.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: h } = Qa(a, {
      x: t.x,
      y: t.y
    });
    ni(h, c, u) && s.push({
      element: a,
      datasetIndex: r,
      index: l
    });
  }
  return Sn(e, n, t, o), s;
}
function Id(e, t, n, i, s, o) {
  let a = [];
  const r = Dd(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, h, d) {
    const f = u.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const v = u.getCenterPoint(s);
    if (!(!!o || e.isPointInArea(v)) && !f)
      return;
    const m = r(t, v);
    m < l ? (a = [
      {
        element: u,
        datasetIndex: h,
        index: d
      }
    ], l = m) : m === l && a.push({
      element: u,
      datasetIndex: h,
      index: d
    });
  }
  return Sn(e, n, t, c), a;
}
function Mi(e, t, n, i, s, o) {
  return !o && !e.isPointInArea(t) ? [] : n === "r" && !i ? Md(e, t, n, s) : Id(e, t, n, i, s, o);
}
function $o(e, t, n, i, s) {
  const o = [], a = n === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Sn(e, n, t, (l, c, u) => {
    l[a] && l[a](t[n], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: u
    }), r = r || l.inRange(t.x, t.y, s));
  }), i && !r ? [] : o;
}
var Pd = {
  evaluateInteractionItems: Sn,
  modes: {
    index(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "x", a = n.includeInvisible || !1, r = n.intersect ? Di(e, s, o, i, a) : Mi(e, s, o, !1, i, a), l = [];
      return r.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = r[0].index, h = c.data[u];
        h && !h.skip && l.push({
          element: h,
          datasetIndex: c.index,
          index: u
        });
      }), l) : [];
    },
    dataset(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "xy", a = n.includeInvisible || !1;
      let r = n.intersect ? Di(e, s, o, i, a) : Mi(e, s, o, !1, i, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex, c = e.getDatasetMeta(l).data;
        r = [];
        for (let u = 0; u < c.length; ++u)
          r.push({
            element: c[u],
            datasetIndex: l,
            index: u
          });
      }
      return r;
    },
    point(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "xy", a = n.includeInvisible || !1;
      return Di(e, s, o, i, a);
    },
    nearest(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "xy", a = n.includeInvisible || !1;
      return Mi(e, s, o, n.intersect, i, a);
    },
    x(e, t, n, i) {
      const s = Ee(t, e);
      return $o(e, s, "x", n.intersect, i);
    },
    y(e, t, n, i) {
      const s = Ee(t, e);
      return $o(e, s, "y", n.intersect, i);
    }
  }
};
const gr = [
  "left",
  "top",
  "right",
  "bottom"
];
function tn(e, t) {
  return e.filter((n) => n.pos === t);
}
function jo(e, t) {
  return e.filter((n) => gr.indexOf(n.pos) === -1 && n.box.axis === t);
}
function en(e, t) {
  return e.sort((n, i) => {
    const s = t ? i : n, o = t ? n : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Rd(e) {
  const t = [];
  let n, i, s, o, a, r;
  for (n = 0, i = (e || []).length; n < i; ++n)
    s = e[n], { position: o, options: { stack: a, stackWeight: r = 1 } } = s, t.push({
      index: n,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: a && o + a,
      stackWeight: r
    });
  return t;
}
function Fd(e) {
  const t = {};
  for (const n of e) {
    const { stack: i, pos: s, stackWeight: o } = n;
    if (!i || !gr.includes(s))
      continue;
    const a = t[i] || (t[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    a.count++, a.weight += o;
  }
  return t;
}
function Vd(e, t) {
  const n = Fd(e), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, a, r;
  for (o = 0, a = e.length; o < a; ++o) {
    r = e[o];
    const { fullSize: l } = r.box, c = n[r.stack], u = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = u ? u * i : l && t.availableWidth, r.height = s) : (r.width = i, r.height = u ? u * s : l && t.availableHeight);
  }
  return n;
}
function $d(e) {
  const t = Rd(e), n = en(t.filter((c) => c.box.fullSize), !0), i = en(tn(t, "left"), !0), s = en(tn(t, "right")), o = en(tn(t, "top"), !0), a = en(tn(t, "bottom")), r = jo(t, "x"), l = jo(t, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(a).concat(r),
    chartArea: tn(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(a).concat(r)
  };
}
function Wo(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function mr(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function jd(e, t, n, i) {
  const { pos: s, box: o } = n, a = e.maxPadding;
  if (!X(s)) {
    n.size && (e[s] -= n.size);
    const h = i[n.stack] || {
      size: 0,
      count: 1
    };
    h.size = Math.max(h.size, n.horizontal ? o.height : o.width), n.size = h.size / h.count, e[s] += n.size;
  }
  o.getPadding && mr(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - Wo(a, e, "left", "right")), l = Math.max(0, t.outerHeight - Wo(a, e, "top", "bottom")), c = r !== e.w, u = l !== e.h;
  return e.w = r, e.h = l, n.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function Wd(e) {
  const t = e.maxPadding;
  function n(i) {
    const s = Math.max(t[i] - e[i], 0);
    return e[i] += s, s;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function zd(e, t) {
  const n = t.maxPadding;
  function i(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((a) => {
      o[a] = Math.max(t[a], n[a]);
    }), o;
  }
  return i(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function ln(e, t, n, i) {
  const s = [];
  let o, a, r, l, c, u;
  for (o = 0, a = e.length, c = 0; o < a; ++o) {
    r = e[o], l = r.box, l.update(r.width || t.w, r.height || t.h, zd(r.horizontal, t));
    const { same: h, other: d } = jd(t, n, r, i);
    c |= h && s.length, u = u || d, l.fullSize || s.push(r);
  }
  return c && ln(s, t, n, i) || u;
}
function Vn(e, t, n, i, s) {
  e.top = n, e.left = t, e.right = t + i, e.bottom = n + s, e.width = i, e.height = s;
}
function zo(e, t, n, i) {
  const s = n.padding;
  let { x: o, y: a } = t;
  for (const r of e) {
    const l = r.box, c = i[r.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, u = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const h = t.w * u, d = c.size || l.height;
      Zn(c.start) && (a = c.start), l.fullSize ? Vn(l, s.left, a, n.outerWidth - s.right - s.left, d) : Vn(l, t.left + c.placed, a, h, d), c.start = a, c.placed += h, a = l.bottom;
    } else {
      const h = t.h * u, d = c.size || l.width;
      Zn(c.start) && (o = c.start), l.fullSize ? Vn(l, o, s.top, d, n.outerHeight - s.bottom - s.top) : Vn(l, o, t.top + c.placed, d, h), c.start = o, c.placed += h, o = l.right;
    }
  }
  t.x = o, t.y = a;
}
var ce = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(n) {
            t.draw(n);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight;
  },
  update(e, t, n, i) {
    if (!e)
      return;
    const s = Vt(e.options.layout.padding), o = Math.max(t - s.width, 0), a = Math.max(n - s.height, 0), r = $d(e.boxes), l = r.vertical, c = r.horizontal;
    q(e.boxes, (b) => {
      typeof b.beforeLayout == "function" && b.beforeLayout();
    });
    const u = l.reduce((b, m) => m.box.options && m.box.options.display === !1 ? b : b + 1, 0) || 1, h = Object.freeze({
      outerWidth: t,
      outerHeight: n,
      padding: s,
      availableWidth: o,
      availableHeight: a,
      vBoxMaxWidth: o / 2 / u,
      hBoxMaxHeight: a / 2
    }), d = Object.assign({}, s);
    mr(d, Vt(i));
    const f = Object.assign({
      maxPadding: d,
      w: o,
      h: a,
      x: s.left,
      y: s.top
    }, s), v = Vd(l.concat(c), h);
    ln(r.fullSize, f, h, v), ln(l, f, h, v), ln(c, f, h, v) && ln(l, f, h, v), Wd(f), zo(r.leftAndTop, f, h, v), f.x += f.w, f.y += f.h, zo(r.rightAndBottom, f, h, v), e.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, q(r.chartArea, (b) => {
      const m = b.box;
      Object.assign(m, e.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class pr {
  acquireContext(t, n) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, i) {
  }
  removeEventListener(t, n, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, i, s) {
    return n = Math.max(0, n || t.width), i = i || t.height, {
      width: n,
      height: Math.max(0, s ? Math.floor(n / s) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Hd extends pr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Yn = "$chartjs", Ud = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Ho = (e) => e === null || e === "";
function Bd(e, t) {
  const n = e.style, i = e.getAttribute("height"), s = e.getAttribute("width");
  if (e[Yn] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Ho(s)) {
    const o = Do(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Ho(i))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = Do(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const br = dd ? {
  passive: !0
} : !1;
function Yd(e, t, n) {
  e && e.addEventListener(t, n, br);
}
function Xd(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, br);
}
function Kd(e, t) {
  const n = Ud[e.type] || e.type, { x: i, y: s } = Ee(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function oi(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function Gd(e, t, n) {
  const i = e.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || oi(r.addedNodes, i), a = a && !oi(r.removedNodes, i);
    a && n();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function qd(e, t, n) {
  const i = e.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || oi(r.removedNodes, i), a = a && !oi(r.addedNodes, i);
    a && n();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const On = /* @__PURE__ */ new Map();
let Uo = 0;
function yr() {
  const e = window.devicePixelRatio;
  e !== Uo && (Uo = e, On.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function Qd(e, t) {
  On.size || window.addEventListener("resize", yr), On.set(e, t);
}
function Jd(e) {
  On.delete(e), On.size || window.removeEventListener("resize", yr);
}
function Zd(e, t, n) {
  const i = e.canvas, s = i && ws(i);
  if (!s)
    return;
  const o = tr((r, l) => {
    const c = s.clientWidth;
    n(r, l), c < s.clientWidth && n();
  }, window), a = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || o(c, u);
  });
  return a.observe(s), Qd(e, o), a;
}
function Ii(e, t, n) {
  n && n.disconnect(), t === "resize" && Jd(e);
}
function tf(e, t, n) {
  const i = e.canvas, s = tr((o) => {
    e.ctx !== null && n(Kd(o, e));
  }, e);
  return Yd(i, t, s), s;
}
class ef extends pr {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (Bd(t, n), i) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Yn])
      return !1;
    const i = n[Yn].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const a = i[o];
      At(a) ? n.removeAttribute(o) : n.setAttribute(o, a);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      n.style[o] = s[o];
    }), n.width = n.width, delete n[Yn], !0;
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n);
    const s = t.$proxies || (t.$proxies = {}), a = {
      attach: Gd,
      detach: qd,
      resize: Zd
    }[n] || tf;
    s[n] = a(t, n, i);
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}), s = i[n];
    if (!s)
      return;
    ({
      attach: Ii,
      detach: Ii,
      resize: Ii
    }[n] || Xd)(t, n, s), i[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, i, s) {
    return hd(t, n, i, s);
  }
  isAttached(t) {
    const n = t && ws(t);
    return !!(n && n.isConnected);
  }
}
function nf(e) {
  return !ks() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? Hd : ef;
}
class Ce {
  constructor() {
    j(this, "x");
    j(this, "y");
    j(this, "active", !1);
    j(this, "options");
    j(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: i
    };
  }
  hasValue() {
    return ei(this.x) && ei(this.y);
  }
  getProps(t, n) {
    const i = this.$animations;
    if (!n || !i)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
    }), s;
  }
}
j(Ce, "defaults", {}), j(Ce, "defaultRoutes");
function sf(e, t) {
  const n = e.options.ticks, i = of(e), s = Math.min(n.maxTicksLimit || i, i), o = n.major.enabled ? rf(t) : [], a = o.length, r = o[0], l = o[a - 1], c = [];
  if (a > s)
    return lf(t, c, o, a / s), c;
  const u = af(o, t, s);
  if (a > 0) {
    let h, d;
    const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for ($n(t, c, u, At(f) ? 0 : r - f, r), h = 0, d = a - 1; h < d; h++)
      $n(t, c, u, o[h], o[h + 1]);
    return $n(t, c, u, l, At(f) ? t.length : l + f), c;
  }
  return $n(t, c, u), c;
}
function of(e) {
  const t = e.options.offset, n = e._tickSize(), i = e._length / n + (t ? 0 : 1), s = e._maxLength / n;
  return Math.floor(Math.min(i, s));
}
function af(e, t, n) {
  const i = cf(e), s = t.length / n;
  if (!i)
    return Math.max(s, 1);
  const o = Eh(i);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function rf(e) {
  const t = [];
  let n, i;
  for (n = 0, i = e.length; n < i; n++)
    e[n].major && t.push(n);
  return t;
}
function lf(e, t, n, i) {
  let s = 0, o = n[0], a;
  for (i = Math.ceil(i), a = 0; a < e.length; a++)
    a === o && (t.push(e[a]), s++, o = n[s * i]);
}
function $n(e, t, n, i, s) {
  const o = Q(i, 0), a = Math.min(Q(s, e.length), e.length);
  let r = 0, l, c, u;
  for (n = Math.ceil(n), s && (l = s - i, n = l / Math.floor(l / n)), u = o; u < 0; )
    r++, u = Math.round(o + r * n);
  for (c = Math.max(o, 0); c < a; c++)
    c === u && (t.push(e[c]), r++, u = Math.round(o + r * n));
}
function cf(e) {
  const t = e.length;
  let n, i;
  if (t < 2)
    return !1;
  for (i = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== i)
      return !1;
  return i;
}
const uf = (e) => e === "left" ? "right" : e === "right" ? "left" : e, Bo = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n, Yo = (e, t) => Math.min(t || e, e);
function Xo(e, t) {
  const n = [], i = e.length / t, s = e.length;
  let o = 0;
  for (; o < s; o += i)
    n.push(e[Math.floor(o)]);
  return n;
}
function hf(e, t, n) {
  const i = e.ticks.length, s = Math.min(t, i - 1), o = e._startPixel, a = e._endPixel, r = 1e-6;
  let l = e.getPixelForTick(s), c;
  if (!(n && (i === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - r || l > a + r)))
    return l;
}
function df(e, t) {
  q(e, (n) => {
    const i = n.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete n.data[i[o]];
      i.splice(0, s);
    }
  });
}
function nn(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Ko(e, t) {
  if (!e.display)
    return 0;
  const n = St(e.font, t), i = Vt(e.padding);
  return (mt(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function ff(e, t) {
  return Xe(e, {
    scale: t,
    type: "scale"
  });
}
function _f(e, t, n) {
  return Xe(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function gf(e, t, n) {
  let i = er(e);
  return (n && t !== "right" || !n && t === "right") && (i = uf(i)), i;
}
function mf(e, t, n, i) {
  const { top: s, left: o, bottom: a, right: r, chart: l } = e, { chartArea: c, scales: u } = l;
  let h = 0, d, f, v;
  const b = a - s, m = r - o;
  if (e.isHorizontal()) {
    if (f = Lt(i, o, r), X(n)) {
      const _ = Object.keys(n)[0], p = n[_];
      v = u[_].getPixelForValue(p) + b - t;
    } else n === "center" ? v = (c.bottom + c.top) / 2 + b - t : v = Bo(e, n, t);
    d = r - o;
  } else {
    if (X(n)) {
      const _ = Object.keys(n)[0], p = n[_];
      f = u[_].getPixelForValue(p) - m + t;
    } else n === "center" ? f = (c.left + c.right) / 2 - m + t : f = Bo(e, n, t);
    v = Lt(i, a, s), h = n === "left" ? -dt : dt;
  }
  return {
    titleX: f,
    titleY: v,
    maxWidth: d,
    rotation: h
  };
}
class gi extends Ce {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: s } = this;
    return t = Ht(t, Number.POSITIVE_INFINITY), n = Ht(n, Number.NEGATIVE_INFINITY), i = Ht(i, Number.POSITIVE_INFINITY), s = Ht(s, Number.NEGATIVE_INFINITY), {
      min: Ht(t, i),
      max: Ht(n, s),
      minDefined: ie(t),
      maxDefined: ie(n)
    };
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(), a;
    if (s && o)
      return {
        min: n,
        max: i
      };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      a = r[l].controller.getMinMax(this, t), s || (n = Math.min(n, a.min)), o || (i = Math.max(i, a.max));
    return n = o && n > i ? i : n, i = s && n > i ? n : i, {
      min: Ht(n, Ht(i, n)),
      max: Ht(i, Ht(n, i))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    nt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, n, i) {
    const { beginAtZero: s, grace: o, ticks: a } = this.options, r = a.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = qh(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? Xo(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = sf(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, i;
    this.isHorizontal() ? (n = this.left, i = this.right) : (n = this.top, i = this.bottom, t = !t), this._startPixel = n, this._endPixel = i, this._reversePixels = t, this._length = i - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    nt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    nt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    nt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), nt(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    nt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = nt(n.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    nt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    nt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, n = t.ticks, i = Yo(this.ticks.length, t.ticks.maxTicksLimit), s = n.minRotation || 0, o = n.maxRotation;
    let a = s, r, l, c;
    if (!this._isVisible() || !n.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const u = this._getLabelSizes(), h = u.widest.width, d = u.highest.height, f = It(this.chart.width - h, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / i : f / (i - 1), h + 6 > r && (r = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - nn(t.grid) - n.padding - Ko(t.title, this.chart.options.font), c = Math.sqrt(h * h + d * d), a = kh(Math.min(Math.asin(It((u.highest.height + 6) / r, -1, 1)), Math.asin(It(l / c, -1, 1)) - Math.asin(It(d / c, -1, 1)))), a = Math.max(s, Math.min(o, a))), this.labelRotation = a;
  }
  afterCalculateLabelRotation() {
    nt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    nt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: i, title: s, grid: o } } = this, a = this._isVisible(), r = this.isHorizontal();
    if (a) {
      const l = Ko(s, n.options.font);
      if (r ? (t.width = this.maxWidth, t.height = nn(o) + l) : (t.height = this.maxHeight, t.width = nn(o) + l), i.display && this.ticks.length) {
        const { first: c, last: u, widest: h, highest: d } = this._getLabelSizes(), f = i.padding * 2, v = we(this.labelRotation), b = Math.cos(v), m = Math.sin(v);
        if (r) {
          const _ = i.mirror ? 0 : m * h.width + b * d.height;
          t.height = Math.min(this.maxHeight, t.height + _ + f);
        } else {
          const _ = i.mirror ? 0 : b * h.width + m * d.height;
          t.width = Math.min(this.maxWidth, t.width + _ + f);
        }
        this._calculatePadding(c, u, m, b);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, n, i, s) {
    const { ticks: { align: o, padding: a }, position: r } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, f = 0;
      l ? c ? (d = s * t.width, f = i * n.height) : (d = i * t.height, f = s * n.width) : o === "start" ? f = n.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, f = n.width / 2), this.paddingLeft = Math.max((d - u + a) * this.width / (this.width - u), 0), this.paddingRight = Math.max((f - h + a) * this.width / (this.width - h), 0);
    } else {
      let u = n.height / 2, h = t.height / 2;
      o === "start" ? (u = 0, h = t.height) : o === "end" && (u = n.height, h = 0), this.paddingTop = u + a, this.paddingBottom = h + a;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    nt(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, i;
    for (n = 0, i = t.length; n < i; n++)
      At(t[n].label) && (t.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = Xo(i, n)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, n, i) {
    const { ctx: s, _longestTextCache: o } = this, a = [], r = [], l = Math.floor(n / Yo(n, i));
    let c = 0, u = 0, h, d, f, v, b, m, _, p, k, x, O;
    for (h = 0; h < n; h += l) {
      if (v = t[h].label, b = this._resolveTickFontOptions(h), s.font = m = b.string, _ = o[m] = o[m] || {
        data: {},
        gc: []
      }, p = b.lineHeight, k = x = 0, !At(v) && !mt(v))
        k = To(s, _.data, _.gc, k, v), x = p;
      else if (mt(v))
        for (d = 0, f = v.length; d < f; ++d)
          O = v[d], !At(O) && !mt(O) && (k = To(s, _.data, _.gc, k, O), x += p);
      a.push(k), r.push(x), c = Math.max(k, c), u = Math.max(x, u);
    }
    df(o, n);
    const S = a.indexOf(c), w = r.indexOf(u), N = (M) => ({
      width: a[M] || 0,
      height: r[M] || 0
    });
    return {
      first: N(0),
      last: N(n - 1),
      widest: N(S),
      highest: N(w),
      widths: a,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return Oh(this._alignToPixels ? ve(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return i.$context || (i.$context = _f(this.getContext(), t, i));
    }
    return this.$context || (this.$context = ff(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, n = we(this.labelRotation), i = Math.abs(Math.cos(n)), s = Math.abs(Math.sin(n)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? l * i > r * s ? r / i : l / s : l * s < r * i ? l / i : r / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis, i = this.chart, s = this.options, { grid: o, position: a, border: r } = s, l = o.offset, c = this.isHorizontal(), h = this.ticks.length + (l ? 1 : 0), d = nn(o), f = [], v = r.setContext(this.getContext()), b = v.display ? v.width : 0, m = b / 2, _ = function(J) {
      return ve(i, J, b);
    };
    let p, k, x, O, S, w, N, M, P, V, R, it;
    if (a === "top")
      p = _(this.bottom), w = this.bottom - d, M = p - m, V = _(t.top) + m, it = t.bottom;
    else if (a === "bottom")
      p = _(this.top), V = t.top, it = _(t.bottom) - m, w = p + m, M = this.top + d;
    else if (a === "left")
      p = _(this.right), S = this.right - d, N = p - m, P = _(t.left) + m, R = t.right;
    else if (a === "right")
      p = _(this.left), P = t.left, R = _(t.right) - m, S = p + m, N = this.left + d;
    else if (n === "x") {
      if (a === "center")
        p = _((t.top + t.bottom) / 2 + 0.5);
      else if (X(a)) {
        const J = Object.keys(a)[0], et = a[J];
        p = _(this.chart.scales[J].getPixelForValue(et));
      }
      V = t.top, it = t.bottom, w = p + m, M = w + d;
    } else if (n === "y") {
      if (a === "center")
        p = _((t.left + t.right) / 2);
      else if (X(a)) {
        const J = Object.keys(a)[0], et = a[J];
        p = _(this.chart.scales[J].getPixelForValue(et));
      }
      S = p - m, N = S - d, P = t.left, R = t.right;
    }
    const gt = Q(s.ticks.maxTicksLimit, h), U = Math.max(1, Math.ceil(h / gt));
    for (k = 0; k < h; k += U) {
      const J = this.getContext(k), et = o.setContext(J), vt = r.setContext(J), ct = et.lineWidth, bt = et.color, $t = vt.dash || [], jt = vt.dashOffset, Gt = et.tickWidth, Rt = et.tickColor, qt = et.tickBorderDash || [], Wt = et.tickBorderDashOffset;
      x = hf(this, k, l), x !== void 0 && (O = ve(i, x, ct), c ? S = N = P = R = O : w = M = V = it = O, f.push({
        tx1: S,
        ty1: w,
        tx2: N,
        ty2: M,
        x1: P,
        y1: V,
        x2: R,
        y2: it,
        width: ct,
        color: bt,
        borderDash: $t,
        borderDashOffset: jt,
        tickWidth: Gt,
        tickColor: Rt,
        tickBorderDash: qt,
        tickBorderDashOffset: Wt
      }));
    }
    return this._ticksLength = h, this._borderValue = p, f;
  }
  _computeLabelItems(t) {
    const n = this.axis, i = this.options, { position: s, ticks: o } = i, a = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: u, mirror: h } = o, d = nn(i.grid), f = d + u, v = h ? -u : f, b = -we(this.labelRotation), m = [];
    let _, p, k, x, O, S, w, N, M, P, V, R, it = "middle";
    if (s === "top")
      S = this.bottom - v, w = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      S = this.top + v, w = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const U = this._getYAxisLabelAlignment(d);
      w = U.textAlign, O = U.x;
    } else if (s === "right") {
      const U = this._getYAxisLabelAlignment(d);
      w = U.textAlign, O = U.x;
    } else if (n === "x") {
      if (s === "center")
        S = (t.top + t.bottom) / 2 + f;
      else if (X(s)) {
        const U = Object.keys(s)[0], J = s[U];
        S = this.chart.scales[U].getPixelForValue(J) + f;
      }
      w = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (s === "center")
        O = (t.left + t.right) / 2 - f;
      else if (X(s)) {
        const U = Object.keys(s)[0], J = s[U];
        O = this.chart.scales[U].getPixelForValue(J);
      }
      w = this._getYAxisLabelAlignment(d).textAlign;
    }
    n === "y" && (l === "start" ? it = "top" : l === "end" && (it = "bottom"));
    const gt = this._getLabelSizes();
    for (_ = 0, p = r.length; _ < p; ++_) {
      k = r[_], x = k.label;
      const U = o.setContext(this.getContext(_));
      N = this.getPixelForTick(_) + o.labelOffset, M = this._resolveTickFontOptions(_), P = M.lineHeight, V = mt(x) ? x.length : 1;
      const J = V / 2, et = U.color, vt = U.textStrokeColor, ct = U.textStrokeWidth;
      let bt = w;
      a ? (O = N, w === "inner" && (_ === p - 1 ? bt = this.options.reverse ? "left" : "right" : _ === 0 ? bt = this.options.reverse ? "right" : "left" : bt = "center"), s === "top" ? c === "near" || b !== 0 ? R = -V * P + P / 2 : c === "center" ? R = -gt.highest.height / 2 - J * P + P : R = -gt.highest.height + P / 2 : c === "near" || b !== 0 ? R = P / 2 : c === "center" ? R = gt.highest.height / 2 - J * P : R = gt.highest.height - V * P, h && (R *= -1), b !== 0 && !U.showLabelBackdrop && (O += P / 2 * Math.sin(b))) : (S = N, R = (1 - V) * P / 2);
      let $t;
      if (U.showLabelBackdrop) {
        const jt = Vt(U.backdropPadding), Gt = gt.heights[_], Rt = gt.widths[_];
        let qt = R - jt.top, Wt = 0 - jt.left;
        switch (it) {
          case "middle":
            qt -= Gt / 2;
            break;
          case "bottom":
            qt -= Gt;
            break;
        }
        switch (w) {
          case "center":
            Wt -= Rt / 2;
            break;
          case "right":
            Wt -= Rt;
            break;
          case "inner":
            _ === p - 1 ? Wt -= Rt : _ > 0 && (Wt -= Rt / 2);
            break;
        }
        $t = {
          left: Wt,
          top: qt,
          width: Rt + jt.width,
          height: Gt + jt.height,
          color: U.backdropColor
        };
      }
      m.push({
        label: x,
        font: M,
        textOffset: R,
        options: {
          rotation: b,
          color: et,
          strokeColor: vt,
          strokeWidth: ct,
          textAlign: bt,
          textBaseline: it,
          translation: [
            O,
            S
          ],
          backdrop: $t
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-we(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return n.align === "start" ? s = "left" : n.align === "end" ? s = "right" : n.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: n, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width;
    let c, u;
    return n === "left" ? s ? (u = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", u += l / 2) : (c = "right", u += l)) : (u = this.right - r, i === "near" ? c = "right" : i === "center" ? (c = "center", u -= l / 2) : (c = "left", u = this.left)) : n === "right" ? s ? (u = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", u -= l / 2) : (c = "left", u -= l)) : (u = this.left + r, i === "near" ? c = "left" : i === "center" ? (c = "center", u += l / 2) : (c = "right", u = this.right)) : c = "right", {
      textAlign: c,
      x: u
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, n = this.options.position;
    if (n === "left" || n === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (n === "top" || n === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: n }, left: i, top: s, width: o, height: a } = this;
    n && (t.save(), t.fillStyle = n, t.fillRect(i, s, o, a), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? n.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, a;
    const r = (l, c, u) => {
      !u.width || !u.color || (i.save(), i.lineWidth = u.width, i.strokeStyle = u.color, i.setLineDash(u.borderDash || []), i.lineDashOffset = u.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
    };
    if (n.display)
      for (o = 0, a = s.length; o < a; ++o) {
        const l = s[o];
        n.drawOnChartArea && r({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), n.drawTicks && r({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: n, options: { border: i, grid: s } } = this, o = i.setContext(this.getContext()), a = i.display ? o.width : 0;
    if (!a)
      return;
    const r = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, u, h, d;
    this.isHorizontal() ? (c = ve(t, this.left, a) - a / 2, u = ve(t, this.right, r) + r / 2, h = d = l) : (h = ve(t, this.top, a) - a / 2, d = ve(t, this.bottom, r) + r / 2, c = u = l), n.save(), n.lineWidth = o.width, n.strokeStyle = o.color, n.beginPath(), n.moveTo(c, h), n.lineTo(u, d), n.stroke(), n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && ps(i, s);
    const o = this.getLabelItems(t);
    for (const a of o) {
      const r = a.options, l = a.font, c = a.label, u = a.textOffset;
      ii(i, c, 0, u, l, r);
    }
    s && bs(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = St(i.font), a = Vt(i.padding), r = i.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || X(n) ? (l += a.bottom, mt(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += a.top;
    const { titleX: c, titleY: u, maxWidth: h, rotation: d } = mf(this, l, n, r);
    ii(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: h,
      rotation: d,
      textAlign: gf(r, n, s),
      textBaseline: "middle",
      translation: [
        c,
        u
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, n = t.ticks && t.ticks.z || 0, i = Q(t.grid && t.grid.z, -1), s = Q(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== gi.prototype.draw ? [
      {
        z: n,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: i,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: n,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
    let o, a;
    for (o = 0, a = n.length; o < a; ++o) {
      const r = n[o];
      r[i] === this.id && (!t || r.type === t) && s.push(r);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return St(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class jn {
  constructor(t, n, i) {
    this.type = t, this.scope = n, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let i;
    yf(n) && (i = this.register(n));
    const s = this.items, o = t.id, a = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, pf(t, a, i), this.override && lt.override(t.id, t.overrides)), a;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, i = t.id, s = this.scope;
    i in n && delete n[i], s && i in lt[s] && (delete lt[s][i], this.override && delete Ne[i]);
  }
}
function pf(e, t, n) {
  const i = kn(/* @__PURE__ */ Object.create(null), [
    n ? lt.get(n) : {},
    lt.get(t),
    e.defaults
  ]);
  lt.set(t, i), e.defaultRoutes && bf(t, e.defaultRoutes), e.descriptors && lt.describe(t, e.descriptors);
}
function bf(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."), s = i.pop(), o = [
      e
    ].concat(i).join("."), a = t[n].split("."), r = a.pop(), l = a.join(".");
    lt.route(o, s, l, r);
  });
}
function yf(e) {
  return "id" in e && "defaults" in e;
}
class vf {
  constructor() {
    this.controllers = new jn(_n, "datasets", !0), this.elements = new jn(Ce, "elements"), this.plugins = new jn(Object, "plugins"), this.scales = new jn(gi, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, i) {
    [
      ...n
    ].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : q(s, (a) => {
        const r = i || this._getRegistryForType(a);
        this._exec(t, r, a);
      });
    });
  }
  _exec(t, n, i) {
    const s = gs(t);
    nt(i["before" + s], [], i), n[t](i), nt(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, n, i) {
    const s = n.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var Bt = /* @__PURE__ */ new vf();
class xf {
  constructor() {
    this._init = [];
  }
  notify(t, n, i, s) {
    n === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), a = this._notify(o, t, n, i);
    return n === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a;
  }
  _notify(t, n, i, s) {
    s = s || {};
    for (const o of t) {
      const a = o.plugin, r = a[i], l = [
        n,
        s,
        o.options
      ];
      if (nt(r, l, a) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    At(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const i = t && t.config, s = Q(i.options && i.options.plugins, {}), o = Ef(i);
    return s === !1 && !n ? [] : wf(t, o, s, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], i = this._cache, s = (o, a) => o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    this._notify(s(n, i), t, "stop"), this._notify(s(i, n), t, "start");
  }
}
function Ef(e) {
  const t = {}, n = [], i = Object.keys(Bt.plugins.items);
  for (let o = 0; o < i.length; o++)
    n.push(Bt.getPlugin(i[o]));
  const s = e.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    n.indexOf(a) === -1 && (n.push(a), t[a.id] = !0);
  }
  return {
    plugins: n,
    localIds: t
  };
}
function kf(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function wf(e, { plugins: t, localIds: n }, i, s) {
  const o = [], a = e.getContext();
  for (const r of t) {
    const l = r.id, c = kf(i[l], s);
    c !== null && o.push({
      plugin: r,
      options: Of(e.config, {
        plugin: r,
        local: n[l]
      }, c, a)
    });
  }
  return o;
}
function Of(e, { plugin: t, local: n }, i, s) {
  const o = e.pluginScopeKeys(t), a = e.getOptionScopes(i, o);
  return n && t.defaults && a.push(t.defaults), e.createResolver(a, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ji(e, t) {
  const n = lt.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function Tf(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function Sf(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Go(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function Af(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function Zi(e, ...t) {
  if (Go(e))
    return e;
  for (const n of t) {
    const i = n.axis || Af(n.position) || e.length > 1 && Go(e[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function qo(e, t, n) {
  if (n[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function Lf(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((i) => i.xAxisID === e || i.yAxisID === e);
    if (n.length)
      return qo(e, "x", n[0]) || qo(e, "y", n[0]);
  }
  return {};
}
function Nf(e, t) {
  const n = Ne[e.type] || {
    scales: {}
  }, i = t.scales || {}, s = Ji(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((a) => {
    const r = i[a];
    if (!X(r))
      return console.error(`Invalid scale configuration for scale: ${a}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
    const l = Zi(a, r, Lf(a, e), lt.scales[r.type]), c = Sf(l, s), u = n.scales || {};
    o[a] = un(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((a) => {
    const r = a.type || e.type, l = a.indexAxis || Ji(r, t), u = (Ne[r] || {}).scales || {};
    Object.keys(u).forEach((h) => {
      const d = Tf(h, l), f = a[d + "AxisID"] || d;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), un(o[f], [
        {
          axis: d
        },
        i[f],
        u[h]
      ]);
    });
  }), Object.keys(o).forEach((a) => {
    const r = o[a];
    un(r, [
      lt.scales[r.type],
      lt.scale
    ]);
  }), o;
}
function vr(e) {
  const t = e.options || (e.options = {});
  t.plugins = Q(t.plugins, {}), t.scales = Nf(e, t);
}
function xr(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function Cf(e) {
  return e = e || {}, e.data = xr(e.data), vr(e), e;
}
const Qo = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Set();
function Wn(e, t) {
  let n = Qo.get(e);
  return n || (n = t(), Qo.set(e, n), Er.add(n)), n;
}
const sn = (e, t, n) => {
  const i = wn(t, n);
  i !== void 0 && e.add(i);
};
class Df {
  constructor(t) {
    this._config = Cf(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = xr(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), vr(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Wn(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return Wn(`${t}.transition.${n}`, () => [
      [
        `datasets.${t}.transitions.${n}`,
        `transitions.${n}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return Wn(`${t}-${n}`, () => [
      [
        `datasets.${t}.elements.${n}`,
        `datasets.${t}`,
        `elements.${n}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id, i = this.type;
    return Wn(`${i}-plugin-${n}`, () => [
      [
        `plugins.${n}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || n) && (s = /* @__PURE__ */ new Map(), i.set(t, s)), s;
  }
  getOptionScopes(t, n, i) {
    const { options: s, type: o } = this, a = this._cachedScopes(t, i), r = a.get(n);
    if (r)
      return r;
    const l = /* @__PURE__ */ new Set();
    n.forEach((u) => {
      t && (l.add(t), u.forEach((h) => sn(l, t, h))), u.forEach((h) => sn(l, s, h)), u.forEach((h) => sn(l, Ne[o] || {}, h)), u.forEach((h) => sn(l, lt, h)), u.forEach((h) => sn(l, qi, h));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Er.has(n) && a.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      Ne[n] || {},
      lt.datasets[n] || {},
      {
        type: n
      },
      lt,
      qi
    ];
  }
  resolveNamedOptions(t, n, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: a, subPrefixes: r } = Jo(this._resolverCache, t, s);
    let l = a;
    if (If(a, n)) {
      o.$shared = !1, i = de(i) ? i() : i;
      const c = this.createResolver(t, i, r);
      l = Ue(a, i, c);
    }
    for (const c of n)
      o[c] = l[c];
    return o;
  }
  createResolver(t, n, i = [
    ""
  ], s) {
    const { resolver: o } = Jo(this._resolverCache, t, i);
    return X(n) ? Ue(o, n, void 0, s) : o;
  }
}
function Jo(e, t, n) {
  let i = e.get(t);
  i || (i = /* @__PURE__ */ new Map(), e.set(t, i));
  const s = n.join();
  let o = i.get(s);
  return o || (o = {
    resolver: vs(t, n),
    subPrefixes: n.filter((r) => !r.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const Mf = (e) => X(e) && Object.getOwnPropertyNames(e).some((t) => de(e[t]));
function If(e, t) {
  const { isScriptable: n, isIndexable: i } = rr(e);
  for (const s of t) {
    const o = n(s), a = i(s), r = (a || o) && e[s];
    if (o && (de(r) || Mf(r)) || a && mt(r))
      return !0;
  }
  return !1;
}
var Pf = "4.4.6";
const Rf = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Zo(e, t) {
  return e === "top" || e === "bottom" || Rf.indexOf(e) === -1 && t === "x";
}
function ta(e, t) {
  return function(n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
  };
}
function ea(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), nt(n && n.onComplete, [
    e
  ], t);
}
function Ff(e) {
  const t = e.chart, n = t.options.animation;
  nt(n && n.onProgress, [
    e
  ], t);
}
function kr(e) {
  return ks() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const Xn = {}, na = (e) => {
  const t = kr(e);
  return Object.values(Xn).filter((n) => n.canvas === t).pop();
};
function Vf(e, t, n) {
  const i = Object.keys(e);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const a = e[s];
      delete e[s], (n > 0 || o > t) && (e[o + n] = a);
    }
  }
}
function $f(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e;
}
function zn(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function jf(e, t) {
  const { xScale: n, yScale: i } = e;
  return n && i ? {
    left: zn(n, t, "left"),
    right: zn(n, t, "right"),
    top: zn(i, t, "top"),
    bottom: zn(i, t, "bottom")
  } : t;
}
var ae;
let Ke = (ae = class {
  static register(...t) {
    Bt.add(...t), ia();
  }
  static unregister(...t) {
    Bt.remove(...t), ia();
  }
  constructor(t, n) {
    const i = this.config = new Df(n), s = kr(t), o = na(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const a = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || nf(s))(), this.platform.updateConfig(i);
    const r = this.platform.acquireContext(s, a.aspectRatio), l = r && r.canvas, c = l && l.height, u = l && l.width;
    if (this.id = _h(), this.ctx = r, this.canvas = l, this.width = u, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new xf(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Nh((h) => this.update(h), a.resizeDelay || 0), this._dataChanges = [], Xn[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Zt.listen(this, "complete", ea), Zt.listen(this, "progress", Ff), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: i, height: s, _aspectRatio: o } = this;
    return At(t) ? n && o ? o : s ? i / s : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Bt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Co(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return So(this.canvas, this.ctx), this;
  }
  stop() {
    return Zt.stop(this), this;
  }
  resize(t, n) {
    Zt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: n
    } : this._resize(t, n);
  }
  _resize(t, n) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(s, t, n, o), r = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Co(this, r, !0) && (this.notifyPlugins("resize", {
      size: a
    }), nt(i.onResize, [
      this,
      a
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    q(n, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, i = this.scales, s = Object.keys(i).reduce((a, r) => (a[r] = !1, a), {});
    let o = [];
    n && (o = o.concat(Object.keys(n).map((a) => {
      const r = n[a], l = Zi(a, r), c = l === "r", u = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), q(o, (a) => {
      const r = a.options, l = r.id, c = Zi(l, r), u = Q(r.type, a.dtype);
      (r.position === void 0 || Zo(r.position, c) !== Zo(a.dposition)) && (r.position = a.dposition), s[l] = !0;
      let h = null;
      if (l in i && i[l].type === u)
        h = i[l];
      else {
        const d = Bt.getScale(u);
        h = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), i[h.id] = h;
      }
      h.init(r, t);
    }), q(s, (a, r) => {
      a || delete i[r];
    }), q(i, (a) => {
      ce.configure(this, a, a.options), ce.addBox(this, a);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > n) {
      for (let s = n; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(n, i - n);
    }
    this._sortedMetasets = t.slice(0).sort(ta("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: n } } = this;
    t.length > n.length && delete this._stacks, t.forEach((i, s) => {
      n.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], n = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = n.length; i < s; i++) {
      const o = n[i];
      let a = this.getDatasetMeta(i);
      const r = o.type || this.config.type;
      if (a.type && a.type !== r && (this._destroyDatasetMeta(i), a = this.getDatasetMeta(i)), a.type = r, a.indexAxis = o.indexAxis || Ji(r, this.options), a.order = o.order || 0, a.index = i, a.label = "" + o.label, a.visible = this.isDatasetVisible(i), a.controller)
        a.controller.updateIndex(i), a.controller.linkScales();
      else {
        const l = Bt.getController(r), { datasetElementType: c, dataElementType: u } = lt.datasets[r];
        Object.assign(l, {
          dataElementType: Bt.getElement(u),
          datasetElementType: c && Bt.getElement(c)
        }), a.controller = new l(this, i), t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    q(this.data.datasets, (t, n) => {
      this.getDatasetMeta(n).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const i = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let a = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: h } = this.getDatasetMeta(c), d = !s && o.indexOf(h) === -1;
      h.buildOrUpdateElements(d), a = Math.max(+h.getMaxOverflow(), a);
    }
    a = this._minPadding = i.layout.autoPadding ? a : 0, this._updateLayout(a), s || q(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(ta("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    q(this.scales, (t) => {
      ce.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!po(n, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of n) {
      const a = i === "_removeElements" ? -o : o;
      Vf(t, s, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, i = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), s = i(0);
    for (let o = 1; o < n; o++)
      if (!po(s, i(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    ce.update(this, this.width, this.height, t);
    const n = this.chartArea, i = n.width <= 0 || n.height <= 0;
    this._layers = [], q(this.boxes, (s) => {
      i && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this._updateDataset(n, de(t) ? t({
          datasetIndex: n
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, n) {
    const i = this.getDatasetMeta(t), s = {
      meta: i,
      index: t,
      mode: n,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (i.controller._update(n), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Zt.has(this) ? this.attached && !Zt.running(this) && Zt.start(this) : (this.draw(), ea({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(i, s);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const n = this._layers;
    for (t = 0; t < n.length && n[t].z <= 0; ++t)
      n[t].draw(this.chartArea);
    for (this._drawDatasets(); t < n.length; ++t)
      n[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets, i = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const a = n[s];
      (!t || a.visible) && i.push(a);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let n = t.length - 1; n >= 0; --n)
      this._drawDataset(t[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const n = this.ctx, i = t._clip, s = !i.disabled, o = jf(t, this.chartArea), a = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (s && ps(n, {
      left: i.left === !1 ? 0 : o.left - i.left,
      right: i.right === !1 ? this.width : o.right + i.right,
      top: i.top === !1 ? 0 : o.top - i.top,
      bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
    }), t.controller.draw(), s && bs(n), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a));
  }
  isPointInArea(t) {
    return ar(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, i, s) {
    const o = Pd.modes[n];
    return typeof o == "function" ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t], i = this._metasets;
    let s = i.filter((o) => o && o._dataset === n).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: n && n.order || 0,
      index: t,
      _dataset: n,
      _parsed: [],
      _sorted: !1
    }, i.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = Xe(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t];
    if (!n)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const i = this.getDatasetMeta(t);
    i.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, i) {
    const s = i ? "show" : "hide", o = this.getDatasetMeta(t), a = o.controller._resolveAnimations(void 0, s);
    Zn(n) ? (o.data[n].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), a.update(o, {
      visible: i
    }), this.update((r) => r.datasetIndex === t ? s : void 0));
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1);
  }
  show(t, n) {
    this._updateVisibility(t, n, !0);
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t];
    n && n.controller && n.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, n;
    for (this.stop(), Zt.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), So(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete Xn[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, n = this.platform, i = (o, a) => {
      n.addEventListener(this, o, a), t[o] = a;
    }, s = (o, a, r) => {
      o.offsetX = a, o.offsetY = r, this._eventHandler(o);
    };
    q(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, n = this.platform, i = (l, c) => {
      n.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (n.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let a;
    const r = () => {
      s("attach", r), this.attached = !0, this.resize(), i("resize", o), i("detach", a);
    };
    a = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), i("attach", r);
    }, n.isAttached(this.canvas) ? r() : a();
  }
  unbindEvents() {
    q(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, q(this._responsiveListeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, n, i) {
    const s = i ? "set" : "remove";
    let o, a, r, l;
    for (n === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
      a = t[r];
      const c = a && this.getDatasetMeta(a.datasetIndex).controller;
      c && c[s + "HoverStyle"](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [], i = t.map(({ datasetIndex: o, index: a }) => {
      const r = this.getDatasetMeta(o);
      if (!r)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: r.data[a],
        index: a
      };
    });
    !Qn(i, n) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, n));
  }
  notifyPlugins(t, n, i) {
    return this._plugins.notify(this, t, n, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, n, i) {
    const s = this.options.hover, o = (l, c) => l.filter((u) => !c.some((h) => u.datasetIndex === h.datasetIndex && u.index === h.index)), a = o(n, t), r = i ? t : o(t, n);
    a.length && this.updateHoverStyle(a, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0);
  }
  _eventHandler(t, n) {
    const i = {
      event: t,
      replay: n,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (a) => (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, s) === !1)
      return;
    const o = this._handleEvent(t, n, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (o || i.changed) && this.render(), this;
  }
  _handleEvent(t, n, i) {
    const { _active: s = [], options: o } = this, a = n, r = this._getActiveElements(t, s, i, a), l = vh(t), c = $f(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, nt(o.onHover, [
      t,
      r,
      this
    ], this), l && nt(o.onClick, [
      t,
      r,
      this
    ], this));
    const u = !Qn(r, s);
    return (u || n) && (this._active = r, this._updateHoverStyles(r, s, n)), this._lastEvent = c, u;
  }
  _getActiveElements(t, n, i, s) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return n;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}, j(ae, "defaults", lt), j(ae, "instances", Xn), j(ae, "overrides", Ne), j(ae, "registry", Bt), j(ae, "version", Pf), j(ae, "getChart", na), ae);
function ia() {
  return q(Ke.instances, (e) => e._plugins.invalidate());
}
function Wf(e, t, n) {
  const { startAngle: i, pixelMargin: s, x: o, y: a, outerRadius: r, innerRadius: l } = t;
  let c = s / r;
  e.beginPath(), e.arc(o, a, r, i - c, n + c), l > s ? (c = s / l, e.arc(o, a, l, n + c, i - c, !0)) : e.arc(o, a, s, n + dt, i - dt), e.closePath(), e.clip();
}
function zf(e) {
  return ys(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Hf(e, t, n, i) {
  const s = zf(e.options.borderRadius), o = (n - t) / 2, a = Math.min(o, i * t / 2), r = (l) => {
    const c = (n - Math.min(o, l)) * i / 2;
    return It(l, 0, Math.min(o, c));
  };
  return {
    outerStart: r(s.outerStart),
    outerEnd: r(s.outerEnd),
    innerStart: It(s.innerStart, 0, a),
    innerEnd: It(s.innerEnd, 0, a)
  };
}
function Ve(e, t, n, i) {
  return {
    x: n + e * Math.cos(t),
    y: i + e * Math.sin(t)
  };
}
function ai(e, t, n, i, s, o) {
  const { x: a, y: r, startAngle: l, pixelMargin: c, innerRadius: u } = t, h = Math.max(t.outerRadius + i + n - c, 0), d = u > 0 ? u + i + n + c : 0;
  let f = 0;
  const v = s - l;
  if (i) {
    const U = u > 0 ? u - i : 0, J = h > 0 ? h - i : 0, et = (U + J) / 2, vt = et !== 0 ? v * et / (et + i) : v;
    f = (v - vt) / 2;
  }
  const b = Math.max(1e-3, v * h - n / _t) / h, m = (v - b) / 2, _ = l + m + f, p = s - m - f, { outerStart: k, outerEnd: x, innerStart: O, innerEnd: S } = Hf(t, d, h, p - _), w = h - k, N = h - x, M = _ + k / w, P = p - x / N, V = d + O, R = d + S, it = _ + O / V, gt = p - S / R;
  if (e.beginPath(), o) {
    const U = (M + P) / 2;
    if (e.arc(a, r, h, M, U), e.arc(a, r, h, U, P), x > 0) {
      const ct = Ve(N, P, a, r);
      e.arc(ct.x, ct.y, x, P, p + dt);
    }
    const J = Ve(R, p, a, r);
    if (e.lineTo(J.x, J.y), S > 0) {
      const ct = Ve(R, gt, a, r);
      e.arc(ct.x, ct.y, S, p + dt, gt + Math.PI);
    }
    const et = (p - S / d + (_ + O / d)) / 2;
    if (e.arc(a, r, d, p - S / d, et, !0), e.arc(a, r, d, et, _ + O / d, !0), O > 0) {
      const ct = Ve(V, it, a, r);
      e.arc(ct.x, ct.y, O, it + Math.PI, _ - dt);
    }
    const vt = Ve(w, _, a, r);
    if (e.lineTo(vt.x, vt.y), k > 0) {
      const ct = Ve(w, M, a, r);
      e.arc(ct.x, ct.y, k, _ - dt, M);
    }
  } else {
    e.moveTo(a, r);
    const U = Math.cos(M) * h + a, J = Math.sin(M) * h + r;
    e.lineTo(U, J);
    const et = Math.cos(P) * h + a, vt = Math.sin(P) * h + r;
    e.lineTo(et, vt);
  }
  e.closePath();
}
function Uf(e, t, n, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r } = t;
  let l = t.endAngle;
  if (o) {
    ai(e, t, n, i, l, s);
    for (let c = 0; c < o; ++c)
      e.fill();
    isNaN(r) || (l = a + (r % ut || ut));
  }
  return ai(e, t, n, i, l, s), e.fill(), l;
}
function Bf(e, t, n, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r, options: l } = t, { borderWidth: c, borderJoinStyle: u, borderDash: h, borderDashOffset: d } = l, f = l.borderAlign === "inner";
  if (!c)
    return;
  e.setLineDash(h || []), e.lineDashOffset = d, f ? (e.lineWidth = c * 2, e.lineJoin = u || "round") : (e.lineWidth = c, e.lineJoin = u || "bevel");
  let v = t.endAngle;
  if (o) {
    ai(e, t, n, i, v, s);
    for (let b = 0; b < o; ++b)
      e.stroke();
    isNaN(r) || (v = a + (r % ut || ut));
  }
  f && Wf(e, t, v), o || (ai(e, t, n, i, v, s), e.stroke());
}
class Oe extends Ce {
  constructor(n) {
    super();
    j(this, "circumference");
    j(this, "endAngle");
    j(this, "fullCircles");
    j(this, "innerRadius");
    j(this, "outerRadius");
    j(this, "pixelMargin");
    j(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, n && Object.assign(this, n);
  }
  inRange(n, i, s) {
    const o = this.getProps([
      "x",
      "y"
    ], s), { angle: a, distance: r } = Qa(o, {
      x: n,
      y: i
    }), { startAngle: l, endAngle: c, innerRadius: u, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), f = (this.options.spacing + this.options.borderWidth) / 2, v = Q(d, c - l), b = ni(a, l, c) && l !== c, m = v >= ut || b, _ = an(r, u + f, h + f);
    return m && _;
  }
  getCenterPoint(n) {
    const { x: i, y: s, startAngle: o, endAngle: a, innerRadius: r, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], n), { offset: c, spacing: u } = this.options, h = (o + a) / 2, d = (r + l + u + c) / 2;
    return {
      x: i + Math.cos(h) * d,
      y: s + Math.sin(h) * d
    };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: i, circumference: s } = this, o = (i.offset || 0) / 4, a = (i.spacing || 0) / 2, r = i.circular;
    if (this.pixelMargin = i.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > ut ? Math.floor(s / ut) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    n.save();
    const l = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(l) * o, Math.sin(l) * o);
    const c = 1 - Math.sin(Math.min(_t, s || 0)), u = o * c;
    n.fillStyle = i.backgroundColor, n.strokeStyle = i.borderColor, Uf(n, this, u, a, r), Bf(n, this, u, a, r), n.restore();
  }
}
j(Oe, "id", "arc"), j(Oe, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), j(Oe, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), j(Oe, "descriptors", {
  _scriptable: !0,
  _indexable: (n) => n !== "borderDash"
});
const sa = (e, t) => {
  let { boxHeight: n = t, boxWidth: i = t } = e;
  return e.usePointStyle && (n = Math.min(n, t), i = e.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: n,
    itemHeight: Math.max(t, n)
  };
}, Yf = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class oa extends Ce {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, n, i) {
    this.maxWidth = t, this.maxHeight = n, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = nt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))), t.sort && (n = n.sort((i, s) => t.sort(i, s, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n;
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, s = St(i.font), o = s.size, a = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = sa(i, o);
    let c, u;
    n.font = s.string, this.isHorizontal() ? (c = this.maxWidth, u = this._fitRows(a, o, r, l) + 10) : (u = this.maxHeight, c = this._fitCols(a, s, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(u, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, n, i, s) {
    const { ctx: o, maxWidth: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], u = s + r;
    let h = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, f = -u;
    return this.legendItems.forEach((v, b) => {
      const m = i + n / 2 + o.measureText(v.text).width;
      (b === 0 || c[c.length - 1] + m + 2 * r > a) && (h += u, c[c.length - (b > 0 ? 0 : 1)] = 0, f += u, d++), l[b] = {
        left: 0,
        top: f,
        row: d,
        width: m,
        height: s
      }, c[c.length - 1] += m + r;
    }), h;
  }
  _fitCols(t, n, i, s) {
    const { ctx: o, maxHeight: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], u = a - t;
    let h = r, d = 0, f = 0, v = 0, b = 0;
    return this.legendItems.forEach((m, _) => {
      const { itemWidth: p, itemHeight: k } = Xf(i, n, o, m, s);
      _ > 0 && f + k + 2 * r > u && (h += d + r, c.push({
        width: d,
        height: f
      }), v += d + r, b++, d = f = 0), l[_] = {
        left: v,
        top: f,
        col: b,
        width: p,
        height: k
      }, d = Math.max(d, p), f += k + r;
    }), h += d, c.push({
      width: d,
      height: f
    }), h;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: i, labels: { padding: s }, rtl: o } } = this, a = We(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l = Lt(i, this.left + s, this.right - this.lineWidths[r]);
      for (const c of n)
        r !== c.row && (r = c.row, l = Lt(i, this.left + s, this.right - this.lineWidths[r])), c.top += this.top + t + s, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + s;
    } else {
      let r = 0, l = Lt(i, this.top + t + s, this.bottom - this.columnSizes[r].height);
      for (const c of n)
        c.col !== r && (r = c.col, l = Lt(i, this.top + t + s, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + s, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ps(t, this), this._draw(), bs(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: s } = this, { align: o, labels: a } = t, r = lt.color, l = We(t.rtl, this.left, this.width), c = St(a.font), { padding: u } = a, h = c.size, d = h / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: v, boxHeight: b, itemHeight: m } = sa(a, h), _ = function(S, w, N) {
      if (isNaN(v) || v <= 0 || isNaN(b) || b < 0)
        return;
      s.save();
      const M = Q(N.lineWidth, 1);
      if (s.fillStyle = Q(N.fillStyle, r), s.lineCap = Q(N.lineCap, "butt"), s.lineDashOffset = Q(N.lineDashOffset, 0), s.lineJoin = Q(N.lineJoin, "miter"), s.lineWidth = M, s.strokeStyle = Q(N.strokeStyle, r), s.setLineDash(Q(N.lineDash, [])), a.usePointStyle) {
        const P = {
          radius: b * Math.SQRT2 / 2,
          pointStyle: N.pointStyle,
          rotation: N.rotation,
          borderWidth: M
        }, V = l.xPlus(S, v / 2), R = w + d;
        or(s, P, V, R, a.pointStyleWidth && v);
      } else {
        const P = w + Math.max((h - b) / 2, 0), V = l.leftForLtr(S, v), R = fn(N.borderRadius);
        s.beginPath(), Object.values(R).some((it) => it !== 0) ? Qi(s, {
          x: V,
          y: P,
          w: v,
          h: b,
          radius: R
        }) : s.rect(V, P, v, b), s.fill(), M !== 0 && s.stroke();
      }
      s.restore();
    }, p = function(S, w, N) {
      ii(s, N.text, S, w + m / 2, c, {
        strikethrough: N.hidden,
        textAlign: l.textAlign(N.textAlign)
      });
    }, k = this.isHorizontal(), x = this._computeTitleHeight();
    k ? f = {
      x: Lt(o, this.left + u, this.right - i[0]),
      y: this.top + u + x,
      line: 0
    } : f = {
      x: this.left + u,
      y: Lt(o, this.top + x + u, this.bottom - n[0].height),
      line: 0
    }, hr(this.ctx, t.textDirection);
    const O = m + u;
    this.legendItems.forEach((S, w) => {
      s.strokeStyle = S.fontColor, s.fillStyle = S.fontColor;
      const N = s.measureText(S.text).width, M = l.textAlign(S.textAlign || (S.textAlign = a.textAlign)), P = v + d + N;
      let V = f.x, R = f.y;
      l.setWidth(this.width), k ? w > 0 && V + P + u > this.right && (R = f.y += O, f.line++, V = f.x = Lt(o, this.left + u, this.right - i[f.line])) : w > 0 && R + O > this.bottom && (V = f.x = V + n[f.line].width + u, f.line++, R = f.y = Lt(o, this.top + x + u, this.bottom - n[f.line].height));
      const it = l.x(V);
      if (_(it, R, S), V = Ch(M, V + v + d, k ? V + P : this.right, t.rtl), p(l.x(V), R, S), k)
        f.x += P + u;
      else if (typeof S.text != "string") {
        const gt = c.lineHeight;
        f.y += wr(S, gt) + u;
      } else
        f.y += O;
    }), dr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, n = t.title, i = St(n.font), s = Vt(n.padding);
    if (!n.display)
      return;
    const o = We(t.rtl, this.left, this.width), a = this.ctx, r = n.position, l = i.size / 2, c = s.top + l;
    let u, h = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), u = this.top + c, h = Lt(t.align, h, this.right - d);
    else {
      const v = this.columnSizes.reduce((b, m) => Math.max(b, m.height), 0);
      u = c + Lt(t.align, this.top, this.bottom - v - t.labels.padding - this._computeTitleHeight());
    }
    const f = Lt(r, h, h + d);
    a.textAlign = o.textAlign(er(r)), a.textBaseline = "middle", a.strokeStyle = n.color, a.fillStyle = n.color, a.font = i.string, ii(a, n.text, f, u, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, n = St(t.font), i = Vt(t.padding);
    return t.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, n) {
    let i, s, o;
    if (an(t, this.left, this.right) && an(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], an(t, s.left, s.left + s.width) && an(n, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!qf(t.type, n))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = Yf(s, i);
      s && !o && nt(n.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && nt(n.onHover, [
        t,
        i,
        this
      ], this);
    } else i && nt(n.onClick, [
      t,
      i,
      this
    ], this);
  }
}
function Xf(e, t, n, i, s) {
  const o = Kf(i, e, t, n), a = Gf(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: a
  };
}
function Kf(e, t, n, i) {
  let s = e.text;
  return s && typeof s != "string" && (s = s.reduce((o, a) => o.length > a.length ? o : a)), t + n.size / 2 + i.measureText(s).width;
}
function Gf(e, t, n) {
  let i = e;
  return typeof t.text != "string" && (i = wr(t, n)), i;
}
function wr(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function qf(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var Ts = {
  id: "legend",
  _element: oa,
  start(e, t, n) {
    const i = e.legend = new oa({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    ce.configure(e, i, n), ce.addBox(e, i);
  },
  stop(e) {
    ce.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const i = e.legend;
    ce.configure(e, i, n), i.options = n;
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex, s = n.chart;
      s.isDatasetVisible(i) ? (s.hide(i), t.hidden = !0) : (s.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets, { labels: { usePointStyle: n, pointStyle: i, textAlign: s, color: o, useBorderRadius: a, borderRadius: r } } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0), u = Vt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: a && (r || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(e)
    }
  }
};
const cn = {
  average(e) {
    if (!e.length)
      return !1;
    let t, n, i = /* @__PURE__ */ new Set(), s = 0, o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const r = e[t].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        i.add(l.x), s += l.y, ++o;
      }
    }
    return o === 0 || i.size === 0 ? !1 : {
      x: [
        ...i
      ].reduce((r, l) => r + l) / i.size,
      y: s / o
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let n = t.x, i = t.y, s = Number.POSITIVE_INFINITY, o, a, r;
    for (o = 0, a = e.length; o < a; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), u = wh(t, c);
        u < s && (s = u, r = l);
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      n = l.x, i = l.y;
    }
    return {
      x: n,
      y: i
    };
  }
};
function Ut(e, t) {
  return t && (mt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function te(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function Qf(e, t) {
  const { element: n, datasetIndex: i, index: s } = t, o = e.getDatasetMeta(i).controller, { label: a, value: r } = o.getLabelAndValue(s);
  return {
    chart: e,
    label: a,
    parsed: o.getParsed(s),
    raw: e.data.datasets[i].data[s],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: n
  };
}
function aa(e, t) {
  const n = e.chart.ctx, { body: i, footer: s, title: o } = e, { boxWidth: a, boxHeight: r } = t, l = St(t.bodyFont), c = St(t.titleFont), u = St(t.footerFont), h = o.length, d = s.length, f = i.length, v = Vt(t.padding);
  let b = v.height, m = 0, _ = i.reduce((x, O) => x + O.before.length + O.lines.length + O.after.length, 0);
  if (_ += e.beforeBody.length + e.afterBody.length, h && (b += h * c.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom), _) {
    const x = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    b += f * x + (_ - f) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  d && (b += t.footerMarginTop + d * u.lineHeight + (d - 1) * t.footerSpacing);
  let p = 0;
  const k = function(x) {
    m = Math.max(m, n.measureText(x).width + p);
  };
  return n.save(), n.font = c.string, q(e.title, k), n.font = l.string, q(e.beforeBody.concat(e.afterBody), k), p = t.displayColors ? a + 2 + t.boxPadding : 0, q(i, (x) => {
    q(x.before, k), q(x.lines, k), q(x.after, k);
  }), p = 0, n.font = u.string, q(e.footer, k), n.restore(), m += v.width, {
    width: m,
    height: b
  };
}
function Jf(e, t) {
  const { y: n, height: i } = t;
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center";
}
function Zf(e, t, n, i) {
  const { x: s, width: o } = i, a = n.caretSize + n.caretPadding;
  if (e === "left" && s + o + a > t.width || e === "right" && s - o - a < 0)
    return !0;
}
function t_(e, t, n, i) {
  const { x: s, width: o } = n, { width: a, chartArea: { left: r, right: l } } = e;
  let c = "center";
  return i === "center" ? c = s <= (r + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= a - o / 2 && (c = "right"), Zf(c, e, t, n) && (c = "center"), c;
}
function ra(e, t, n) {
  const i = n.yAlign || t.yAlign || Jf(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || t_(e, t, n, i),
    yAlign: i
  };
}
function e_(e, t) {
  let { x: n, width: i } = e;
  return t === "right" ? n -= i : t === "center" && (n -= i / 2), n;
}
function n_(e, t, n) {
  let { y: i, height: s } = e;
  return t === "top" ? i += n : t === "bottom" ? i -= s + n : i -= s / 2, i;
}
function la(e, t, n, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: a } = e, { xAlign: r, yAlign: l } = n, c = s + o, { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = fn(a);
  let v = e_(t, r);
  const b = n_(t, l, c);
  return l === "center" ? r === "left" ? v += c : r === "right" && (v -= c) : r === "left" ? v -= Math.max(u, d) + s : r === "right" && (v += Math.max(h, f) + s), {
    x: It(v, 0, i.width - t.width),
    y: It(b, 0, i.height - t.height)
  };
}
function Hn(e, t, n) {
  const i = Vt(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - i.right : e.x + i.left;
}
function ca(e) {
  return Ut([], te(e));
}
function i_(e, t, n) {
  return Xe(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function ua(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const Or = {
  beforeTitle: Jt,
  title(e) {
    if (e.length > 0) {
      const t = e[0], n = t.chart.data.labels, i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: Jt,
  beforeBody: Jt,
  beforeLabel: Jt,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return At(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      pointStyle: n.pointStyle,
      rotation: n.rotation
    };
  },
  afterLabel: Jt,
  afterBody: Jt,
  beforeFooter: Jt,
  footer: Jt,
  afterFooter: Jt
};
function wt(e, t, n, i) {
  const s = e[t].call(n, i);
  return typeof s > "u" ? Or[t].call(n, i) : s;
}
class ts extends Ce {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const n = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && n.options.animation && i.animations, o = new fr(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = i_(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: i } = n, s = wt(i, "beforeTitle", this, t), o = wt(i, "title", this, t), a = wt(i, "afterTitle", this, t);
    let r = [];
    return r = Ut(r, te(s)), r = Ut(r, te(o)), r = Ut(r, te(a)), r;
  }
  getBeforeBody(t, n) {
    return ca(wt(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: i } = n, s = [];
    return q(t, (o) => {
      const a = {
        before: [],
        lines: [],
        after: []
      }, r = ua(i, o);
      Ut(a.before, te(wt(r, "beforeLabel", this, o))), Ut(a.lines, wt(r, "label", this, o)), Ut(a.after, te(wt(r, "afterLabel", this, o))), s.push(a);
    }), s;
  }
  getAfterBody(t, n) {
    return ca(wt(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: i } = n, s = wt(i, "beforeFooter", this, t), o = wt(i, "footer", this, t), a = wt(i, "afterFooter", this, t);
    let r = [];
    return r = Ut(r, te(s)), r = Ut(r, te(o)), r = Ut(r, te(a)), r;
  }
  _createItems(t) {
    const n = this._active, i = this.chart.data, s = [], o = [], a = [];
    let r = [], l, c;
    for (l = 0, c = n.length; l < c; ++l)
      r.push(Qf(this.chart, n[l]));
    return t.filter && (r = r.filter((u, h, d) => t.filter(u, h, d, i))), t.itemSort && (r = r.sort((u, h) => t.itemSort(u, h, i))), q(r, (u) => {
      const h = ua(t.callbacks, u);
      s.push(wt(h, "labelColor", this, u)), o.push(wt(h, "labelPointStyle", this, u)), a.push(wt(h, "labelTextColor", this, u));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()), s = this._active;
    let o, a = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const r = cn[i.position].call(this, s, this._eventPosition);
      a = this._createItems(i), this.title = this.getTitle(a, i), this.beforeBody = this.getBeforeBody(a, i), this.body = this.getBody(a, i), this.afterBody = this.getAfterBody(a, i), this.footer = this.getFooter(a, i);
      const l = this._size = aa(this, i), c = Object.assign({}, r, l), u = ra(this.chart, i, c), h = la(i, c, u, this.chart);
      this.xAlign = u.xAlign, this.yAlign = u.yAlign, o = {
        opacity: 1,
        x: h.x,
        y: h.y,
        width: l.width,
        height: l.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: n
    });
  }
  drawCaret(t, n, i, s) {
    const o = this.getCaretPosition(t, i, s);
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, n, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: a, cornerRadius: r } = i, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: h } = fn(r), { x: d, y: f } = t, { width: v, height: b } = n;
    let m, _, p, k, x, O;
    return o === "center" ? (x = f + b / 2, s === "left" ? (m = d, _ = m - a, k = x + a, O = x - a) : (m = d + v, _ = m + a, k = x - a, O = x + a), p = m) : (s === "left" ? _ = d + Math.max(l, u) + a : s === "right" ? _ = d + v - Math.max(c, h) - a : _ = this.caretX, o === "top" ? (k = f, x = k - a, m = _ - a, p = _ + a) : (k = f + b, x = k + a, m = _ + a, p = _ - a), O = k), {
      x1: m,
      x2: _,
      x3: p,
      y1: k,
      y2: x,
      y3: O
    };
  }
  drawTitle(t, n, i) {
    const s = this.title, o = s.length;
    let a, r, l;
    if (o) {
      const c = We(i.rtl, this.x, this.width);
      for (t.x = Hn(this, i.titleAlign, i), n.textAlign = c.textAlign(i.titleAlign), n.textBaseline = "middle", a = St(i.titleFont), r = i.titleSpacing, n.fillStyle = i.titleColor, n.font = a.string, l = 0; l < o; ++l)
        n.fillText(s[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, n, i, s, o) {
    const a = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: c } = o, u = St(o.bodyFont), h = Hn(this, "left", o), d = s.x(h), f = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, v = n.y + f;
    if (o.usePointStyle) {
      const b = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, m = s.leftForLtr(d, c) + c / 2, _ = v + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ao(t, b, m, _), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Ao(t, b, m, _);
    } else {
      t.lineWidth = X(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
      const b = s.leftForLtr(d, c), m = s.leftForLtr(s.xPlus(d, 1), c - 2), _ = fn(a.borderRadius);
      Object.values(_).some((p) => p !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Qi(t, {
        x: b,
        y: v,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), Qi(t, {
        x: m,
        y: v + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(b, v, c, l), t.strokeRect(b, v, c, l), t.fillStyle = a.backgroundColor, t.fillRect(m, v + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, n, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: u } = i, h = St(i.bodyFont);
    let d = h.lineHeight, f = 0;
    const v = We(i.rtl, this.x, this.width), b = function(N) {
      n.fillText(N, v.x(t.x + f), t.y + d / 2), t.y += d + o;
    }, m = v.textAlign(a);
    let _, p, k, x, O, S, w;
    for (n.textAlign = a, n.textBaseline = "middle", n.font = h.string, t.x = Hn(this, m, i), n.fillStyle = i.bodyColor, q(this.beforeBody, b), f = r && m !== "right" ? a === "center" ? c / 2 + u : c + 2 + u : 0, x = 0, S = s.length; x < S; ++x) {
      for (_ = s[x], p = this.labelTextColors[x], n.fillStyle = p, q(_.before, b), k = _.lines, r && k.length && (this._drawColorBox(n, t, x, v, i), d = Math.max(h.lineHeight, l)), O = 0, w = k.length; O < w; ++O)
        b(k[O]), d = h.lineHeight;
      q(_.after, b);
    }
    f = 0, d = h.lineHeight, q(this.afterBody, b), t.y -= o;
  }
  drawFooter(t, n, i) {
    const s = this.footer, o = s.length;
    let a, r;
    if (o) {
      const l = We(i.rtl, this.x, this.width);
      for (t.x = Hn(this, i.footerAlign, i), t.y += i.footerMarginTop, n.textAlign = l.textAlign(i.footerAlign), n.textBaseline = "middle", a = St(i.footerFont), n.fillStyle = i.footerColor, n.font = a.string, r = 0; r < o; ++r)
        n.fillText(s[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, n, i, s) {
    const { xAlign: o, yAlign: a } = this, { x: r, y: l } = t, { width: c, height: u } = i, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: v } = fn(s.cornerRadius);
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, n.lineWidth = s.borderWidth, n.beginPath(), n.moveTo(r + h, l), a === "top" && this.drawCaret(t, n, i, s), n.lineTo(r + c - d, l), n.quadraticCurveTo(r + c, l, r + c, l + d), a === "center" && o === "right" && this.drawCaret(t, n, i, s), n.lineTo(r + c, l + u - v), n.quadraticCurveTo(r + c, l + u, r + c - v, l + u), a === "bottom" && this.drawCaret(t, n, i, s), n.lineTo(r + f, l + u), n.quadraticCurveTo(r, l + u, r, l + u - f), a === "center" && o === "left" && this.drawCaret(t, n, i, s), n.lineTo(r, l + h), n.quadraticCurveTo(r, l, r + h, l), n.closePath(), n.fill(), s.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const a = cn[t.position].call(this, this._active, this._eventPosition);
      if (!a)
        return;
      const r = this._size = aa(this, t), l = Object.assign({}, a, this._size), c = ra(n, t, l), u = la(t, l, c, n);
      (s._to !== u.x || o._to !== u.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(n);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const a = Vt(n.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && r && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, n), hr(t, n.textDirection), o.y += a.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), dr(t, n.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const i = this._active, s = t.map(({ datasetIndex: r, index: l }) => {
      const c = this.chart.getDatasetMeta(r);
      if (!c)
        throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: c.data[l],
        index: l
      };
    }), o = !Qn(i, s), a = this._positionChanged(s, n);
    (o || a) && (this._active = s, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], a = this._getActiveElements(t, o, n, i), r = this._positionChanged(a, t), l = n || !Qn(a, o) || r;
    return l && (this._active = a, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, n))), l;
  }
  _getActiveElements(t, n, i, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return n.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && a.reverse(), a;
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: s, options: o } = this, a = cn[o.position].call(this, t, n);
    return a !== !1 && (i !== a.x || s !== a.y);
  }
}
j(ts, "positioners", cn);
var Ss = {
  id: "tooltip",
  _element: ts,
  positioners: cn,
  afterInit(e, t, n) {
    n && (e.tooltip = new ts({
      chart: e,
      options: n
    }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = {
        tooltip: t
      };
      if (e.notifyPlugins("beforeTooltipDraw", {
        ...n,
        cancelable: !0
      }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: Or
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const mi = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, Tt = /* @__PURE__ */ Object.keys(mi);
function ha(e, t) {
  return e - t;
}
function da(e, t) {
  if (At(t))
    return null;
  const n = e._adapter, { parser: i, round: s, isoWeekday: o } = e._parseOpts;
  let a = t;
  return typeof i == "function" && (a = i(a)), ie(a) || (a = typeof i == "string" ? n.parse(a, i) : n.parse(a)), a === null ? null : (s && (a = s === "week" && (ei(o) || o === !0) ? n.startOf(a, "isoWeek", o) : n.startOf(a, s)), +a);
}
function fa(e, t, n, i) {
  const s = Tt.length;
  for (let o = Tt.indexOf(e); o < s - 1; ++o) {
    const a = mi[Tt[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((n - t) / (r * a.size)) <= i)
      return Tt[o];
  }
  return Tt[s - 1];
}
function s_(e, t, n, i, s) {
  for (let o = Tt.length - 1; o >= Tt.indexOf(n); o--) {
    const a = Tt[o];
    if (mi[a].common && e._adapter.diff(s, i, a) >= t - 1)
      return a;
  }
  return Tt[n ? Tt.indexOf(n) : 0];
}
function o_(e) {
  for (let t = Tt.indexOf(e) + 1, n = Tt.length; t < n; ++t)
    if (mi[Tt[t]].common)
      return Tt[t];
}
function _a(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: i, hi: s } = ms(n, t), o = n[i] >= t ? n[i] : n[s];
    e[o] = !0;
  }
}
function a_(e, t, n, i) {
  const s = e._adapter, o = +s.startOf(t[0].value, i), a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +s.add(r, 1, i))
    l = n[r], l >= 0 && (t[l].major = !0);
  return t;
}
function ga(e, t, n) {
  const i = [], s = {}, o = t.length;
  let a, r;
  for (a = 0; a < o; ++a)
    r = t[a], s[r] = a, i.push({
      value: r,
      major: !1
    });
  return o === 0 || !n ? i : a_(e, i, s, n);
}
class ri extends gi {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new Nd._date(t.adapters.date);
    s.init(n), un(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
    return t === void 0 ? null : da(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, n = this._adapter, i = t.time.unit || "day";
    let { min: s, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l(c) {
      !a && !isNaN(c.min) && (s = Math.min(s, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = ie(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i), o = ie(o) && !isNaN(o) ? o : +n.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (n = t[0], i = t[t.length - 1]), {
      min: n,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, n = t.time, i = t.ticks, s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, a = this.max, r = Sh(s, o, a);
    return this._unit = n.unit || (i.autoSkip ? fa(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : s_(this, r.length, n.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : o_(this._unit), this.initOffsets(s), t.reverse && r.reverse(), ga(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - s : n = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const a = t.length < 3 ? 0.5 : 0.25;
    n = It(n, 0, a), i = It(i, 0, a), this._offsets = {
      start: n,
      end: i,
      factor: 1 / (n + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, n = this.min, i = this.max, s = this.options, o = s.time, a = o.unit || fa(o.minUnit, n, i, this._getLabelCapacity(n)), r = Q(s.ticks.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, c = ei(l) || l === !0, u = {};
    let h = n, d, f;
    if (c && (h = +t.startOf(h, "isoWeek", l)), h = +t.startOf(h, c ? "day" : a), t.diff(i, n, a) > 1e5 * r)
      throw new Error(n + " and " + i + " are too far apart with stepSize of " + r + " " + a);
    const v = s.ticks.source === "data" && this.getDataTimestamps();
    for (d = h, f = 0; d < i; d = +t.add(d, r, a), f++)
      _a(u, d, v);
    return (d === i || s.bounds === "ticks" || f === 1) && _a(u, d, v), Object.keys(u).sort(ha).map((b) => +b);
  }
  getLabelForValue(t) {
    const n = this._adapter, i = this.options.time;
    return i.tooltipFormat ? n.format(t, i.tooltipFormat) : n.format(t, i.displayFormats.datetime);
  }
  format(t, n) {
    const s = this.options.time.displayFormats, o = this._unit, a = n || s[o];
    return this._adapter.format(t, a);
  }
  _tickFormatFunction(t, n, i, s) {
    const o = this.options, a = o.ticks.callback;
    if (a)
      return nt(a, [
        t,
        n,
        i
      ], this);
    const r = o.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && r[l], h = c && r[c], d = i[n], f = c && h && d && d.major;
    return this._adapter.format(t, s || (f ? h : u));
  }
  generateTickLabels(t) {
    let n, i, s;
    for (n = 0, i = t.length; n < i; ++n)
      s = t[n], s.label = this._tickFormatFunction(s.value, n, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets, i = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks, i = this.ctx.measureText(t).width, s = we(this.isHorizontal() ? n.maxRotation : n.minRotation), o = Math.cos(s), a = Math.sin(s), r = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + r * a,
      h: i * a + r * o
    };
  }
  _getLabelCapacity(t) {
    const n = this.options.time, i = n.displayFormats, s = i[n.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, ga(this, [
      t
    ], this._majorUnit), s), a = this._getLabelSize(o), r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], n, i;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (n = 0, i = s.length; n < i; ++n)
      t = t.concat(s[n].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, i;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (n = 0, i = s.length; n < i; ++n)
      t.push(da(this, s[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Lh(t.sort(ha));
  }
}
j(ri, "id", "time"), j(ri, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Un(e, t, n) {
  let i = 0, s = e.length - 1, o, a, r, l;
  n ? (t >= e[i].pos && t <= e[s].pos && ({ lo: i, hi: s } = Gi(e, "pos", t)), { pos: o, time: r } = e[i], { pos: a, time: l } = e[s]) : (t >= e[i].time && t <= e[s].time && ({ lo: i, hi: s } = Gi(e, "time", t)), { time: o, pos: r } = e[i], { time: a, pos: l } = e[s]);
  const c = a - o;
  return c ? r + (l - r) * (t - o) / c : r;
}
class ma extends ri {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = Un(n, this.min), this._tableRange = Un(n, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this, s = [], o = [];
    let a, r, l, c, u;
    for (a = 0, r = t.length; a < r; ++a)
      c = t[a], c >= n && c <= i && s.push(c);
    if (s.length < 2)
      return [
        {
          time: n,
          pos: 0
        },
        {
          time: i,
          pos: 1
        }
      ];
    for (a = 0, r = s.length; a < r; ++a)
      u = s[a + 1], l = s[a - 1], c = s[a], Math.round((u + l) / 2) !== c && o.push({
        time: c,
        pos: a / (r - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, n = this.max;
    let i = super.getDataTimestamps();
    return (!i.includes(t) || !i.length) && i.splice(0, 0, t), (!i.includes(n) || i.length === 1) && i.push(n), i.sort((s, o) => s - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const n = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return n.length && i.length ? t = this.normalize(n.concat(i)) : t = n.length ? n : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Un(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, i = this.getDecimalForPixel(t) / n.factor - n.end;
    return Un(this._table, i * this._tableRange + this._minPos, !0);
  }
}
j(ma, "id", "timeseries"), j(ma, "defaults", ri.defaults);
const Tr = {
  data: {
    type: Object,
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
}, r_ = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, l_ = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Tr,
  ...r_
}, c_ = $r[0] === "2" ? (e, t) => Object.assign(e, {
  attrs: t
}) : (e, t) => Object.assign(e, t);
function $e(e) {
  return ya(e) ? Pi(e) : e;
}
function u_(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return ya(t) ? new Proxy(e, {}) : e;
}
function h_(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function Sr(e, t) {
  e.labels = t;
}
function Ar(e, t, n) {
  const i = [];
  e.datasets = t.map((s) => {
    const o = e.datasets.find((a) => a[n] === s[n]);
    return !o || !s.data || i.includes(o) ? {
      ...s
    } : (i.push(o), Object.assign(o, s), o);
  });
}
function d_(e, t) {
  const n = {
    labels: [],
    datasets: []
  };
  return Sr(n, e.labels), Ar(n, e.datasets, t), n;
}
const f_ = kt({
  props: l_,
  setup(e, t) {
    let { expose: n, slots: i } = t;
    const s = pt(null), o = es(null);
    n({
      chart: o
    });
    const a = () => {
      if (!s.value) return;
      const { type: c, data: u, options: h, plugins: d, datasetIdKey: f } = e, v = d_(u, f), b = u_(v, u);
      o.value = new Ke(s.value, {
        type: c,
        data: b,
        options: {
          ...h
        },
        plugins: d
      });
    }, r = () => {
      const c = Pi(o.value);
      c && (e.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, e.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(e.updateMode);
    };
    return se(a), ba(r), Kn([
      () => e.options,
      () => e.data
    ], (c, u) => {
      let [h, d] = c, [f, v] = u;
      const b = Pi(o.value);
      if (!b)
        return;
      let m = !1;
      if (h) {
        const _ = $e(h), p = $e(f);
        _ && _ !== p && (h_(b, _), m = !0);
      }
      if (d) {
        const _ = $e(d.labels), p = $e(v.labels), k = $e(d.datasets), x = $e(v.datasets);
        _ !== p && (Sr(b.config.data, _), m = !0), k && k !== x && (Ar(b.config.data, k, e.datasetIdKey), m = !0);
      }
      m && jr(() => {
        l(b);
      });
    }, {
      deep: !0
    }), () => gn("canvas", {
      role: "img",
      ariaLabel: e.ariaLabel,
      ariaDescribedby: e.ariaDescribedby,
      ref: s
    }, [
      gn("p", {}, [
        i.default ? i.default() : ""
      ])
    ]);
  }
});
function __(e, t) {
  return Ke.register(t), kt({
    props: Tr,
    setup(n, i) {
      let { expose: s } = i;
      const o = es(null), a = (r) => {
        o.value = r == null ? void 0 : r.chart;
      };
      return s({
        chart: o
      }), () => gn(f_, c_({
        ref: a
      }, {
        type: e,
        ...n
      }));
    }
  });
}
const As = /* @__PURE__ */ __("doughnut", rn), g_ = { class: "panel panel-white no-margin" }, m_ = { class: "panel-heading" }, p_ = { style: { display: "flex", "align-items": "center" } }, b_ = {
  class: "panel-title",
  style: { flex: "1" }
}, y_ = { class: "text-default" }, v_ = {
  key: 0,
  class: "panel-body text-center"
}, x_ = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "300px" } }, E_ = {
  key: 1,
  class: "panel-body"
}, k_ = /* @__PURE__ */ kt({
  __name: "ConfirmedEvaluations",
  setup(e) {
    const { t } = Kt();
    Ke.register(Oe, Ss, Ts);
    const n = pt(!1), i = pt({
      less_than_30_days: 0,
      less_than_60_days: 0,
      more_than_60_days: 0
    }), s = async () => {
      var r, l;
      if (!n.value) {
        n.value = !0;
        try {
          const c = Me(((r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_base_url) || "", "/widgets/confirmed_evaluations"), u = (l = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : l.api_token;
          if (!u)
            throw new Error("API token is missing");
          const h = await window.fetch(c, {
            headers: {
              Authorization: `Bearer ${u}`
            }
          });
          if (!h.ok)
            throw new Error("Failed to fetch data");
          i.value = await h.json();
        } catch (c) {
          console.error(c);
        } finally {
          n.value = !1;
        }
      }
    };
    se(() => {
      s();
    });
    const o = Yt(() => ({
      labels: ["0 - 30", "31 - 60", "> 60"],
      datasets: [
        {
          data: [
            i.value.less_than_30_days || 0,
            i.value.less_than_60_days || 0,
            i.value.more_than_60_days || 0
          ],
          backgroundColor: ["#91cf50", "#ffbf00", "#f90000"]
        }
      ]
    })), a = {
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "bottom"
        }
      }
    };
    return (r, l) => (Y(), G("div", g_, [
      E("div", m_, [
        E("div", p_, [
          E("h6", b_, [
            E("span", y_, D(W(t)("confirmed_evaluations.title")), 1)
          ]),
          E("a", {
            href: "#",
            onClick: De(s, ["prevent"])
          }, l[0] || (l[0] = [
            E("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-refresh-ccw"
            }, [
              E("polyline", { points: "1 4 1 10 7 10" }),
              E("polyline", { points: "23 20 23 14 17 14" }),
              E("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (Y(), G("div", v_, [
        E("div", x_, [
          Pt(Ie, { width: 30 })
        ])
      ])) : (Y(), G("div", E_, [
        Pt(W(As), {
          data: o.value,
          options: a
        }, null, 8, ["data"])
      ]))
    ]));
  }
}), w_ = { class: "panel panel-white no-margin" }, O_ = { class: "panel-heading" }, T_ = { style: { display: "flex", "align-items": "center" } }, S_ = {
  class: "panel-title",
  style: { flex: "1" }
}, A_ = { class: "text-default" }, L_ = {
  key: 0,
  class: "panel-body text-center"
}, N_ = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "300px" } }, C_ = {
  key: 1,
  class: "panel-body"
}, D_ = /* @__PURE__ */ kt({
  __name: "ActiveVehicles",
  setup(e) {
    const { t } = Kt();
    Ke.register(Oe, Ss, Ts);
    const n = pt(!1), i = pt({
      activated: 0,
      ready_for_activation: 0,
      other: 0,
      total: 0
    }), s = async () => {
      var r, l;
      if (!n.value) {
        n.value = !0;
        try {
          const c = Me(((r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_base_url) || "", "/widgets/active_vehicles"), u = (l = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : l.api_token;
          if (!u)
            throw new Error("API token is missing");
          const h = await window.fetch(c, {
            headers: {
              Authorization: `Bearer ${u}`
            }
          });
          if (!h.ok)
            throw new Error("Failed to fetch data");
          i.value = await h.json();
        } catch (c) {
          console.error(c);
        } finally {
          n.value = !1;
        }
      }
    };
    se(() => {
      s();
    });
    const o = Yt(() => ({
      labels: [t("active_vehicles.activated"), t("active_vehicles.ready_for_activation"), t("active_vehicles.other")],
      datasets: [
        {
          data: [
            i.value.activated || 0,
            i.value.ready_for_activation || 0,
            i.value.other || 0
          ],
          backgroundColor: ["#91cf50", "#ffbf00", "#f90000"]
        }
      ]
    })), a = {
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "bottom"
        }
      }
    };
    return (r, l) => (Y(), G("div", w_, [
      E("div", O_, [
        E("div", T_, [
          E("h6", S_, [
            E("span", A_, D(W(t)("active_vehicles.title")), 1)
          ]),
          E("a", {
            href: "#",
            onClick: De(s, ["prevent"])
          }, l[0] || (l[0] = [
            E("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-refresh-ccw"
            }, [
              E("polyline", { points: "1 4 1 10 7 10" }),
              E("polyline", { points: "23 20 23 14 17 14" }),
              E("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (Y(), G("div", L_, [
        E("div", N_, [
          Pt(Ie, { width: 30 })
        ])
      ])) : (Y(), G("div", C_, [
        Pt(W(As), {
          data: o.value,
          options: a
        }, null, 8, ["data"])
      ]))
    ]));
  }
}), M_ = { class: "panel panel-white no-margin" }, I_ = { class: "panel-heading" }, P_ = { style: { display: "flex", "align-items": "center" } }, R_ = {
  class: "panel-title",
  style: { flex: "1" }
}, F_ = { class: "text-default" }, V_ = {
  key: 0,
  class: "panel-body text-center"
}, $_ = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "300px" } }, j_ = {
  key: 1,
  class: "panel-body"
}, W_ = /* @__PURE__ */ kt({
  __name: "StockAge",
  setup(e) {
    const { t } = Kt();
    Ke.register(Oe, Ss, Ts);
    const n = pt(!1), i = pt({
      less_than_60: 0,
      less_than_90: 0,
      more_than_90: 0
    }), s = async () => {
      var r, l;
      if (!n.value) {
        n.value = !0;
        try {
          const c = Me(((r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_base_url) || "", "/widgets/stock_age"), u = (l = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : l.api_token;
          if (!u)
            throw new Error("API token is missing");
          const h = await window.fetch(c, {
            headers: {
              Authorization: `Bearer ${u}`
            }
          });
          if (!h.ok)
            throw new Error("Failed to fetch data");
          i.value = await h.json();
        } catch (c) {
          console.error(c);
        } finally {
          n.value = !1;
        }
      }
    };
    se(() => {
      s();
    });
    const o = Yt(() => ({
      labels: ["0 - 60", "61 - 90", "> 90"],
      datasets: [
        {
          data: [
            i.value.less_than_60 || 0,
            i.value.less_than_90 || 0,
            i.value.more_than_90 || 0
          ],
          backgroundColor: ["#91cf50", "#ffbf00", "#f90000"]
        }
      ]
    })), a = {
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "bottom"
        }
      }
    };
    return (r, l) => (Y(), G("div", M_, [
      E("div", I_, [
        E("div", P_, [
          E("h6", R_, [
            E("span", F_, D(W(t)("stock_age.title")), 1)
          ]),
          E("a", {
            href: "#",
            onClick: De(s, ["prevent"])
          }, l[0] || (l[0] = [
            E("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-refresh-ccw"
            }, [
              E("polyline", { points: "1 4 1 10 7 10" }),
              E("polyline", { points: "23 20 23 14 17 14" }),
              E("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (Y(), G("div", V_, [
        E("div", $_, [
          Pt(Ie, { width: 30 })
        ])
      ])) : (Y(), G("div", j_, [
        Pt(W(As), {
          data: o.value,
          options: a
        }, null, 8, ["data"])
      ]))
    ]));
  }
}), z_ = { class: "panel panel-white no-margin" }, H_ = { class: "panel-heading" }, U_ = { style: { display: "flex", "align-items": "center" } }, B_ = {
  class: "panel-title",
  style: { flex: "1" }
}, Y_ = { class: "text-default" }, X_ = { class: "panel-heading-meta" }, K_ = {
  key: 0,
  class: "panel-body text-center"
}, G_ = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "229px" } }, q_ = {
  key: 1,
  class: "panel-body no-padding"
}, Q_ = { class: "table" }, J_ = {
  width: "180",
  class: "text-center"
}, Z_ = {
  width: "180",
  class: "text-center"
}, tg = { class: "text-center" }, eg = { class: "text-center" }, ng = { class: "text-center" }, ig = { class: "text-center" }, sg = { class: "text-center" }, og = { class: "text-center" }, ag = { class: "text-center" }, rg = { class: "text-center" }, lg = { class: "text-center" }, cg = { class: "text-center" }, ug = /* @__PURE__ */ kt({
  __name: "SummaryByPhase",
  setup(e) {
    const { t } = Kt(), n = pt(!1), i = pt({
      confirmed_evaluations: {
        total: 0,
        average: 0
      },
      evaluations: {
        total: 0,
        average: 0
      },
      vehicles_for_delivery: {
        total: 0,
        average: 0
      },
      vehicles_in_preparation: {
        total: 0,
        average: 0
      },
      vehicles_in_sale: {
        total: 0,
        average: 0
      }
    }), s = async () => {
      var a, r;
      if (!n.value) {
        n.value = !0;
        try {
          const l = Me(((a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_base_url) || "", "/widgets/summary_by_phase"), c = (r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_token;
          if (!c)
            throw new Error("API token is missing");
          const u = await window.fetch(l, {
            headers: {
              Authorization: `Bearer ${c}`
            }
          });
          if (!u.ok)
            throw new Error("Failed to fetch data");
          i.value = await u.json();
        } catch (l) {
          console.error(l);
        } finally {
          n.value = !1;
        }
      }
    }, o = Yt(() => Object.values(i.value).reduce((a, r) => a + r.total, 0));
    return se(() => {
      s();
    }), (a, r) => (Y(), G("div", z_, [
      E("div", H_, [
        E("div", U_, [
          E("h6", B_, [
            E("span", Y_, D(W(t)("summary_by_phase.title")), 1)
          ]),
          E("div", X_, [
            E("span", null, [
              Nt(D(W(t)("summary_by_phase.heading_total")) + ": ", 1),
              E("strong", null, D(o.value), 1)
            ])
          ]),
          E("a", {
            href: "#",
            onClick: De(s, ["prevent"])
          }, r[0] || (r[0] = [
            E("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-refresh-ccw"
            }, [
              E("polyline", { points: "1 4 1 10 7 10" }),
              E("polyline", { points: "23 20 23 14 17 14" }),
              E("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (Y(), G("div", K_, [
        E("div", G_, [
          Pt(Ie, { width: 30 })
        ])
      ])) : (Y(), G("div", q_, [
        E("table", Q_, [
          E("thead", null, [
            E("tr", null, [
              E("th", null, D(W(t)("summary_by_phase.phase")), 1),
              E("th", J_, D(W(t)("summary_by_phase.total")), 1),
              E("th", Z_, D(W(t)("summary_by_phase.average")), 1)
            ])
          ]),
          E("tbody", null, [
            E("tr", null, [
              E("td", null, D(W(t)("summary_by_phase.evaluations")), 1),
              E("td", tg, D(i.value.evaluations.total), 1),
              E("td", eg, D(i.value.evaluations.average), 1)
            ]),
            E("tr", null, [
              E("td", null, D(W(t)("summary_by_phase.confirmed_evaluations")), 1),
              E("td", ng, D(i.value.confirmed_evaluations.total), 1),
              E("td", ig, D(i.value.confirmed_evaluations.average), 1)
            ]),
            E("tr", null, [
              E("td", null, D(W(t)("summary_by_phase.vehicles_in_preparation")), 1),
              E("td", sg, D(i.value.vehicles_in_preparation.total), 1),
              E("td", og, D(i.value.vehicles_in_preparation.average), 1)
            ]),
            E("tr", null, [
              E("td", null, D(W(t)("summary_by_phase.vehicles_in_sales")), 1),
              E("td", ag, D(i.value.vehicles_in_sale.total), 1),
              E("td", rg, D(i.value.vehicles_in_sale.average), 1)
            ]),
            E("tr", null, [
              E("td", null, D(W(t)("summary_by_phase.vehicles_for_delivery")), 1),
              E("td", lg, D(i.value.vehicles_for_delivery.total), 1),
              E("td", cg, D(i.value.vehicles_for_delivery.average), 1)
            ])
          ])
        ])
      ]))
    ]));
  }
}), hg = { class: "panel panel-white no-margin" }, dg = { class: "panel-heading" }, fg = { style: { display: "flex", "align-items": "center" } }, _g = {
  class: "panel-title",
  style: { flex: "1" }
}, gg = { class: "text-default" }, mg = { class: "panel-heading-meta" }, pg = {
  key: 0,
  class: "panel-body text-center"
}, bg = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "229px" } }, yg = {
  key: 1,
  class: "panel-body no-padding"
}, vg = { class: "table" }, xg = {
  width: "180",
  class: "text-right"
}, Eg = ["href"], kg = /* @__PURE__ */ kt({
  __name: "PreparationPhaseSummary",
  setup(e) {
    const { t } = Kt(), n = pt(!1), i = pt({
      vehicles: [],
      total: 0
    }), s = async () => {
      var a, r;
      if (!n.value) {
        n.value = !0;
        try {
          const l = Me(((a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_base_url) || "", "/widgets/preparation_phase_summary"), c = (r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_token;
          if (!c)
            throw new Error("API token is missing");
          const u = await window.fetch(l, {
            headers: {
              Authorization: `Bearer ${c}`
            }
          });
          if (!u.ok)
            throw new Error("Failed to fetch data");
          i.value = await u.json();
        } catch (l) {
          console.error(l);
        } finally {
          n.value = !1;
        }
      }
    }, o = (a) => a.days <= 60 ? "text-success" : a.days <= 90 ? "text-warning" : "text-danger";
    return se(() => {
      s();
    }), (a, r) => (Y(), G("div", hg, [
      E("div", dg, [
        E("div", fg, [
          E("h6", _g, [
            E("span", gg, D(W(t)("preparation_phase_summary.title")), 1)
          ]),
          E("div", mg, [
            E("span", null, [
              Nt(D(W(t)("preparation_phase_summary.heading_total")) + ": ", 1),
              E("strong", null, D(i.value.total), 1)
            ])
          ]),
          E("a", {
            href: "#",
            onClick: De(s, ["prevent"])
          }, r[0] || (r[0] = [
            E("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-refresh-ccw"
            }, [
              E("polyline", { points: "1 4 1 10 7 10" }),
              E("polyline", { points: "23 20 23 14 17 14" }),
              E("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (Y(), G("div", pg, [
        E("div", bg, [
          Pt(Ie, { width: 30 })
        ])
      ])) : (Y(), G("div", yg, [
        E("table", vg, [
          E("thead", null, [
            E("tr", null, [
              E("th", null, D(W(t)("preparation_phase_summary.vehicle")), 1),
              E("th", xg, D(W(t)("preparation_phase_summary.days")), 1)
            ])
          ]),
          E("tbody", null, [
            (Y(!0), G(Be, null, li(i.value.vehicles, (l) => (Y(), G("tr", {
              key: `preparation_summary_vehicle_${l.id}`
            }, [
              E("td", null, [
                E("a", {
                  href: `/sto2.php?w=priprema_vozila&d=edit&ID=${l.id}`
                }, D(l.title), 9, Eg)
              ]),
              E("td", {
                class: va(["text-right", o(l)])
              }, D(l.days), 3)
            ]))), 128))
          ])
        ])
      ]))
    ]));
  }
}), wg = { class: "panel panel-white no-margin" }, Og = { class: "panel-heading" }, Tg = { style: { display: "flex", "align-items": "center" } }, Sg = {
  class: "panel-title",
  style: { flex: "1" }
}, Ag = { class: "text-default" }, Lg = { class: "panel-heading-meta" }, Ng = {
  key: 0,
  class: "panel-body text-center"
}, Cg = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "234px" } }, Dg = {
  key: 1,
  class: "panel-body no-padding"
}, Mg = { class: "table" }, Ig = ["href"], Pg = { class: "text-size-small no-margin" }, Rg = { class: "text-right" }, Fg = /* @__PURE__ */ kt({
  __name: "PlannedDeliveries",
  setup(e) {
    const { t } = Kt(), n = pt(!1), i = pt({
      vehicles: [],
      total: 0,
      soon_total: 0
    }), s = async () => {
      var a, r;
      if (!n.value) {
        n.value = !0;
        try {
          const l = Me(((a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_base_url) || "", "/widgets/planned_deliveries"), c = (r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_token;
          if (!c)
            throw new Error("API token is missing");
          const u = await window.fetch(l, {
            headers: {
              Authorization: `Bearer ${c}`
            }
          });
          if (!u.ok)
            throw new Error("Failed to fetch data");
          i.value = await u.json();
        } catch (l) {
          console.error(l);
        } finally {
          n.value = !1;
        }
      }
    }, o = (a) => {
      const r = new Date(a), l = r.getDate().toString().padStart(2, "0"), c = (r.getMonth() + 1).toString().padStart(2, "0"), u = r.getFullYear(), h = r.getHours().toString().padStart(2, "0"), d = r.getMinutes().toString().padStart(2, "0");
      return `${l}.${c}.${u}. ${h}:${d}`;
    };
    return se(() => {
      s();
    }), (a, r) => (Y(), G("div", wg, [
      E("div", Og, [
        E("div", Tg, [
          E("h6", Sg, [
            E("span", Ag, D(W(t)("planned_deliveries.title")), 1)
          ]),
          E("div", Lg, [
            E("span", null, [
              Nt(D(W(t)("planned_deliveries.heading_soon_total")) + ": ", 1),
              E("strong", null, D(i.value.soon_total), 1),
              Nt(" / " + D(W(t)("planned_deliveries.heading_total")) + ": ", 1),
              E("strong", null, D(i.value.total), 1)
            ])
          ]),
          E("a", {
            href: "#",
            onClick: De(s, ["prevent"])
          }, r[0] || (r[0] = [
            E("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-refresh-ccw"
            }, [
              E("polyline", { points: "1 4 1 10 7 10" }),
              E("polyline", { points: "23 20 23 14 17 14" }),
              E("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (Y(), G("div", Ng, [
        E("div", Cg, [
          Pt(Ie, { width: 30 })
        ])
      ])) : (Y(), G("div", Dg, [
        E("table", Mg, [
          E("tbody", null, [
            (Y(!0), G(Be, null, li(i.value.vehicles, (l) => (Y(), G("tr", {
              key: `planned_delivery_vehicle_${l.id}`
            }, [
              E("td", null, [
                E("a", {
                  href: `/sto2.php?w=predaja_vozila&d=edit&ID=${l.id}`,
                  class: "display-block mb-5"
                }, D(l.title), 9, Ig),
                E("p", Pg, D(l.sold_by ? l.sold_by : l.created_by), 1)
              ]),
              E("td", Rg, D(o(l.planned_delivery)), 1)
            ]))), 128))
          ])
        ])
      ]))
    ]));
  }
}), Vg = {
  sale_summary_by_dealer: {
    columns: 12,
    component: Bu
  },
  confirmed_evaluations: {
    columns: 4,
    component: k_
  },
  active_vehicles: {
    columns: 4,
    component: D_
  },
  stock_age: {
    columns: 4,
    component: W_
  },
  summary_by_phase: {
    columns: 4,
    component: ug
  },
  preparation_phase_summary: {
    columns: 4,
    component: kg
  },
  planned_deliveries: {
    columns: 4,
    component: Fg
  }
}, $g = { class: "widget-canvas" }, jg = /* @__PURE__ */ kt({
  __name: "WidgetCanvas",
  props: {
    widgets: {}
  },
  setup(e) {
    const t = e, n = Yt(() => t.widgets.map((i) => {
      const s = Vg[i];
      return s ? { name: i, ...s } : (console.error(`Widget "${i}" not found`), null);
    }).filter(Boolean));
    return (i, s) => (Y(), G("div", $g, [
      (Y(!0), G(Be, null, li(n.value, (o) => (Y(), Wr(zr(o == null ? void 0 : o.component), {
        key: o == null ? void 0 : o.name,
        class: va(`widget col-${o == null ? void 0 : o.columns}`)
      }, null, 8, ["class"]))), 128))
    ]));
  }
}), Wg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, zg = /* @__PURE__ */ Wg(jg, [["__scopeId", "data-v-7e03751d"]]), Hg = { class: "content" }, Ug = /* @__PURE__ */ kt({
  __name: "App",
  setup(e) {
    var n;
    const t = pt(((n = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : n.widgets) || []);
    return (i, s) => (Y(), G("div", Hg, [
      Pt(zg, { widgets: t.value }, null, 8, ["widgets"])
    ]));
  }
}), Bg = {
  sale_summary_by_dealer: {
    title: "Sales results",
    dealer: "Dealership",
    current_month: "Current month",
    current_year: "Current year",
    evaluations: "Evaluation",
    confirmed_evaluations: "Confirmed evaluation",
    sold: "Sold",
    delivered: "Delivered"
  },
  confirmed_evaluations: {
    title: "Confirmed evaluation"
  },
  active_vehicles: {
    title: "Activated vehicles",
    activated: "Active",
    ready_for_activation: "Ready for activation",
    other: "Other"
  },
  stock_age: {
    title: "Vehicle stock"
  },
  summary_by_phase: {
    title: "Number of vehicles per phase",
    heading_total: "Total number of vehicles",
    phase: "Phase",
    total: "Number of vehicles	",
    average: "Average days",
    confirmed_evaluations: "Confirmed evaluation",
    evaluations: "Vehicles in evaluation",
    vehicles_in_preparation: "Vehicles in preparation / repair",
    vehicles_in_sales: "Vehicles for sale",
    vehicles_for_delivery: "Vehicles for delivery"
  },
  preparation_phase_summary: {
    title: "Vehicles in preparation",
    heading_total: "Total number of vehicles",
    vehicle: "Vehicle",
    days: "Number of days"
  },
  planned_deliveries: {
    title: "Delivery plan",
    heading_soon_total: "Delivery in the next 5 days",
    heading_total: "total"
  }
}, Yg = {
  sale_summary_by_dealer: {
    title: "Rezultati prodaje",
    dealer: "Koncesionar",
    current_month: "Trenutni mjesec",
    current_year: "Trenutna godina",
    evaluations: "Procjene",
    confirmed_evaluations: "Potvrđene procjene",
    sold: "Prodana",
    delivered: "Isporučena"
  },
  confirmed_evaluations: {
    title: "Potvrđene procjene"
  },
  active_vehicles: {
    title: "Aktivirana vozila",
    activated: "Aktivna",
    ready_for_activation: "Spremna za aktivaciju",
    other: "Ostala"
  },
  stock_age: {
    title: "Zaliha vozila"
  },
  summary_by_phase: {
    title: "Broj vozila po fazama",
    heading_total: "Ukupan broj vozila",
    phase: "Faza",
    total: "Broj vozila",
    average: "Prosječan broj dana",
    confirmed_evaluations: "Potvrđene procjene",
    evaluations: "Vozila u procjeni",
    vehicles_in_preparation: "Vozila u pripremi / popravku",
    vehicles_in_sales: "Vozila u prodaji",
    vehicles_for_delivery: "Vozila za isporuku"
  },
  preparation_phase_summary: {
    title: "Vozila u pripremi",
    heading_total: "Ukupan broj vozila",
    vehicle: "Vozilo",
    days: "Broj dana"
  },
  planned_deliveries: {
    title: "Plan ispotuka",
    heading_soon_total: "Isporuka u idućih 5 dana",
    heading_total: "ukupno"
  }
}, Xg = {
  sale_summary_by_dealer: {
    title: "Rezultati prodaje",
    dealer: "Koncesionar",
    current_month: "Trenutni mesec",
    current_year: "Trenutno leto",
    evaluations: "Cenitve",
    confirmed_evaluations: "Potrjene cenitve",
    sold: "Prodana",
    delivered: "Odpremljena"
  },
  confirmed_evaluations: {
    title: "Potrjene cenitve"
  },
  active_vehicles: {
    title: "Aktivirana vozila",
    activated: "Aktivna",
    ready_for_activation: "Pripravljean za aktivacijo",
    other: "Ostala"
  },
  stock_age: {
    title: "Zaloga vozil"
  },
  summary_by_phase: {
    title: "Število vozil po fazah",
    heading_total: "Skupno število vozil",
    phase: "Faza",
    total: "Število vozil",
    average: "Povprečno število dni",
    confirmed_evaluations: "Potrjene cenitve",
    evaluations: "Vozila na cenitvi",
    vehicles_in_preparation: "Vozila v pripravi/popravilu",
    vehicles_in_sales: "Vozila v prodaji",
    vehicles_for_delivery: "Vozila za odpremo"
  },
  preparation_phase_summary: {
    title: "Vozila v pripravi",
    heading_total: "Skupno število vozil",
    vehicle: "Vozilo",
    days: "Število dni"
  },
  planned_deliveries: {
    title: "Plan odprem",
    heading_soon_total: "Odpreme v prihodnjih 5 dnevih",
    heading_total: "skupno"
  }
}, Kg = {
  sale_summary_by_dealer: {
    title: "Rezultati prodaje",
    dealer: "Distributer",
    current_month: "Trenutni mesec",
    current_year: "Trenutna godina",
    evaluations: "Procene",
    confirmed_evaluations: "Potvrđene procene",
    sold: "Prodana",
    delivered: "Isporučena"
  },
  confirmed_evaluations: {
    title: "Potvrđene procene"
  },
  active_vehicles: {
    title: "Aktivirana vozila",
    activated: "Aktivna",
    ready_for_activation: "Spremna za aktivaciju",
    other: "Ostala"
  },
  stock_age: {
    title: "Zaliha vozila"
  },
  summary_by_phase: {
    title: "Broj vozila po fazama",
    heading_total: "Ukupan broj vozila",
    phase: "Faza",
    total: "Broj vozila",
    average: "Prosečan broj dana",
    confirmed_evaluations: "Potvrđene procene",
    evaluations: "Vozila u proceni",
    vehicles_in_preparation: "Vozila u pripremi / popravku",
    vehicles_in_sales: "Vozila u prodaji",
    vehicles_for_delivery: "Vozila za isporuku"
  },
  preparation_phase_summary: {
    title: "Vozila u pripremi",
    heading_total: "Ukupan broj vozila",
    vehicle: "Vozilo",
    days: "Broj dana"
  },
  planned_deliveries: {
    title: "Plan isporuka",
    heading_soon_total: "Isporuka u idućih 5 dana",
    heading_total: "ukupno"
  }
}, Gg = {
  sale_summary_by_dealer: {
    title: "Rezultati prodaje",
    dealer: "Koncesionar",
    current_month: "Trenutni mjesec",
    current_year: "Trenutna godina",
    evaluations: "Procjene",
    confirmed_evaluations: "Potvrđene procjene",
    sold: "Prodana",
    delivered: "Isporučena"
  },
  confirmed_evaluations: {
    title: "Potvrđene procjene"
  },
  active_vehicles: {
    title: "Aktivirana vozila",
    activated: "Aktivna",
    ready_for_activation: "Spremna za aktivaciju",
    other: "Ostala"
  },
  stock_age: {
    title: "Zaliha vozila"
  },
  summary_by_phase: {
    title: "Broj vozila po fazama",
    heading_total: "Ukupan broj vozila",
    phase: "Faza",
    total: "Broj vozila",
    average: "Prosječan broj dana",
    confirmed_evaluations: "Potvrđene procjene",
    evaluations: "Vozila u procjeni",
    vehicles_in_preparation: "Vozila u pripremi / popravku",
    vehicles_in_sales: "Vozila u prodaji",
    vehicles_for_delivery: "Vozila za isporuku"
  },
  preparation_phase_summary: {
    title: "Vozila u pripremi",
    heading_total: "Ukupan broj vozila",
    vehicle: "Vozilo",
    days: "Broj dana"
  },
  planned_deliveries: {
    title: "Plan ispotuka",
    heading_soon_total: "Isporuka u idućih 5 dana",
    heading_total: "ukupno"
  }
}, qg = {
  sale_summary_by_dealer: {
    title: "Rezultati prodaje",
    dealer: "Distrubuter",
    current_month: "Trenutni mjesec",
    current_year: "Trenutna godina",
    evaluations: "Procjene",
    confirmed_evaluations: "Potvrđene procjene",
    sold: "Prodata",
    delivered: "Isporučena"
  },
  confirmed_evaluations: {
    title: "Potvrđene procjene"
  },
  active_vehicles: {
    title: "Aktivirana vozila",
    activated: "Aktivna",
    ready_for_activation: "Spremna za aktivaciju",
    other: "Ostala"
  },
  stock_age: {
    title: "Zaliha vozila"
  },
  summary_by_phase: {
    title: "Broj vozila po fazama",
    heading_total: "Ukupan broj vozila",
    phase: "Faza",
    total: "Broj vozila",
    average: "Prosječan broj dana",
    confirmed_evaluations: "Potvrđene procjene",
    evaluations: "Vozila u procjeni",
    vehicles_in_preparation: "Vozila u pripremi / popravku",
    vehicles_in_sales: "Vozila u prodaji",
    vehicles_for_delivery: "Vozila za isporuku"
  },
  preparation_phase_summary: {
    title: "Vozila u pripremi",
    heading_total: "Ukupan broj vozila",
    vehicle: "Vozilo",
    days: "Broj dana"
  },
  planned_deliveries: {
    title: "Plan ispotuka",
    heading_soon_total: "Isporuka u idućih 5 dana",
    heading_total: "ukupno"
  }
}, Qg = {
  sale_summary_by_dealer: {
    title: "Rezultatet e shitjes",
    dealer: "Dileri",
    current_month: "Muaji aktual",
    current_year: "Viti aktual",
    evaluations: "Vlerësimet",
    confirmed_evaluations: "Vlerësimet e vërtetuara",
    sold: "Të shitura",
    delivered: "Të dorëzuara"
  },
  confirmed_evaluations: {
    title: "Vlerësimet e vërtetuara"
  },
  active_vehicles: {
    title: "Automjetet aktive",
    activated: "Aktive",
    ready_for_activation: "Gati për tu aktivizuar",
    other: "Të tjera"
  },
  stock_age: {
    title: "Stoku i automjeteve"
  },
  summary_by_phase: {
    title: "Numri i automjeteve për fazë",
    heading_total: "Numri total i automjeteve:",
    phase: "Automjeti",
    total: "Numri i automjeteve",
    average: "Numri mesatar i ditëve",
    confirmed_evaluations: "Vlerësimet e vërtetuara",
    evaluations: "Automjetet në vlerësim",
    vehicles_in_preparation: "Automjete në përgatitje / riparim",
    vehicles_in_sales: "Automjete në shitje",
    vehicles_for_delivery: "Automjete për dorëzim"
  },
  preparation_phase_summary: {
    title: "Automjete në përgatitje",
    heading_total: "Numri total i automjeteve",
    vehicle: "Automjeti",
    days: "Numri i ditëve"
  },
  planned_deliveries: {
    title: "Plani i dorëzimit",
    heading_soon_total: "Dorëzimi në 5 ditët e ardhshme",
    heading_total: "totali"
  }
}, Jg = {
  sale_summary_by_dealer: {
    title: "Sales results",
    dealer: "Dealership",
    current_month: "Current month",
    current_year: "Current year",
    evaluations: "Evaluation",
    confirmed_evaluations: "Confirmed evaluation",
    sold: "Sold",
    delivered: "Delivered"
  },
  confirmed_evaluations: {
    title: "Confirmed evaluation"
  },
  active_vehicles: {
    title: "Activated vehicles",
    activated: "Active",
    ready_for_activation: "Ready for activation",
    other: "Other"
  },
  stock_age: {
    title: "Vehicle stock"
  },
  summary_by_phase: {
    title: "Number of vehicles per phase",
    heading_total: "Total number of vehicles",
    phase: "Phase",
    total: "Number of vehicles	",
    average: "Average days",
    confirmed_evaluations: "Confirmed evaluation",
    evaluations: "Vehicles in evaluation",
    vehicles_in_preparation: "Vehicles in preparation / repair",
    vehicles_in_sales: "Vehicles for sale",
    vehicles_for_delivery: "Vehicles for delivery"
  },
  preparation_phase_summary: {
    title: "Vehicles in preparation",
    heading_total: "Total number of vehicles",
    vehicle: "Vehicle",
    days: "Number of days"
  },
  planned_deliveries: {
    title: "Delivery plan",
    heading_soon_total: "Delivery in the next 5 days",
    heading_total: "total"
  }
};
var pa;
const Zg = au({
  locale: ((pa = window.DASHBOARD_STATE) == null ? void 0 : pa.locale) || "hr",
  fallbackLocale: "en",
  messages: {
    en: Bg,
    hr: Yg,
    si: Xg,
    rs: Kg,
    ba: Gg,
    me: qg,
    rks: Qg,
    mk: Jg
  }
}), Lr = Hr(Ug);
Lr.use(Zg);
Lr.mount("#app");
