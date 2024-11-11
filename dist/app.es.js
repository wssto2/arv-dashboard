var Wd = Object.defineProperty;
var Ud = (e, t, n) => t in e ? Wd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => Ud(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ln(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, gs = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Pe = () => {
}, Bd = () => !1, Ei = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), io = (e) => e.startsWith("onUpdate:"), Te = Object.assign, ea = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zd = Object.prototype.hasOwnProperty, le = (e, t) => zd.call(e, t), X = Array.isArray, Bn = (e) => Do(e) === "[object Map]", vu = (e) => Do(e) === "[object Set]", J = (e) => typeof e == "function", we = (e) => typeof e == "string", Dn = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", ta = (e) => (ve(e) || J(e)) && J(e.then) && J(e.catch), yu = Object.prototype.toString, Do = (e) => yu.call(e), na = (e) => Do(e).slice(8, -1), Eu = (e) => Do(e) === "[object Object]", sa = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gs = /* @__PURE__ */ ln(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yd = /* @__PURE__ */ ln(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ao = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Kd = /-(\w)/g, tt = Ao(
  (e) => e.replace(Kd, (t, n) => n ? n.toUpperCase() : "")
), Gd = /\B([A-Z])/g, Nn = Ao(
  (e) => e.replace(Gd, "-$1").toLowerCase()
), Jn = Ao((e) => e.charAt(0).toUpperCase() + e.slice(1)), Vn = Ao(
  (e) => e ? `on${Jn(e)}` : ""
), xn = (e, t) => !Object.is(e, t), Cs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, oo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Xd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Qa;
const xi = () => Qa || (Qa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ko(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = we(s) ? Zd(s) : ko(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (we(e) || ve(e))
    return e;
}
const qd = /;(?![^(]*\))/g, Jd = /:([^]+)/, Qd = /\/\*[^]*?\*\//g;
function Zd(e) {
  const t = {};
  return e.replace(Qd, "").split(qd).forEach((n) => {
    if (n) {
      const s = n.split(Jd);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Oi(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const s = Oi(e[n]);
      s && (t += s + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const eh = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", th = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", nh = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", sh = /* @__PURE__ */ ln(eh), ih = /* @__PURE__ */ ln(th), oh = /* @__PURE__ */ ln(nh), rh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ah = /* @__PURE__ */ ln(rh);
function xu(e) {
  return !!e || e === "";
}
const Ou = (e) => !!(e && e.__v_isRef === !0), z = (e) => we(e) ? e : e == null ? "" : X(e) || ve(e) && (e.toString === yu || !J(e.toString)) ? Ou(e) ? z(e.value) : JSON.stringify(e, Nu, 2) : String(e), Nu = (e, t) => Ou(t) ? Nu(e, t.value) : Bn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[Go(s, o) + " =>"] = i, n),
    {}
  )
} : vu(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Go(n))
} : Dn(t) ? Go(t) : ve(t) && !X(t) && !Eu(t) ? String(t) : t, Go = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Dn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function jt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let gt;
class wu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = gt, !t && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = gt;
      try {
        return gt = this, t();
      } finally {
        gt = n;
      }
    } else process.env.NODE_ENV !== "production" && jt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    gt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    gt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function lh(e) {
  return new wu(e);
}
function ch() {
  return gt;
}
let pe;
const Xo = /* @__PURE__ */ new WeakSet();
class Su {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, gt && gt.active && gt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xo.has(this) && (Xo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Du(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Za(this), Au(this);
    const t = pe, n = St;
    pe = this, St = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && pe !== this && jt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ku(this), pe = t, St = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ra(t);
      this.deps = this.depsTail = void 0, Za(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    mr(this) && this.run();
  }
  get dirty() {
    return mr(this);
  }
}
let Tu = 0, Xs, qs;
function Du(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qs, qs = e;
    return;
  }
  e.next = Xs, Xs = e;
}
function ia() {
  Tu++;
}
function oa() {
  if (--Tu > 0)
    return;
  if (qs) {
    let t = qs;
    for (qs = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xs; ) {
    let t = Xs;
    for (Xs = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Au(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ku(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ra(s), uh(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function mr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cu(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ri))
    return;
  e.globalVersion = ri;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !mr(e)) {
    e.flags &= -3;
    return;
  }
  const n = pe, s = St;
  pe = e, St = !0;
  try {
    Au(e);
    const i = e.fn(e._value);
    (t.version === 0 || xn(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    pe = n, St = s, ku(e), e.flags &= -3;
  }
}
function ra(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ra(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function uh(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let St = !0;
const Mu = [];
function cn() {
  Mu.push(St), St = !1;
}
function un() {
  const e = Mu.pop();
  St = e === void 0 ? !0 : e;
}
function Za(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = pe;
    pe = void 0;
    try {
      t();
    } finally {
      pe = n;
    }
  }
}
let ri = 0;
class fh {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class aa {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!pe || !St || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new fh(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, Lu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = pe.depsTail, n.nextDep = void 0, pe.depsTail.nextDep = n, pe.depsTail = n, pe.deps === n && (pe.deps = s);
    }
    return process.env.NODE_ENV !== "production" && pe.onTrack && pe.onTrack(
      Te(
        {
          effect: pe
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ri++, this.notify(t);
  }
  notify(t) {
    ia();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Te(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      oa();
    }
  }
}
function Lu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Lu(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const br = /* @__PURE__ */ new WeakMap(), zn = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), vr = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ai = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ie(e, t, n) {
  if (St && pe) {
    let s = br.get(e);
    s || br.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new aa()), i.map = s, i.key = n), process.env.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ft(e, t, n, s, i, o) {
  const r = br.get(e);
  if (!r) {
    ri++;
    return;
  }
  const a = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: i,
      oldTarget: o
    }) : l.trigger());
  };
  if (ia(), t === "clear")
    r.forEach(a);
  else {
    const l = X(e), c = l && sa(n);
    if (l && n === "length") {
      const u = Number(s);
      r.forEach((f, d) => {
        (d === "length" || d === ai || !Dn(d) && d >= u) && a(f);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && a(r.get(n)), c && a(r.get(ai)), t) {
        case "add":
          l ? c && a(r.get("length")) : (a(r.get(zn)), Bn(e) && a(r.get(vr)));
          break;
        case "delete":
          l || (a(r.get(zn)), Bn(e) && a(r.get(vr)));
          break;
        case "set":
          Bn(e) && a(r.get(zn));
          break;
      }
  }
  oa();
}
function ls(e) {
  const t = ee(e);
  return t === e ? t : (Ie(t, "iterate", ai), nt(e) ? t : t.map(Ge));
}
function Co(e) {
  return Ie(e = ee(e), "iterate", ai), e;
}
const dh = {
  __proto__: null,
  [Symbol.iterator]() {
    return qo(this, Symbol.iterator, Ge);
  },
  concat(...e) {
    return ls(this).concat(
      ...e.map((t) => X(t) ? ls(t) : t)
    );
  },
  entries() {
    return qo(this, "entries", (e) => (e[1] = Ge(e[1]), e));
  },
  every(e, t) {
    return Gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gt(this, "filter", e, t, (n) => n.map(Ge), arguments);
  },
  find(e, t) {
    return Gt(this, "find", e, t, Ge, arguments);
  },
  findIndex(e, t) {
    return Gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gt(this, "findLast", e, t, Ge, arguments);
  },
  findLastIndex(e, t) {
    return Gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jo(this, "includes", e);
  },
  indexOf(...e) {
    return Jo(this, "indexOf", e);
  },
  join(e) {
    return ls(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Jo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ms(this, "pop");
  },
  push(...e) {
    return Ms(this, "push", e);
  },
  reduce(e, ...t) {
    return el(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return el(this, "reduceRight", e, t);
  },
  shift() {
    return Ms(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ms(this, "splice", e);
  },
  toReversed() {
    return ls(this).toReversed();
  },
  toSorted(e) {
    return ls(this).toSorted(e);
  },
  toSpliced(...e) {
    return ls(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ms(this, "unshift", e);
  },
  values() {
    return qo(this, "values", Ge);
  }
};
function qo(e, t, n) {
  const s = Co(e), i = s[t]();
  return s !== e && !nt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = n(o.value)), o;
  }), i;
}
const hh = Array.prototype;
function Gt(e, t, n, s, i, o) {
  const r = Co(e), a = r !== e && !nt(e), l = r[t];
  if (l !== hh[t]) {
    const f = l.apply(e, o);
    return a ? Ge(f) : f;
  }
  let c = n;
  r !== e && (a ? c = function(f, d) {
    return n.call(this, Ge(f), d, e);
  } : n.length > 2 && (c = function(f, d) {
    return n.call(this, f, d, e);
  }));
  const u = l.call(r, c, s);
  return a && i ? i(u) : u;
}
function el(e, t, n, s) {
  const i = Co(e);
  let o = n;
  return i !== e && (nt(e) ? n.length > 3 && (o = function(r, a, l) {
    return n.call(this, r, a, l, e);
  }) : o = function(r, a, l) {
    return n.call(this, r, Ge(a), l, e);
  }), i[t](o, ...s);
}
function Jo(e, t, n) {
  const s = ee(e);
  Ie(s, "iterate", ai);
  const i = s[t](...n);
  return (i === -1 || i === !1) && vs(n[0]) ? (n[0] = ee(n[0]), s[t](...n)) : i;
}
function Ms(e, t, n = []) {
  cn(), ia();
  const s = ee(e)[t].apply(e, n);
  return oa(), un(), s;
}
const ph = /* @__PURE__ */ ln("__proto__,__v_isRef,__isVue"), Iu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Dn)
);
function gh(e) {
  Dn(e) || (e = String(e));
  const t = ee(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class Pu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (i ? o ? Hu : ju : o ? $u : Vu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = X(t);
    if (!i) {
      let l;
      if (r && (l = dh[n]))
        return l;
      if (n === "hasOwnProperty")
        return gh;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ae(t) ? t : s
    );
    return (Dn(n) ? Iu.has(n) : ph(n)) || (i || Ie(t, "get", n), o) ? a : Ae(a) ? r && sa(n) ? a : a.value : ve(a) ? i ? Wu(a) : la(a) : a;
  }
}
class Ru extends Pu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    if (!this._isShallow) {
      const l = rn(o);
      if (!nt(s) && !rn(s) && (o = ee(o), s = ee(s)), !X(t) && Ae(o) && !Ae(s))
        return l ? !1 : (o.value = s, !0);
    }
    const r = X(t) && sa(n) ? Number(n) < t.length : le(t, n), a = Reflect.set(
      t,
      n,
      s,
      Ae(t) ? t : i
    );
    return t === ee(i) && (r ? xn(s, o) && Ft(t, "set", n, s, o) : Ft(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = le(t, n), i = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && Ft(t, "delete", n, void 0, i), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Dn(n) || !Iu.has(n)) && Ie(t, "has", n), s;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      X(t) ? "length" : zn
    ), Reflect.ownKeys(t);
  }
}
class Fu extends Pu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && jt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && jt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const _h = /* @__PURE__ */ new Ru(), mh = /* @__PURE__ */ new Fu(), bh = /* @__PURE__ */ new Ru(!0), vh = /* @__PURE__ */ new Fu(!0), yr = (e) => e, ki = (e) => Reflect.getPrototypeOf(e);
function yh(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = ee(i), r = Bn(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = i[e](...s), u = n ? yr : t ? Er : Ge;
    return !t && Ie(
      o,
      "iterate",
      l ? vr : zn
    ), {
      // iterator protocol
      next() {
        const { value: f, done: d } = c.next();
        return d ? { value: f, done: d } : {
          value: a ? [u(f[0]), u(f[1])] : u(f),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ci(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      jt(
        `${Jn(e)} operation ${n}failed: target is readonly.`,
        ee(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Eh(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = ee(o), a = ee(i);
      e || (xn(i, a) && Ie(r, "get", i), Ie(r, "get", a));
      const { has: l } = ki(r), c = t ? yr : e ? Er : Ge;
      if (l.call(r, i))
        return c(o.get(i));
      if (l.call(r, a))
        return c(o.get(a));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ie(ee(i), "iterate", zn), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw, r = ee(o), a = ee(i);
      return e || (xn(i, a) && Ie(r, "has", i), Ie(r, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const r = this, a = r.__v_raw, l = ee(a), c = t ? yr : e ? Er : Ge;
      return !e && Ie(l, "iterate", zn), a.forEach((u, f) => i.call(o, c(u), c(f), r));
    }
  };
  return Te(
    n,
    e ? {
      add: Ci("add"),
      set: Ci("set"),
      delete: Ci("delete"),
      clear: Ci("clear")
    } : {
      add(i) {
        !t && !nt(i) && !rn(i) && (i = ee(i));
        const o = ee(this);
        return ki(o).has.call(o, i) || (o.add(i), Ft(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !nt(o) && !rn(o) && (o = ee(o));
        const r = ee(this), { has: a, get: l } = ki(r);
        let c = a.call(r, i);
        c ? process.env.NODE_ENV !== "production" && tl(r, a, i) : (i = ee(i), c = a.call(r, i));
        const u = l.call(r, i);
        return r.set(i, o), c ? xn(o, u) && Ft(r, "set", i, o, u) : Ft(r, "add", i, o), this;
      },
      delete(i) {
        const o = ee(this), { has: r, get: a } = ki(o);
        let l = r.call(o, i);
        l ? process.env.NODE_ENV !== "production" && tl(o, r, i) : (i = ee(i), l = r.call(o, i));
        const c = a ? a.call(o, i) : void 0, u = o.delete(i);
        return l && Ft(o, "delete", i, void 0, c), u;
      },
      clear() {
        const i = ee(this), o = i.size !== 0, r = process.env.NODE_ENV !== "production" ? Bn(i) ? new Map(i) : new Set(i) : void 0, a = i.clear();
        return o && Ft(
          i,
          "clear",
          void 0,
          void 0,
          r
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = yh(i, e, t);
  }), n;
}
function Mo(e, t) {
  const n = Eh(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    le(n, i) && i in s ? n : s,
    i,
    o
  );
}
const xh = {
  get: /* @__PURE__ */ Mo(!1, !1)
}, Oh = {
  get: /* @__PURE__ */ Mo(!1, !0)
}, Nh = {
  get: /* @__PURE__ */ Mo(!0, !1)
}, wh = {
  get: /* @__PURE__ */ Mo(!0, !0)
};
function tl(e, t, n) {
  const s = ee(n);
  if (s !== n && t.call(e, s)) {
    const i = na(e);
    jt(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Vu = /* @__PURE__ */ new WeakMap(), $u = /* @__PURE__ */ new WeakMap(), ju = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakMap();
function Sh(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Th(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sh(na(e));
}
function la(e) {
  return rn(e) ? e : Lo(
    e,
    !1,
    _h,
    xh,
    Vu
  );
}
function Dh(e) {
  return Lo(
    e,
    !1,
    bh,
    Oh,
    $u
  );
}
function Wu(e) {
  return Lo(
    e,
    !0,
    mh,
    Nh,
    ju
  );
}
function Vt(e) {
  return Lo(
    e,
    !0,
    vh,
    wh,
    Hu
  );
}
function Lo(e, t, n, s, i) {
  if (!ve(e))
    return process.env.NODE_ENV !== "production" && jt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Th(e);
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, a), a;
}
function Yn(e) {
  return rn(e) ? Yn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rn(e) {
  return !!(e && e.__v_isReadonly);
}
function nt(e) {
  return !!(e && e.__v_isShallow);
}
function vs(e) {
  return e ? !!e.__v_raw : !1;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function Ah(e) {
  return !le(e, "__v_skip") && Object.isExtensible(e) && oo(e, "__v_skip", !0), e;
}
const Ge = (e) => ve(e) ? la(e) : e, Er = (e) => ve(e) ? Wu(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Be(e) {
  return Uu(e, !1);
}
function ca(e) {
  return Uu(e, !0);
}
function Uu(e, t) {
  return Ae(e) ? e : new kh(e, t);
}
class kh {
  constructor(t, n) {
    this.dep = new aa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ee(t), this._value = n ? t : Ge(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || nt(t) || rn(t);
    t = s ? t : ee(t), xn(t, n) && (this._rawValue = t, this._value = s ? t : Ge(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ie(e) {
  return Ae(e) ? e.value : e;
}
const Ch = {
  get: (e, t, n) => t === "__v_raw" ? e : ie(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return Ae(i) && !Ae(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Bu(e) {
  return Yn(e) ? e : new Proxy(e, Ch);
}
class Mh {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new aa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ri - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return Du(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Cu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && jt("Write operation failed: computed value is readonly");
  }
}
function Lh(e, t, n = !1) {
  let s, i;
  J(e) ? s = e : (s = e.get, i = e.set);
  const o = new Mh(s, i, n);
  return process.env.NODE_ENV !== "production" && t && !n && (o.onTrack = t.onTrack, o.onTrigger = t.onTrigger), o;
}
const Mi = {}, ro = /* @__PURE__ */ new WeakMap();
let $n;
function Ih(e, t = !1, n = $n) {
  if (n) {
    let s = ro.get(n);
    s || ro.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && jt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ph(e, t, n = me) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = n, c = (S) => {
    (n.onWarn || jt)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (S) => i ? S : nt(S) || i === !1 || i === 0 ? mn(S, 1) : mn(S);
  let f, d, h, v, b = !1, E = !1;
  if (Ae(e) ? (d = () => e.value, b = nt(e)) : Yn(e) ? (d = () => u(e), b = !0) : X(e) ? (E = !0, b = e.some((S) => Yn(S) || nt(S)), d = () => e.map((S) => {
    if (Ae(S))
      return S.value;
    if (Yn(S))
      return u(S);
    if (J(S))
      return l ? l(S, 2) : S();
    process.env.NODE_ENV !== "production" && c(S);
  })) : J(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (h) {
      cn();
      try {
        h();
      } finally {
        un();
      }
    }
    const S = $n;
    $n = f;
    try {
      return l ? l(e, 3, [v]) : e(v);
    } finally {
      $n = S;
    }
  } : (d = Pe, process.env.NODE_ENV !== "production" && c(e)), t && i) {
    const S = d, L = i === !0 ? 1 / 0 : i;
    d = () => mn(S(), L);
  }
  const _ = ch(), y = () => {
    f.stop(), _ && ea(_.effects, f);
  };
  if (o && t) {
    const S = t;
    t = (...L) => {
      S(...L), y();
    };
  }
  let N = E ? new Array(e.length).fill(Mi) : Mi;
  const w = (S) => {
    if (!(!(f.flags & 1) || !f.dirty && !S))
      if (t) {
        const L = f.run();
        if (i || b || (E ? L.some((A, F) => xn(A, N[F])) : xn(L, N))) {
          h && h();
          const A = $n;
          $n = f;
          try {
            const F = [
              L,
              // pass undefined as the old value when it's changed for the first time
              N === Mi ? void 0 : E && N[0] === Mi ? [] : N,
              v
            ];
            l ? l(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            ), N = L;
          } finally {
            $n = A;
          }
        }
      } else
        f.run();
  };
  return a && a(w), f = new Su(d), f.scheduler = r ? () => r(w, !1) : w, v = (S) => Ih(S, !1, f), h = f.onStop = () => {
    const S = ro.get(f);
    if (S) {
      if (l)
        l(S, 4);
      else
        for (const L of S) L();
      ro.delete(f);
    }
  }, process.env.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? s ? w(!0) : N = f.run() : r ? r(w.bind(null, !0), !0) : f.run(), y.pause = f.pause.bind(f), y.resume = f.resume.bind(f), y.stop = y, y;
}
function mn(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ae(e))
    mn(e.value, t, n);
  else if (X(e))
    for (let s = 0; s < e.length; s++)
      mn(e[s], t, n);
  else if (vu(e) || Bn(e))
    e.forEach((s) => {
      mn(s, t, n);
    });
  else if (Eu(e)) {
    for (const s in e)
      mn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && mn(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Kn = [];
function Xi(e) {
  Kn.push(e);
}
function qi() {
  Kn.pop();
}
let Qo = !1;
function V(e, ...t) {
  if (Qo) return;
  Qo = !0, cn();
  const n = Kn.length ? Kn[Kn.length - 1].component : null, s = n && n.appContext.config.warnHandler, i = Rh();
  if (s)
    ws(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var r, a;
          return (a = (r = o.toString) == null ? void 0 : r.call(o)) != null ? a : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${$o(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Fh(i)), console.warn(...o);
  }
  un(), Qo = !1;
}
function Rh() {
  let e = Kn[Kn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Fh(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Vh(n));
  }), t;
}
function Vh({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, i = ` at <${$o(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [i, ...$h(e.props), o] : [i + o];
}
function $h(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...zu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function zu(e, t, n) {
  return we(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ae(t) ? (t = zu(e, ee(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : J(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ee(t), n ? t : [`${e}=`, t]);
}
const ua = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function ws(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Ni(i, t, n);
  }
}
function Ht(e, t, n, s) {
  if (J(e)) {
    const i = ws(e, t, n, s);
    return i && ta(i) && i.catch((o) => {
      Ni(o, t, n);
    }), i;
  }
  if (X(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ht(e[o], t, n, s));
    return i;
  } else process.env.NODE_ENV !== "production" && V(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ni(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || me;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = process.env.NODE_ENV !== "production" ? ua[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      cn(), ws(o, null, 10, [
        e,
        l,
        c
      ]), un();
      return;
    }
  }
  jh(e, n, i, s, r);
}
function jh(e, t, n, s = !0, i = !1) {
  if (process.env.NODE_ENV !== "production") {
    const o = ua[t];
    if (n && Xi(n), V(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && qi(), s)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const et = [];
let Pt = -1;
const _s = [];
let gn = null, hs = 0;
const Yu = /* @__PURE__ */ Promise.resolve();
let ao = null;
const Hh = 100;
function Ku(e) {
  const t = ao || Yu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wh(e) {
  let t = Pt + 1, n = et.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = et[s], o = li(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Io(e) {
  if (!(e.flags & 1)) {
    const t = li(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= li(n) ? et.push(e) : et.splice(Wh(t), 0, e), e.flags |= 1, Gu();
  }
}
function Gu() {
  ao || (ao = Yu.then(Ju));
}
function Xu(e) {
  X(e) ? _s.push(...e) : gn && e.id === -1 ? gn.splice(hs + 1, 0, e) : e.flags & 1 || (_s.push(e), e.flags |= 1), Gu();
}
function nl(e, t, n = Pt + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < et.length; n++) {
    const s = et[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && fa(t, s))
        continue;
      et.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function qu(e) {
  if (_s.length) {
    const t = [...new Set(_s)].sort(
      (n, s) => li(n) - li(s)
    );
    if (_s.length = 0, gn) {
      gn.push(...t);
      return;
    }
    for (gn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), hs = 0; hs < gn.length; hs++) {
      const n = gn[hs];
      process.env.NODE_ENV !== "production" && fa(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gn = null, hs = 0;
  }
}
const li = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ju(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => fa(e, n) : Pe;
  try {
    for (Pt = 0; Pt < et.length; Pt++) {
      const n = et[Pt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ws(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Pt < et.length; Pt++) {
      const n = et[Pt];
      n && (n.flags &= -2);
    }
    Pt = -1, et.length = 0, qu(e), ao = null, (et.length || _s.length) && Ju(e);
  }
}
function fa(e, t) {
  const n = e.get(t) || 0;
  if (n > Hh) {
    const s = t.i, i = s && xa(s.type);
    return Ni(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let $t = !1;
const Ji = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (xi().__VUE_HMR_RUNTIME__ = {
  createRecord: Zo(Qu),
  rerender: Zo(zh),
  reload: Zo(Yh)
});
const Qn = /* @__PURE__ */ new Map();
function Uh(e) {
  const t = e.type.__hmrId;
  let n = Qn.get(t);
  n || (Qu(t, e.type), n = Qn.get(t)), n.instances.add(e);
}
function Bh(e) {
  Qn.get(e.type.__hmrId).instances.delete(e);
}
function Qu(e, t) {
  return Qn.has(e) ? !1 : (Qn.set(e, {
    initialDef: lo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function lo(e) {
  return Cf(e) ? e.__vccOpts : e;
}
function zh(e, t) {
  const n = Qn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, lo(s.type).render = t), s.renderCache = [], $t = !0, s.update(), $t = !1;
  }));
}
function Yh(e, t) {
  const n = Qn.get(e);
  if (!n) return;
  t = lo(t), sl(n.initialDef, t);
  const s = [...n.instances];
  for (let i = 0; i < s.length; i++) {
    const o = s[i], r = lo(o.type);
    let a = Ji.get(r);
    a || (r !== n.initialDef && sl(r, t), Ji.set(r, a = /* @__PURE__ */ new Set())), a.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (a.add(o), o.ceReload(t.styles), a.delete(o)) : o.parent ? Io(() => {
      $t = !0, o.parent.update(), $t = !1, a.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(r);
  }
  Xu(() => {
    Ji.clear();
  });
}
function sl(e, t) {
  Te(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Zo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Nt, Hs = [], xr = !1;
function wi(e, ...t) {
  Nt ? Nt.emit(e, ...t) : xr || Hs.push({ event: e, args: t });
}
function da(e, t) {
  var n, s;
  Nt = e, Nt ? (Nt.enabled = !0, Hs.forEach(({ event: i, args: o }) => Nt.emit(i, ...o)), Hs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    da(o, t);
  }), setTimeout(() => {
    Nt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, xr = !0, Hs = []);
  }, 3e3)) : (xr = !0, Hs = []);
}
function Kh(e, t) {
  wi("app:init", e, t, {
    Fragment: Xe,
    Text: Ss,
    Comment: Tt,
    Static: Zs
  });
}
function Gh(e) {
  wi("app:unmount", e);
}
const Xh = /* @__PURE__ */ ha(
  "component:added"
  /* COMPONENT_ADDED */
), Zu = /* @__PURE__ */ ha(
  "component:updated"
  /* COMPONENT_UPDATED */
), qh = /* @__PURE__ */ ha(
  "component:removed"
  /* COMPONENT_REMOVED */
), Jh = (e) => {
  Nt && typeof Nt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Nt.cleanupBuffer(e) && qh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ha(e) {
  return (t) => {
    wi(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Qh = /* @__PURE__ */ ef(
  "perf:start"
  /* PERFORMANCE_START */
), Zh = /* @__PURE__ */ ef(
  "perf:end"
  /* PERFORMANCE_END */
);
function ef(e) {
  return (t, n, s) => {
    wi(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ep(e, t, n) {
  wi(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ct = null, tf = null;
function co(e) {
  const t = ct;
  return ct = e, tf = e && e.type.__scopeId || null, t;
}
function tp(e, t = ct, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && gl(-1);
    const o = co(t);
    let r;
    try {
      r = e(...i);
    } finally {
      co(o), s._d && gl(1);
    }
    return process.env.NODE_ENV !== "production" && Zu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function nf(e) {
  Yd(e) && V("Do not use built-in directive ids as custom directive id: " + e);
}
function Mn(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[s];
    l && (cn(), Ht(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), un());
  }
}
const np = Symbol("_vte"), sp = (e) => e.__isTeleport;
function pa(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pa(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function it(e, t) {
  return J(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Te({ name: e.name }, t, { setup: e })
  ) : e;
}
function sf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ip = /* @__PURE__ */ new WeakSet();
function Or(e, t, n, s, i = !1) {
  if (X(e)) {
    e.forEach(
      (v, b) => Or(
        v,
        t && (X(t) ? t[b] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (Js(s) && !i)
    return;
  const o = s.shapeFlag & 4 ? Ea(s.component) : s.el, r = i ? null : o, { i: a, r: l } = e;
  if (process.env.NODE_ENV !== "production" && !a) {
    V(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, u = a.refs === me ? a.refs = {} : a.refs, f = a.setupState, d = ee(f), h = f === me ? () => !1 : (v) => process.env.NODE_ENV !== "production" && (le(d, v) && !Ae(d[v]) && V(
    `Template ref "${v}" used on a non-ref value. It will not work in the production build.`
  ), ip.has(d[v])) ? !1 : le(d, v);
  if (c != null && c !== l && (we(c) ? (u[c] = null, h(c) && (f[c] = null)) : Ae(c) && (c.value = null)), J(l))
    ws(l, a, 12, [r, u]);
  else {
    const v = we(l), b = Ae(l);
    if (v || b) {
      const E = () => {
        if (e.f) {
          const _ = v ? h(l) ? f[l] : u[l] : l.value;
          i ? X(_) && ea(_, o) : X(_) ? _.includes(o) || _.push(o) : v ? (u[l] = [o], h(l) && (f[l] = u[l])) : (l.value = [o], e.k && (u[e.k] = l.value));
        } else v ? (u[l] = r, h(l) && (f[l] = r)) : b ? (l.value = r, e.k && (u[e.k] = r)) : process.env.NODE_ENV !== "production" && V("Invalid template ref type:", l, `(${typeof l})`);
      };
      r ? (E.id = -1, ht(E, n)) : E();
    } else process.env.NODE_ENV !== "production" && V("Invalid template ref type:", l, `(${typeof l})`);
  }
}
xi().requestIdleCallback;
xi().cancelIdleCallback;
const Js = (e) => !!e.type.__asyncLoader, ga = (e) => e.type.__isKeepAlive;
function op(e, t) {
  of(e, "a", t);
}
function rp(e, t) {
  of(e, "da", t);
}
function of(e, t, n = Re) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Po(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      ga(i.parent.vnode) && ap(s, t, n, i), i = i.parent;
  }
}
function ap(e, t, n, s) {
  const i = Po(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ro(() => {
    ea(s[t], i);
  }, n);
}
function Po(e, t, n = Re, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      cn();
      const a = Si(n), l = Ht(t, n, e, r);
      return a(), un(), l;
    });
    return s ? i.unshift(o) : i.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Vn(ua[e].replace(/ hook$/, ""));
    V(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const fn = (e) => (t, n = Re) => {
  (!ui || e === "sp") && Po(e, (...s) => t(...s), n);
}, lp = fn("bm"), Wt = fn("m"), cp = fn(
  "bu"
), up = fn("u"), fp = fn(
  "bum"
), Ro = fn("um"), dp = fn(
  "sp"
), hp = fn("rtg"), pp = fn("rtc");
function gp(e, t = Re) {
  Po("ec", e, t);
}
const _p = "components", rf = Symbol.for("v-ndc");
function mp(e) {
  return we(e) ? bp(_p, e, !1) || e : e || rf;
}
function bp(e, t, n = !0, s = !1) {
  const i = ct || Re;
  if (i) {
    const o = i.type;
    {
      const a = xa(
        o,
        !1
      );
      if (a && (a === t || a === tt(t) || a === Jn(tt(t))))
        return o;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      il(i[e] || o[e], t) || // global registration
      il(i.appContext[e], t)
    );
    return !r && s ? o : (process.env.NODE_ENV !== "production" && n && !r && V(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else process.env.NODE_ENV !== "production" && V(
    `resolve${Jn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function il(e, t) {
  return e && (e[t] || e[tt(t)] || e[Jn(tt(t))]);
}
function Fo(e, t, n, s) {
  let i;
  const o = n, r = X(e);
  if (r || we(e)) {
    const a = r && Yn(e);
    let l = !1;
    a && (l = !nt(e), e = Co(e)), i = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++)
      i[c] = t(
        l ? Ge(e[c]) : e[c],
        c,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && V(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (ve(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const u = a[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
const Nr = (e) => e ? Af(e) ? Ea(e) : Nr(e.parent) : null, Gn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Vt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Vt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Vt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Vt(e.refs) : e.refs,
    $parent: (e) => Nr(e.parent),
    $root: (e) => Nr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ma(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Io(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ku.bind(e.proxy)),
    $watch: (e) => Jp.bind(e)
  })
), _a = (e) => e === "_" || e === "$", er = (e, t) => e !== me && !e.__isScriptSetup && le(e, t), af = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: a, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const h = r[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (er(s, t))
          return r[t] = 1, s[t];
        if (i !== me && le(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && le(c, t)
        )
          return r[t] = 3, o[t];
        if (n !== me && le(n, t))
          return r[t] = 4, n[t];
        wr && (r[t] = 0);
      }
    }
    const u = Gn[t];
    let f, d;
    if (u)
      return t === "$attrs" ? (Ie(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && ho()) : process.env.NODE_ENV !== "production" && t === "$slots" && Ie(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== me && le(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      d = l.config.globalProperties, le(d, t)
    )
      return d[t];
    process.env.NODE_ENV !== "production" && ct && (!we(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== me && _a(t[0]) && le(i, t) ? V(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ct && V(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return er(i, t) ? (i[t] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && le(i, t) ? (V(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== me && le(s, t) ? (s[t] = n, !0) : le(e.props, t) ? (process.env.NODE_ENV !== "production" && V(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && V(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: o }
  }, r) {
    let a;
    return !!n[r] || e !== me && le(e, r) || er(t, r) || (a = o[0]) && le(a, r) || le(s, r) || le(Gn, r) || le(i.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (af.ownKeys = (e) => (V(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function vp(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Gn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Gn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Pe
    });
  }), t;
}
function yp(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Pe
    });
  });
}
function Ep(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ee(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (_a(s[0])) {
        V(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: Pe
      });
    }
  });
}
function ol(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function xp() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? V(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let wr = !0;
function Op(e) {
  const t = ma(e), n = e.proxy, s = e.ctx;
  wr = !1, t.beforeCreate && rl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: h,
    updated: v,
    activated: b,
    deactivated: E,
    beforeDestroy: _,
    beforeUnmount: y,
    destroyed: N,
    unmounted: w,
    render: S,
    renderTracked: L,
    renderTriggered: A,
    errorCaptured: F,
    serverPrefetch: W,
    // public API
    expose: U,
    inheritAttrs: q,
    // assets
    components: B,
    directives: ge,
    filters: ke
  } = t, te = process.env.NODE_ENV !== "production" ? xp() : null;
  if (process.env.NODE_ENV !== "production") {
    const [Y] = e.propsOptions;
    if (Y)
      for (const G in Y)
        te("Props", G);
  }
  if (c && Np(c, s, te), r)
    for (const Y in r) {
      const G = r[Y];
      J(G) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, Y, {
        value: G.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[Y] = G.bind(n), process.env.NODE_ENV !== "production" && te("Methods", Y)) : process.env.NODE_ENV !== "production" && V(
        `Method "${Y}" has type "${typeof G}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !J(i) && V(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Y = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && ta(Y) && V(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ve(Y))
      process.env.NODE_ENV !== "production" && V("data() should return an object.");
    else if (e.data = la(Y), process.env.NODE_ENV !== "production")
      for (const G in Y)
        te("Data", G), _a(G[0]) || Object.defineProperty(s, G, {
          configurable: !0,
          enumerable: !0,
          get: () => Y[G],
          set: Pe
        });
  }
  if (wr = !0, o)
    for (const Y in o) {
      const G = o[Y], de = J(G) ? G.bind(n, n) : J(G.get) ? G.get.bind(n, n) : Pe;
      process.env.NODE_ENV !== "production" && de === Pe && V(`Computed property "${Y}" has no getter.`);
      const Ce = !J(G) && J(G.set) ? G.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        V(
          `Write operation failed: computed property "${Y}" is readonly.`
        );
      } : Pe, ze = wt({
        get: de,
        set: Ce
      });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (We) => ze.value = We
      }), process.env.NODE_ENV !== "production" && te("Computed", Y);
    }
  if (a)
    for (const Y in a)
      lf(a[Y], s, n, Y);
  if (l) {
    const Y = J(l) ? l.call(n) : l;
    Reflect.ownKeys(Y).forEach((G) => {
      kp(G, Y[G]);
    });
  }
  u && rl(u, e, "c");
  function Z(Y, G) {
    X(G) ? G.forEach((de) => Y(de.bind(n))) : G && Y(G.bind(n));
  }
  if (Z(lp, f), Z(Wt, d), Z(cp, h), Z(up, v), Z(op, b), Z(rp, E), Z(gp, F), Z(pp, L), Z(hp, A), Z(fp, y), Z(Ro, w), Z(dp, W), X(U))
    if (U.length) {
      const Y = e.exposed || (e.exposed = {});
      U.forEach((G) => {
        Object.defineProperty(Y, G, {
          get: () => n[G],
          set: (de) => n[G] = de
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Pe && (e.render = S), q != null && (e.inheritAttrs = q), B && (e.components = B), ge && (e.directives = ge), W && sf(e);
}
function Np(e, t, n = Pe) {
  X(e) && (e = Sr(e));
  for (const s in e) {
    const i = e[s];
    let o;
    ve(i) ? "default" in i ? o = Qs(
      i.from || s,
      i.default,
      !0
    ) : o = Qs(i.from || s) : o = Qs(i), Ae(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[s] = o, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function rl(e, t, n) {
  Ht(
    X(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function lf(e, t, n, s) {
  let i = s.includes(".") ? Ef(n, s) : () => n[s];
  if (we(e)) {
    const o = t[e];
    J(o) ? Xn(i, o) : process.env.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e}"`, o);
  } else if (J(e))
    Xn(i, e.bind(n));
  else if (ve(e))
    if (X(e))
      e.forEach((o) => lf(o, t, n, s));
    else {
      const o = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(o) ? Xn(i, o, e) : process.env.NODE_ENV !== "production" && V(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else process.env.NODE_ENV !== "production" && V(`Invalid watch option: "${s}"`, e);
}
function ma(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !n && !s ? l = t : (l = {}, i.length && i.forEach(
    (c) => uo(l, c, r, !0)
  ), uo(l, t, r)), ve(t) && o.set(t, l), l;
}
function uo(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t;
  o && uo(e, o, n, !0), i && i.forEach(
    (r) => uo(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      process.env.NODE_ENV !== "production" && V(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = wp[r] || n && n[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const wp = {
  data: al,
  props: ll,
  emits: ll,
  // objects
  methods: Ws,
  computed: Ws,
  // lifecycle
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
  // assets
  components: Ws,
  directives: Ws,
  // watch
  watch: Tp,
  // provide / inject
  provide: al,
  inject: Sp
};
function al(e, t) {
  return t ? e ? function() {
    return Te(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Sp(e, t) {
  return Ws(Sr(e), Sr(t));
}
function Sr(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ws(e, t) {
  return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ll(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Te(
    /* @__PURE__ */ Object.create(null),
    ol(e),
    ol(t ?? {})
  ) : t;
}
function Tp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Qe(e[s], t[s]);
  return n;
}
function cf() {
  return {
    app: null,
    config: {
      isNativeTag: Bd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Dp = 0;
function Ap(e, t) {
  return function(s, i = null) {
    J(s) || (s = Te({}, s)), i != null && !ve(i) && (process.env.NODE_ENV !== "production" && V("root props passed to app.mount() must be an object."), i = null);
    const o = cf(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Dp++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Lr,
      get config() {
        return o.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && V(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...f) {
        return r.has(u) ? process.env.NODE_ENV !== "production" && V("Plugin has already been applied to target app.") : u && J(u.install) ? (r.add(u), u.install(c, ...f)) : J(u) ? (r.add(u), u(c, ...f)) : process.env.NODE_ENV !== "production" && V(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(u) {
        return o.mixins.includes(u) ? process.env.NODE_ENV !== "production" && V(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : o.mixins.push(u), c;
      },
      component(u, f) {
        return process.env.NODE_ENV !== "production" && Cr(u, o.config), f ? (process.env.NODE_ENV !== "production" && o.components[u] && V(`Component "${u}" has already been registered in target app.`), o.components[u] = f, c) : o.components[u];
      },
      directive(u, f) {
        return process.env.NODE_ENV !== "production" && nf(u), f ? (process.env.NODE_ENV !== "production" && o.directives[u] && V(`Directive "${u}" has already been registered in target app.`), o.directives[u] = f, c) : o.directives[u];
      },
      mount(u, f, d) {
        if (l)
          process.env.NODE_ENV !== "production" && V(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && V(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = c._ceVNode || Oe(s, i);
          return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (o.reload = () => {
            e(
              wn(h),
              u,
              d
            );
          }), f && t ? t(h, u) : e(h, u, d), l = !0, c._container = u, u.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = h.component, Kh(c, Lr)), Ea(h.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && V(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), a.push(u);
      },
      unmount() {
        l ? (Ht(
          a,
          c._instance,
          16
        ), e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, Gh(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && V("Cannot unmount an app that is not mounted.");
      },
      provide(u, f) {
        return process.env.NODE_ENV !== "production" && u in o.provides && V(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), o.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = ms;
        ms = c;
        try {
          return u();
        } finally {
          ms = f;
        }
      }
    };
    return c;
  };
}
let ms = null;
function kp(e, t) {
  if (!Re)
    process.env.NODE_ENV !== "production" && V("provide() can only be used inside setup().");
  else {
    let n = Re.provides;
    const s = Re.parent && Re.parent.provides;
    s === n && (n = Re.provides = Object.create(s)), n[e] = t;
  }
}
function Qs(e, t, n = !1) {
  const s = Re || ct;
  if (s || ms) {
    const i = ms ? ms._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && V(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && V("inject() can only be used inside setup() or functional components.");
}
const uf = {}, ff = () => Object.create(uf), df = (e) => Object.getPrototypeOf(e) === uf;
function Cp(e, t, n, s = !1) {
  const i = {}, o = ff();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hf(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  process.env.NODE_ENV !== "production" && gf(t || {}, i, e), n ? e.props = s ? i : Dh(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Mp(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Lp(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, a = ee(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Mp(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (Vo(e.emitsOptions, d))
          continue;
        const h = t[d];
        if (l)
          if (le(o, d))
            h !== o[d] && (o[d] = h, c = !0);
          else {
            const v = tt(d);
            i[v] = Tr(
              l,
              a,
              v,
              h,
              e,
              !1
            );
          }
        else
          h !== o[d] && (o[d] = h, c = !0);
      }
    }
  } else {
    hf(e, t, i, o) && (c = !0);
    let u;
    for (const f in a)
      (!t || // for camelCase
      !le(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Nn(f)) === f || !le(t, u))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[f] = Tr(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (o !== a)
      for (const f in o)
        (!t || !le(t, f)) && (delete o[f], c = !0);
  }
  c && Ft(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && gf(t || {}, i, e);
}
function hf(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (Gs(l))
        continue;
      const c = t[l];
      let u;
      i && le(i, u = tt(l)) ? !o || !o.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Vo(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, r = !0);
    }
  if (o) {
    const l = ee(n), c = a || me;
    for (let u = 0; u < o.length; u++) {
      const f = o[u];
      n[f] = Tr(
        i,
        l,
        f,
        c[f],
        e,
        !le(c, f)
      );
    }
  }
  return r;
}
function Tr(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const a = le(r, "default");
    if (a && s === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && J(l)) {
        const { propsDefaults: c } = i;
        if (n in c)
          s = c[n];
        else {
          const u = Si(i);
          s = c[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        s = l;
      i.ce && i.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !a ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Nn(n)) && (s = !0));
  }
  return s;
}
const Ip = /* @__PURE__ */ new WeakMap();
function pf(e, t, n = !1) {
  const s = n ? Ip : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, a = [];
  let l = !1;
  if (!J(e)) {
    const u = (f) => {
      l = !0;
      const [d, h] = pf(f, t, !0);
      Te(r, d), h && a.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return ve(e) && s.set(e, gs), gs;
  if (X(o))
    for (let u = 0; u < o.length; u++) {
      process.env.NODE_ENV !== "production" && !we(o[u]) && V("props must be strings when using array syntax.", o[u]);
      const f = tt(o[u]);
      cl(f) && (r[f] = me);
    }
  else if (o) {
    process.env.NODE_ENV !== "production" && !ve(o) && V("invalid props options", o);
    for (const u in o) {
      const f = tt(u);
      if (cl(f)) {
        const d = o[u], h = r[f] = X(d) || J(d) ? { type: d } : Te({}, d), v = h.type;
        let b = !1, E = !0;
        if (X(v))
          for (let _ = 0; _ < v.length; ++_) {
            const y = v[_], N = J(y) && y.name;
            if (N === "Boolean") {
              b = !0;
              break;
            } else N === "String" && (E = !1);
          }
        else
          b = J(v) && v.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = b, h[
          1
          /* shouldCastTrue */
        ] = E, (b || le(h, "default")) && a.push(f);
      }
    }
  }
  const c = [r, a];
  return ve(e) && s.set(e, c), c;
}
function cl(e) {
  return e[0] !== "$" && !Gs(e) ? !0 : (process.env.NODE_ENV !== "production" && V(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Pp(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gf(e, t, n) {
  const s = ee(t), i = n.propsOptions[0], o = Object.keys(e).map((r) => tt(r));
  for (const r in i) {
    let a = i[r];
    a != null && Rp(
      r,
      s[r],
      a,
      process.env.NODE_ENV !== "production" ? Vt(s) : s,
      !o.includes(r)
    );
  }
}
function Rp(e, t, n, s, i) {
  const { type: o, required: r, validator: a, skipCheck: l } = n;
  if (r && i) {
    V('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (o != null && o !== !0 && !l) {
      let c = !1;
      const u = X(o) ? o : [o], f = [];
      for (let d = 0; d < u.length && !c; d++) {
        const { valid: h, expectedType: v } = Vp(t, u[d]);
        f.push(v || ""), c = h;
      }
      if (!c) {
        V($p(e, t, f));
        return;
      }
    }
    a && !a(t, s) && V('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Fp = /* @__PURE__ */ ln(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Vp(e, t) {
  let n;
  const s = Pp(t);
  if (s === "null")
    n = e === null;
  else if (Fp(s)) {
    const i = typeof e;
    n = i === s.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else s === "Object" ? n = ve(e) : s === "Array" ? n = X(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function $p(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Jn).join(" | ")}`;
  const i = n[0], o = na(t), r = ul(t, i), a = ul(t, o);
  return n.length === 1 && fl(i) && !jp(i, o) && (s += ` with value ${r}`), s += `, got ${o} `, fl(o) && (s += `with value ${a}.`), s;
}
function ul(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function fl(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function jp(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const _f = (e) => e[0] === "_" || e === "$stable", ba = (e) => X(e) ? e.map(Ot) : [Ot(e)], Hp = (e, t, n) => {
  if (t._n)
    return t;
  const s = tp((...i) => (process.env.NODE_ENV !== "production" && Re && (!n || n.root === Re.root) && V(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ba(t(...i))), n);
  return s._c = !1, s;
}, mf = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (_f(i)) continue;
    const o = e[i];
    if (J(o))
      t[i] = Hp(i, o, s);
    else if (o != null) {
      process.env.NODE_ENV !== "production" && V(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = ba(o);
      t[i] = () => r;
    }
  }
}, bf = (e, t) => {
  process.env.NODE_ENV !== "production" && !ga(e.vnode) && V(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ba(t);
  e.slots.default = () => n;
}, Dr = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, Wp = (e, t, n) => {
  const s = e.slots = ff();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Dr(s, t, n), n && oo(s, "_", i, !0)) : mf(t, s);
  } else t && bf(e, t);
}, Up = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = me;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? process.env.NODE_ENV !== "production" && $t ? (Dr(i, t, n), Ft(e, "set", "$slots")) : n && a === 1 ? o = !1 : Dr(i, t, n) : (o = !t.$stable, mf(t, i)), r = t;
  } else t && (bf(e, t), r = { default: 1 });
  if (o)
    for (const a in i)
      !_f(a) && r[a] == null && delete i[a];
};
let Ls, bn;
function Jt(e, t) {
  e.appContext.config.performance && fo() && bn.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Qh(e, t, fo() ? bn.now() : Date.now());
}
function Qt(e, t) {
  if (e.appContext.config.performance && fo()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    bn.mark(s), bn.measure(
      `<${$o(e, e.type)}> ${t}`,
      n,
      s
    ), bn.clearMarks(n), bn.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && Zh(e, t, fo() ? bn.now() : Date.now());
}
function fo() {
  return Ls !== void 0 || (typeof window < "u" && window.performance ? (Ls = !0, bn = window.performance) : Ls = !1), Ls;
}
function Bp() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ht = ig;
function zp(e) {
  return Yp(e);
}
function Yp(e, t) {
  Bp();
  const n = xi();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && da(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: d,
    setScopeId: h = Pe,
    insertStaticContent: v
  } = e, b = (m, x, M, R = null, p = null, g = null, T = void 0, C = null, P = process.env.NODE_ENV !== "production" && $t ? !1 : !!x.dynamicChildren) => {
    if (m === x)
      return;
    m && !Is(m, x) && (R = Yt(m), je(m, p, g, !0), m = null), x.patchFlag === -2 && (P = !1, x.dynamicChildren = null);
    const { type: I, ref: $, shapeFlag: O } = x;
    switch (I) {
      case Ss:
        E(m, x, M, R);
        break;
      case Tt:
        _(m, x, M, R);
        break;
      case Zs:
        m == null ? y(x, M, R, T) : process.env.NODE_ENV !== "production" && N(m, x, M, T);
        break;
      case Xe:
        ge(
          m,
          x,
          M,
          R,
          p,
          g,
          T,
          C,
          P
        );
        break;
      default:
        O & 1 ? L(
          m,
          x,
          M,
          R,
          p,
          g,
          T,
          C,
          P
        ) : O & 6 ? ke(
          m,
          x,
          M,
          R,
          p,
          g,
          T,
          C,
          P
        ) : O & 64 || O & 128 ? I.process(
          m,
          x,
          M,
          R,
          p,
          g,
          T,
          C,
          P,
          Kt
        ) : process.env.NODE_ENV !== "production" && V("Invalid VNode type:", I, `(${typeof I})`);
    }
    $ != null && p && Or($, m && m.ref, g, x || m, !x);
  }, E = (m, x, M, R) => {
    if (m == null)
      s(
        x.el = a(x.children),
        M,
        R
      );
    else {
      const p = x.el = m.el;
      x.children !== m.children && c(p, x.children);
    }
  }, _ = (m, x, M, R) => {
    m == null ? s(
      x.el = l(x.children || ""),
      M,
      R
    ) : x.el = m.el;
  }, y = (m, x, M, R) => {
    [m.el, m.anchor] = v(
      m.children,
      x,
      M,
      R,
      m.el,
      m.anchor
    );
  }, N = (m, x, M, R) => {
    if (x.children !== m.children) {
      const p = d(m.anchor);
      S(m), [x.el, x.anchor] = v(
        x.children,
        M,
        p,
        R
      );
    } else
      x.el = m.el, x.anchor = m.anchor;
  }, w = ({ el: m, anchor: x }, M, R) => {
    let p;
    for (; m && m !== x; )
      p = d(m), s(m, M, R), m = p;
    s(x, M, R);
  }, S = ({ el: m, anchor: x }) => {
    let M;
    for (; m && m !== x; )
      M = d(m), i(m), m = M;
    i(x);
  }, L = (m, x, M, R, p, g, T, C, P) => {
    x.type === "svg" ? T = "svg" : x.type === "math" && (T = "mathml"), m == null ? A(
      x,
      M,
      R,
      p,
      g,
      T,
      C,
      P
    ) : U(
      m,
      x,
      p,
      g,
      T,
      C,
      P
    );
  }, A = (m, x, M, R, p, g, T, C) => {
    let P, I;
    const { props: $, shapeFlag: O, transition: k, dirs: j } = m;
    if (P = m.el = r(
      m.type,
      g,
      $ && $.is,
      $
    ), O & 8 ? u(P, m.children) : O & 16 && W(
      m.children,
      P,
      null,
      R,
      p,
      tr(m, g),
      T,
      C
    ), j && Mn(m, null, R, "created"), F(P, m, m.scopeId, T, R), $) {
      for (const oe in $)
        oe !== "value" && !Gs(oe) && o(P, oe, null, $[oe], g, R);
      "value" in $ && o(P, "value", null, $.value, g), (I = $.onVnodeBeforeMount) && Ct(I, R, m);
    }
    process.env.NODE_ENV !== "production" && (oo(P, "__vnode", m, !0), oo(P, "__vueParentComponent", R, !0)), j && Mn(m, null, R, "beforeMount");
    const K = Kp(p, k);
    K && k.beforeEnter(P), s(P, x, M), ((I = $ && $.onVnodeMounted) || K || j) && ht(() => {
      I && Ct(I, R, m), K && k.enter(P), j && Mn(m, null, R, "mounted");
    }, p);
  }, F = (m, x, M, R, p) => {
    if (M && h(m, M), R)
      for (let g = 0; g < R.length; g++)
        h(m, R[g]);
    if (p) {
      let g = p.subTree;
      if (process.env.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && (g = va(g.children) || g), x === g || Nf(g.type) && (g.ssContent === x || g.ssFallback === x)) {
        const T = p.vnode;
        F(
          m,
          T,
          T.scopeId,
          T.slotScopeIds,
          p.parent
        );
      }
    }
  }, W = (m, x, M, R, p, g, T, C, P = 0) => {
    for (let I = P; I < m.length; I++) {
      const $ = m[I] = C ? _n(m[I]) : Ot(m[I]);
      b(
        null,
        $,
        x,
        M,
        R,
        p,
        g,
        T,
        C
      );
    }
  }, U = (m, x, M, R, p, g, T) => {
    const C = x.el = m.el;
    process.env.NODE_ENV !== "production" && (C.__vnode = x);
    let { patchFlag: P, dynamicChildren: I, dirs: $ } = x;
    P |= m.patchFlag & 16;
    const O = m.props || me, k = x.props || me;
    let j;
    if (M && Ln(M, !1), (j = k.onVnodeBeforeUpdate) && Ct(j, M, x, m), $ && Mn(x, m, M, "beforeUpdate"), M && Ln(M, !0), process.env.NODE_ENV !== "production" && $t && (P = 0, T = !1, I = null), (O.innerHTML && k.innerHTML == null || O.textContent && k.textContent == null) && u(C, ""), I ? (q(
      m.dynamicChildren,
      I,
      C,
      M,
      R,
      tr(x, p),
      g
    ), process.env.NODE_ENV !== "production" && Qi(m, x)) : T || de(
      m,
      x,
      C,
      null,
      M,
      R,
      tr(x, p),
      g,
      !1
    ), P > 0) {
      if (P & 16)
        B(C, O, k, M, p);
      else if (P & 2 && O.class !== k.class && o(C, "class", null, k.class, p), P & 4 && o(C, "style", O.style, k.style, p), P & 8) {
        const K = x.dynamicProps;
        for (let oe = 0; oe < K.length; oe++) {
          const re = K[oe], Me = O[re], Ne = k[re];
          (Ne !== Me || re === "value") && o(C, re, Me, Ne, p, M);
        }
      }
      P & 1 && m.children !== x.children && u(C, x.children);
    } else !T && I == null && B(C, O, k, M, p);
    ((j = k.onVnodeUpdated) || $) && ht(() => {
      j && Ct(j, M, x, m), $ && Mn(x, m, M, "updated");
    }, R);
  }, q = (m, x, M, R, p, g, T) => {
    for (let C = 0; C < x.length; C++) {
      const P = m[C], I = x[C], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Is(P, I) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? f(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      b(
        P,
        I,
        $,
        null,
        R,
        p,
        g,
        T,
        !0
      );
    }
  }, B = (m, x, M, R, p) => {
    if (x !== M) {
      if (x !== me)
        for (const g in x)
          !Gs(g) && !(g in M) && o(
            m,
            g,
            x[g],
            null,
            p,
            R
          );
      for (const g in M) {
        if (Gs(g)) continue;
        const T = M[g], C = x[g];
        T !== C && g !== "value" && o(m, g, C, T, p, R);
      }
      "value" in M && o(m, "value", x.value, M.value, p);
    }
  }, ge = (m, x, M, R, p, g, T, C, P) => {
    const I = x.el = m ? m.el : a(""), $ = x.anchor = m ? m.anchor : a("");
    let { patchFlag: O, dynamicChildren: k, slotScopeIds: j } = x;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    ($t || O & 2048) && (O = 0, P = !1, k = null), j && (C = C ? C.concat(j) : j), m == null ? (s(I, M, R), s($, M, R), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      M,
      $,
      p,
      g,
      T,
      C,
      P
    )) : O > 0 && O & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren ? (q(
      m.dynamicChildren,
      k,
      M,
      p,
      g,
      T,
      C
    ), process.env.NODE_ENV !== "production" ? Qi(m, x) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (x.key != null || p && x === p.subTree) && Qi(
        m,
        x,
        !0
        /* shallow */
      )
    )) : de(
      m,
      x,
      M,
      $,
      p,
      g,
      T,
      C,
      P
    );
  }, ke = (m, x, M, R, p, g, T, C, P) => {
    x.slotScopeIds = C, m == null ? x.shapeFlag & 512 ? p.ctx.activate(
      x,
      M,
      R,
      T,
      P
    ) : te(
      x,
      M,
      R,
      p,
      g,
      T,
      P
    ) : Z(m, x, P);
  }, te = (m, x, M, R, p, g, T) => {
    const C = m.component = hg(
      m,
      R,
      p
    );
    if (process.env.NODE_ENV !== "production" && C.type.__hmrId && Uh(C), process.env.NODE_ENV !== "production" && (Xi(m), Jt(C, "mount")), ga(m) && (C.ctx.renderer = Kt), process.env.NODE_ENV !== "production" && Jt(C, "init"), gg(C, !1, T), process.env.NODE_ENV !== "production" && Qt(C, "init"), C.asyncDep) {
      if (process.env.NODE_ENV !== "production" && $t && (m.el = null), p && p.registerDep(C, Y, T), !m.el) {
        const P = C.subTree = Oe(Tt);
        _(null, P, x, M);
      }
    } else
      Y(
        C,
        m,
        x,
        M,
        p,
        g,
        T
      );
    process.env.NODE_ENV !== "production" && (qi(), Qt(C, "mount"));
  }, Z = (m, x, M) => {
    const R = x.component = m.component;
    if (ng(m, x, M))
      if (R.asyncDep && !R.asyncResolved) {
        process.env.NODE_ENV !== "production" && Xi(x), G(R, x, M), process.env.NODE_ENV !== "production" && qi();
        return;
      } else
        R.next = x, R.update();
    else
      x.el = m.el, R.vnode = x;
  }, Y = (m, x, M, R, p, g, T) => {
    const C = () => {
      if (m.isMounted) {
        let { next: O, bu: k, u: j, parent: K, vnode: oe } = m;
        {
          const Ye = vf(m);
          if (Ye) {
            O && (O.el = oe.el, G(m, O, T)), Ye.asyncDep.then(() => {
              m.isUnmounted || C();
            });
            return;
          }
        }
        let re = O, Me;
        process.env.NODE_ENV !== "production" && Xi(O || m.vnode), Ln(m, !1), O ? (O.el = oe.el, G(m, O, T)) : O = oe, k && Cs(k), (Me = O.props && O.props.onVnodeBeforeUpdate) && Ct(Me, K, O, oe), Ln(m, !0), process.env.NODE_ENV !== "production" && Jt(m, "render");
        const Ne = nr(m);
        process.env.NODE_ENV !== "production" && Qt(m, "render");
        const dt = m.subTree;
        m.subTree = Ne, process.env.NODE_ENV !== "production" && Jt(m, "patch"), b(
          dt,
          Ne,
          // parent may have changed if it's in a teleport
          f(dt.el),
          // anchor may have changed if it's in a fragment
          Yt(dt),
          m,
          p,
          g
        ), process.env.NODE_ENV !== "production" && Qt(m, "patch"), O.el = Ne.el, re === null && sg(m, Ne.el), j && ht(j, p), (Me = O.props && O.props.onVnodeUpdated) && ht(
          () => Ct(Me, K, O, oe),
          p
        ), process.env.NODE_ENV !== "production" && Zu(m), process.env.NODE_ENV !== "production" && qi();
      } else {
        let O;
        const { el: k, props: j } = x, { bm: K, m: oe, parent: re, root: Me, type: Ne } = m, dt = Js(x);
        if (Ln(m, !1), K && Cs(K), !dt && (O = j && j.onVnodeBeforeMount) && Ct(O, re, x), Ln(m, !0), k && dn) {
          const Ye = () => {
            process.env.NODE_ENV !== "production" && Jt(m, "render"), m.subTree = nr(m), process.env.NODE_ENV !== "production" && Qt(m, "render"), process.env.NODE_ENV !== "production" && Jt(m, "hydrate"), dn(
              k,
              m.subTree,
              m,
              p,
              null
            ), process.env.NODE_ENV !== "production" && Qt(m, "hydrate");
          };
          dt && Ne.__asyncHydrate ? Ne.__asyncHydrate(
            k,
            m,
            Ye
          ) : Ye();
        } else {
          Me.ce && Me.ce._injectChildStyle(Ne), process.env.NODE_ENV !== "production" && Jt(m, "render");
          const Ye = m.subTree = nr(m);
          process.env.NODE_ENV !== "production" && Qt(m, "render"), process.env.NODE_ENV !== "production" && Jt(m, "patch"), b(
            null,
            Ye,
            M,
            R,
            m,
            p,
            g
          ), process.env.NODE_ENV !== "production" && Qt(m, "patch"), x.el = Ye.el;
        }
        if (oe && ht(oe, p), !dt && (O = j && j.onVnodeMounted)) {
          const Ye = x;
          ht(
            () => Ct(O, re, Ye),
            p
          );
        }
        (x.shapeFlag & 256 || re && Js(re.vnode) && re.vnode.shapeFlag & 256) && m.a && ht(m.a, p), m.isMounted = !0, process.env.NODE_ENV !== "production" && Xh(m), x = M = R = null;
      }
    };
    m.scope.on();
    const P = m.effect = new Su(C);
    m.scope.off();
    const I = m.update = P.run.bind(P), $ = m.job = P.runIfDirty.bind(P);
    $.i = m, $.id = m.uid, P.scheduler = () => Io($), Ln(m, !0), process.env.NODE_ENV !== "production" && (P.onTrack = m.rtc ? (O) => Cs(m.rtc, O) : void 0, P.onTrigger = m.rtg ? (O) => Cs(m.rtg, O) : void 0), I();
  }, G = (m, x, M) => {
    x.component = m;
    const R = m.vnode.props;
    m.vnode = x, m.next = null, Lp(m, x.props, R, M), Up(m, x.children, M), cn(), nl(m), un();
  }, de = (m, x, M, R, p, g, T, C, P = !1) => {
    const I = m && m.children, $ = m ? m.shapeFlag : 0, O = x.children, { patchFlag: k, shapeFlag: j } = x;
    if (k > 0) {
      if (k & 128) {
        ze(
          I,
          O,
          M,
          R,
          p,
          g,
          T,
          C,
          P
        );
        return;
      } else if (k & 256) {
        Ce(
          I,
          O,
          M,
          R,
          p,
          g,
          T,
          C,
          P
        );
        return;
      }
    }
    j & 8 ? ($ & 16 && zt(I, p, g), O !== I && u(M, O)) : $ & 16 ? j & 16 ? ze(
      I,
      O,
      M,
      R,
      p,
      g,
      T,
      C,
      P
    ) : zt(I, p, g, !0) : ($ & 8 && u(M, ""), j & 16 && W(
      O,
      M,
      R,
      p,
      g,
      T,
      C,
      P
    ));
  }, Ce = (m, x, M, R, p, g, T, C, P) => {
    m = m || gs, x = x || gs;
    const I = m.length, $ = x.length, O = Math.min(I, $);
    let k;
    for (k = 0; k < O; k++) {
      const j = x[k] = P ? _n(x[k]) : Ot(x[k]);
      b(
        m[k],
        j,
        M,
        null,
        p,
        g,
        T,
        C,
        P
      );
    }
    I > $ ? zt(
      m,
      p,
      g,
      !0,
      !1,
      O
    ) : W(
      x,
      M,
      R,
      p,
      g,
      T,
      C,
      P,
      O
    );
  }, ze = (m, x, M, R, p, g, T, C, P) => {
    let I = 0;
    const $ = x.length;
    let O = m.length - 1, k = $ - 1;
    for (; I <= O && I <= k; ) {
      const j = m[I], K = x[I] = P ? _n(x[I]) : Ot(x[I]);
      if (Is(j, K))
        b(
          j,
          K,
          M,
          null,
          p,
          g,
          T,
          C,
          P
        );
      else
        break;
      I++;
    }
    for (; I <= O && I <= k; ) {
      const j = m[O], K = x[k] = P ? _n(x[k]) : Ot(x[k]);
      if (Is(j, K))
        b(
          j,
          K,
          M,
          null,
          p,
          g,
          T,
          C,
          P
        );
      else
        break;
      O--, k--;
    }
    if (I > O) {
      if (I <= k) {
        const j = k + 1, K = j < $ ? x[j].el : R;
        for (; I <= k; )
          b(
            null,
            x[I] = P ? _n(x[I]) : Ot(x[I]),
            M,
            K,
            p,
            g,
            T,
            C,
            P
          ), I++;
      }
    } else if (I > k)
      for (; I <= O; )
        je(m[I], p, g, !0), I++;
    else {
      const j = I, K = I, oe = /* @__PURE__ */ new Map();
      for (I = K; I <= k; I++) {
        const Je = x[I] = P ? _n(x[I]) : Ot(x[I]);
        Je.key != null && (process.env.NODE_ENV !== "production" && oe.has(Je.key) && V(
          "Duplicate keys found during update:",
          JSON.stringify(Je.key),
          "Make sure keys are unique."
        ), oe.set(Je.key, I));
      }
      let re, Me = 0;
      const Ne = k - K + 1;
      let dt = !1, Ye = 0;
      const ks = new Array(Ne);
      for (I = 0; I < Ne; I++) ks[I] = 0;
      for (I = j; I <= O; I++) {
        const Je = m[I];
        if (Me >= Ne) {
          je(Je, p, g, !0);
          continue;
        }
        let kt;
        if (Je.key != null)
          kt = oe.get(Je.key);
        else
          for (re = K; re <= k; re++)
            if (ks[re - K] === 0 && Is(Je, x[re])) {
              kt = re;
              break;
            }
        kt === void 0 ? je(Je, p, g, !0) : (ks[kt - K] = I + 1, kt >= Ye ? Ye = kt : dt = !0, b(
          Je,
          x[kt],
          M,
          null,
          p,
          g,
          T,
          C,
          P
        ), Me++);
      }
      const qa = dt ? Gp(ks) : gs;
      for (re = qa.length - 1, I = Ne - 1; I >= 0; I--) {
        const Je = K + I, kt = x[Je], Ja = Je + 1 < $ ? x[Je + 1].el : R;
        ks[I] === 0 ? b(
          null,
          kt,
          M,
          Ja,
          p,
          g,
          T,
          C,
          P
        ) : dt && (re < 0 || I !== qa[re] ? We(kt, M, Ja, 2) : re--);
      }
    }
  }, We = (m, x, M, R, p = null) => {
    const { el: g, type: T, transition: C, children: P, shapeFlag: I } = m;
    if (I & 6) {
      We(m.component.subTree, x, M, R);
      return;
    }
    if (I & 128) {
      m.suspense.move(x, M, R);
      return;
    }
    if (I & 64) {
      T.move(m, x, M, Kt);
      return;
    }
    if (T === Xe) {
      s(g, x, M);
      for (let O = 0; O < P.length; O++)
        We(P[O], x, M, R);
      s(m.anchor, x, M);
      return;
    }
    if (T === Zs) {
      w(m, x, M);
      return;
    }
    if (R !== 2 && I & 1 && C)
      if (R === 0)
        C.beforeEnter(g), s(g, x, M), ht(() => C.enter(g), p);
      else {
        const { leave: O, delayLeave: k, afterLeave: j } = C, K = () => s(g, x, M), oe = () => {
          O(g, () => {
            K(), j && j();
          });
        };
        k ? k(g, K, oe) : oe();
      }
    else
      s(g, x, M);
  }, je = (m, x, M, R = !1, p = !1) => {
    const {
      type: g,
      props: T,
      ref: C,
      children: P,
      dynamicChildren: I,
      shapeFlag: $,
      patchFlag: O,
      dirs: k,
      cacheIndex: j
    } = m;
    if (O === -2 && (p = !1), C != null && Or(C, null, M, m, !0), j != null && (x.renderCache[j] = void 0), $ & 256) {
      x.ctx.deactivate(m);
      return;
    }
    const K = $ & 1 && k, oe = !Js(m);
    let re;
    if (oe && (re = T && T.onVnodeBeforeUnmount) && Ct(re, x, m), $ & 6)
      bt(m.component, M, R);
    else {
      if ($ & 128) {
        m.suspense.unmount(M, R);
        return;
      }
      K && Mn(m, null, x, "beforeUnmount"), $ & 64 ? m.type.remove(
        m,
        x,
        M,
        Kt,
        R
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== Xe || O > 0 && O & 64) ? zt(
        I,
        x,
        M,
        !1,
        !0
      ) : (g === Xe && O & 384 || !p && $ & 16) && zt(P, x, M), R && qe(m);
    }
    (oe && (re = T && T.onVnodeUnmounted) || K) && ht(() => {
      re && Ct(re, x, m), K && Mn(m, null, x, "unmounted");
    }, M);
  }, qe = (m) => {
    const { type: x, el: M, anchor: R, transition: p } = m;
    if (x === Xe) {
      process.env.NODE_ENV !== "production" && m.patchFlag > 0 && m.patchFlag & 2048 && p && !p.persisted ? m.children.forEach((T) => {
        T.type === Tt ? i(T.el) : qe(T);
      }) : xt(M, R);
      return;
    }
    if (x === Zs) {
      S(m);
      return;
    }
    const g = () => {
      i(M), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (m.shapeFlag & 1 && p && !p.persisted) {
      const { leave: T, delayLeave: C } = p, P = () => T(M, g);
      C ? C(m.el, g, P) : P();
    } else
      g();
  }, xt = (m, x) => {
    let M;
    for (; m !== x; )
      M = d(m), i(m), m = M;
    i(x);
  }, bt = (m, x, M) => {
    process.env.NODE_ENV !== "production" && m.type.__hmrId && Bh(m);
    const { bum: R, scope: p, job: g, subTree: T, um: C, m: P, a: I } = m;
    dl(P), dl(I), R && Cs(R), p.stop(), g && (g.flags |= 8, je(T, m, x, M)), C && ht(C, x), ht(() => {
      m.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve()), process.env.NODE_ENV !== "production" && Jh(m);
  }, zt = (m, x, M, R = !1, p = !1, g = 0) => {
    for (let T = g; T < m.length; T++)
      je(m[T], x, M, R, p);
  }, Yt = (m) => {
    if (m.shapeFlag & 6)
      return Yt(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const x = d(m.anchor || m.el), M = x && x[np];
    return M ? d(M) : x;
  };
  let Cn = !1;
  const rs = (m, x, M) => {
    m == null ? x._vnode && je(x._vnode, null, null, !0) : b(
      x._vnode || null,
      m,
      x,
      null,
      null,
      null,
      M
    ), x._vnode = m, Cn || (Cn = !0, nl(), qu(), Cn = !1);
  }, Kt = {
    p: b,
    um: je,
    m: We,
    r: qe,
    mt: te,
    mc: W,
    pc: de,
    pbc: q,
    n: Yt,
    o: e
  };
  let as, dn;
  return {
    render: rs,
    hydrate: as,
    createApp: Ap(rs, as)
  };
}
function tr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ln({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Kp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qi(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (X(s) && X(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = _n(i[o]), a.el = r.el), !n && a.patchFlag !== -2 && Qi(r, a)), a.type === Ss && (a.el = r.el), process.env.NODE_ENV !== "production" && a.type === Tt && !a.el && (a.el = r.el);
    }
}
function Gp(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const c = e[s];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        a = o + r >> 1, e[n[a]] < c ? o = a + 1 : r = a;
      c < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function vf(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vf(t);
}
function dl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Xp = Symbol.for("v-scx"), qp = () => {
  {
    const e = Qs(Xp);
    return e || process.env.NODE_ENV !== "production" && V(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Xn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !J(t) && V(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yf(e, t, n);
}
function yf(e, t, n = me) {
  const { immediate: s, deep: i, flush: o, once: r } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && V(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && V(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && V(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = Te({}, n);
  process.env.NODE_ENV !== "production" && (a.onWarn = V);
  const l = t && s || !t && o !== "post";
  let c;
  if (ui) {
    if (o === "sync") {
      const h = qp();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = Pe, h.resume = Pe, h.pause = Pe, h;
    }
  }
  const u = Re;
  a.call = (h, v, b) => Ht(h, u, v, b);
  let f = !1;
  o === "post" ? a.scheduler = (h) => {
    ht(h, u && u.suspense);
  } : o !== "sync" && (f = !0, a.scheduler = (h, v) => {
    v ? h() : Io(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, u && (h.id = u.uid, h.i = u));
  };
  const d = Ph(e, t, a);
  return ui && (c ? c.push(d) : l && d()), d;
}
function Jp(e, t, n) {
  const s = this.proxy, i = we(e) ? e.includes(".") ? Ef(s, e) : () => s[e] : e.bind(s, s);
  let o;
  J(t) ? o = t : (o = t.handler, n = t);
  const r = Si(this), a = yf(i, o.bind(s), n);
  return r(), a;
}
function Ef(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const Qp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${tt(t)}Modifiers`] || e[`${Nn(t)}Modifiers`];
function Zp(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || me;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(Vn(tt(t)) in f)) && V(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Vn(tt(t))}" prop.`
        );
      else {
        const d = u[t];
        J(d) && (d(...n) || V(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const o = t.startsWith("update:"), r = o && Qp(s, t.slice(7));
  if (r && (r.trim && (i = n.map((u) => we(u) ? u.trim() : u)), r.number && (i = n.map(Xd))), process.env.NODE_ENV !== "production" && ep(e, t, i), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[Vn(u)] && V(
      `Event "${u}" is emitted in component ${$o(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Nn(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = s[a = Vn(t)] || // also try camelCase event handler (#2249)
  s[a = Vn(tt(t))];
  !l && o && (l = s[a = Vn(Nn(t))]), l && Ht(
    l,
    e,
    6,
    i
  );
  const c = s[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ht(
      c,
      e,
      6,
      i
    );
  }
}
function xf(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, a = !1;
  if (!J(e)) {
    const l = (c) => {
      const u = xf(c, t, !0);
      u && (a = !0, Te(r, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (ve(e) && s.set(e, null), null) : (X(o) ? o.forEach((l) => r[l] = null) : Te(r, o), ve(e) && s.set(e, r), r);
}
function Vo(e, t) {
  return !e || !Ei(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, Nn(t)) || le(e, t));
}
let Ar = !1;
function ho() {
  Ar = !0;
}
function nr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: d,
    setupState: h,
    ctx: v,
    inheritAttrs: b
  } = e, E = co(e);
  let _, y;
  process.env.NODE_ENV !== "production" && (Ar = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = i || s, L = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(S, {
        get(A, F, W) {
          return V(
            `Property '${String(
              F
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(A, F, W);
        }
      }) : S;
      _ = Ot(
        c.call(
          L,
          S,
          u,
          process.env.NODE_ENV !== "production" ? Vt(f) : f,
          h,
          d,
          v
        )
      ), y = a;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && a === f && ho(), _ = Ot(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? Vt(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return ho(), Vt(a);
            },
            slots: r,
            emit: l
          } : { attrs: a, slots: r, emit: l }
        ) : S(
          process.env.NODE_ENV !== "production" ? Vt(f) : f,
          null
        )
      ), y = t.props ? a : eg(a);
    }
  } catch (S) {
    ei.length = 0, Ni(S, e, 1), _ = Oe(Tt);
  }
  let N = _, w;
  if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && ([N, w] = Of(_)), y && b !== !1) {
    const S = Object.keys(y), { shapeFlag: L } = N;
    if (S.length) {
      if (L & 7)
        o && S.some(io) && (y = tg(
          y,
          o
        )), N = wn(N, y, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Ar && N.type !== Tt) {
        const A = Object.keys(a), F = [], W = [];
        for (let U = 0, q = A.length; U < q; U++) {
          const B = A[U];
          Ei(B) ? io(B) || F.push(B[2].toLowerCase() + B.slice(3)) : W.push(B);
        }
        W.length && V(
          `Extraneous non-props attributes (${W.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), F.length && V(
          `Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !hl(N) && V(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), N = wn(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !hl(N) && V(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), pa(N, n.transition)), process.env.NODE_ENV !== "production" && w ? w(N) : _ = N, co(E), _;
}
const Of = (e) => {
  const t = e.children, n = e.dynamicChildren, s = va(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Of(s);
  } else return [e, void 0];
  const i = t.indexOf(s), o = n ? n.indexOf(s) : -1, r = (a) => {
    t[i] = a, n && (o > -1 ? n[o] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [Ot(s), r];
};
function va(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (ys(i)) {
      if (i.type !== Tt || i.children === "v-if") {
        if (n)
          return;
        if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return va(n.children);
      }
    } else
      return;
  }
  return n;
}
const eg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ei(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, tg = (e, t) => {
  const n = {};
  for (const s in e)
    (!io(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, hl = (e) => e.shapeFlag & 7 || e.type === Tt;
function ng(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || a) && $t || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? pl(s, r, c) : !!r;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (r[d] !== s[d] && !Vo(c, d))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : s === r ? !1 : s ? r ? pl(s, r, c) : !0 : !!r;
  return !1;
}
function pl(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (t[o] !== e[o] && !Vo(n, o))
      return !0;
  }
  return !1;
}
function sg({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Nf = (e) => e.__isSuspense;
function ig(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Xu(e);
}
const Xe = Symbol.for("v-fgt"), Ss = Symbol.for("v-txt"), Tt = Symbol.for("v-cmt"), Zs = Symbol.for("v-stc"), ei = [];
let _t = null;
function ue(e = !1) {
  ei.push(_t = e ? null : []);
}
function og() {
  ei.pop(), _t = ei[ei.length - 1] || null;
}
let ci = 1;
function gl(e) {
  ci += e, e < 0 && _t && (_t.hasOnce = !0);
}
function wf(e) {
  return e.dynamicChildren = ci > 0 ? _t || gs : null, og(), ci > 0 && _t && _t.push(e), e;
}
function he(e, t, n, s, i, o) {
  return wf(
    D(
      e,
      t,
      n,
      s,
      i,
      o,
      !0
    )
  );
}
function rg(e, t, n, s, i) {
  return wf(
    Oe(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function ys(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Is(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ji.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ag = (...e) => Tf(
  ...e
), Sf = ({ key: e }) => e ?? null, Zi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || Ae(e) || J(e) ? { i: ct, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, s = 0, i = null, o = e === Xe ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Sf(t),
    ref: t && Zi(t),
    scopeId: tf,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ct
  };
  return a ? (ya(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= we(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && V("VNode created with invalid key (NaN). VNode type:", l.type), ci > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  _t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && _t.push(l), l;
}
const Oe = process.env.NODE_ENV !== "production" ? ag : Tf;
function Tf(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === rf) && (process.env.NODE_ENV !== "production" && !e && V(`Invalid vnode type when creating vnode: ${e}.`), e = Tt), ys(e)) {
    const a = wn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ya(a, n), ci > 0 && !o && _t && (a.shapeFlag & 6 ? _t[_t.indexOf(e)] = a : _t.push(a)), a.patchFlag = -2, a;
  }
  if (Cf(e) && (e = e.__vccOpts), t) {
    t = lg(t);
    let { class: a, style: l } = t;
    a && !we(a) && (t.class = Oi(a)), ve(l) && (vs(l) && !X(l) && (l = Te({}, l)), t.style = ko(l));
  }
  const r = we(e) ? 1 : Nf(e) ? 128 : sp(e) ? 64 : ve(e) ? 4 : J(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && vs(e) && (e = ee(e), V(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), D(
    e,
    t,
    n,
    s,
    i,
    r,
    o,
    !0
  );
}
function lg(e) {
  return e ? vs(e) || df(e) ? Te({}, e) : e : null;
}
function wn(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e, c = t ? ug(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Sf(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? X(o) ? o.concat(Zi(t)) : [o, Zi(t)] : Zi(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && X(a) ? a.map(Df) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Xe ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wn(e.ssContent),
    ssFallback: e.ssFallback && wn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && pa(
    u,
    l.clone(u)
  ), u;
}
function Df(e) {
  const t = wn(e);
  return X(e.children) && (t.children = e.children.map(Df)), t;
}
function rt(e = " ", t = 0) {
  return Oe(Ss, null, e, t);
}
function cg(e, t) {
  const n = Oe(Zs, null, e);
  return n.staticCount = t, n;
}
function Ot(e) {
  return e == null || typeof e == "boolean" ? Oe(Tt) : X(e) ? Oe(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ys(e) ? _n(e) : Oe(Ss, null, String(e));
}
function _n(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wn(e);
}
function ya(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ya(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !df(t) ? t._ctx = ct : i === 3 && ct && (ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else J(t) ? (t = { default: t, _ctx: ct }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [rt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ug(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Oi([t.class, s.class]));
      else if (i === "style")
        t.style = ko([t.style, s.style]);
      else if (Ei(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(X(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ct(e, t, n, s = null) {
  Ht(e, t, 7, [
    n,
    s
  ]);
}
const fg = cf();
let dg = 0;
function hg(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || fg, o = {
    uid: dg++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new wu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: pf(s, i),
    emitsOptions: xf(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: me,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: me,
    data: me,
    props: me,
    attrs: me,
    slots: me,
    refs: me,
    setupState: me,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? o.ctx = vp(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Zp.bind(null, o), e.ce && e.ce(o), o;
}
let Re = null;
const Es = () => Re || ct;
let po, kr;
{
  const e = xi(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  po = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Re = n
  ), kr = t(
    "__VUE_SSR_SETTERS__",
    (n) => ui = n
  );
}
const Si = (e) => {
  const t = Re;
  return po(e), e.scope.on(), () => {
    e.scope.off(), po(t);
  };
}, _l = () => {
  Re && Re.scope.off(), po(null);
}, pg = /* @__PURE__ */ ln("slot,component");
function Cr(e, { isNativeTag: t }) {
  (pg(e) || t(e)) && V(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Af(e) {
  return e.vnode.shapeFlag & 4;
}
let ui = !1;
function gg(e, t = !1, n = !1) {
  t && kr(t);
  const { props: s, children: i } = e.vnode, o = Af(e);
  Cp(e, s, o, t), Wp(e, i, n);
  const r = o ? _g(e, t) : void 0;
  return t && kr(!1), r;
}
function _g(e, t) {
  var n;
  const s = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (s.name && Cr(s.name, e.appContext.config), s.components) {
      const o = Object.keys(s.components);
      for (let r = 0; r < o.length; r++)
        Cr(o[r], e.appContext.config);
    }
    if (s.directives) {
      const o = Object.keys(s.directives);
      for (let r = 0; r < o.length; r++)
        nf(o[r]);
    }
    s.compilerOptions && mg() && V(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, af), process.env.NODE_ENV !== "production" && yp(e);
  const { setup: i } = s;
  if (i) {
    cn();
    const o = e.setupContext = i.length > 1 ? vg(e) : null, r = Si(e), a = ws(
      i,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Vt(e.props) : e.props,
        o
      ]
    ), l = ta(a);
    if (un(), r(), (l || e.sp) && !Js(e) && sf(e), l) {
      if (a.then(_l, _l), t)
        return a.then((c) => {
          ml(e, c, t);
        }).catch((c) => {
          Ni(c, e, 0);
        });
      if (e.asyncDep = a, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        V(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ml(e, a, t);
  } else
    kf(e, t);
}
function ml(e, t, n) {
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) ? (process.env.NODE_ENV !== "production" && ys(t) && V(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Bu(t), process.env.NODE_ENV !== "production" && Ep(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && V(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), kf(e, n);
}
let Mr;
const mg = () => !Mr;
function kf(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Mr && !s.render) {
      const i = s.template || ma(e).template;
      if (i) {
        process.env.NODE_ENV !== "production" && Jt(e, "compile");
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: l } = s, c = Te(
          Te(
            {
              isCustomElement: o,
              delimiters: a
            },
            r
          ),
          l
        );
        s.render = Mr(i, c), process.env.NODE_ENV !== "production" && Qt(e, "compile");
      }
    }
    e.render = s.render || Pe;
  }
  {
    const i = Si(e);
    cn();
    try {
      Op(e);
    } finally {
      un(), i();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === Pe && !t && (s.template ? V(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : V("Component is missing template or render function: ", s));
}
const bl = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return ho(), Ie(e, "get", ""), e[t];
  },
  set() {
    return V("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return V("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  }
};
function bg(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Ie(e, "get", "$slots"), t[n];
    }
  });
}
function vg(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && V("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (X(n) ? s = "array" : Ae(n) && (s = "ref")), s !== "object" && V(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, bl));
      },
      get slots() {
        return s || (s = bg(e));
      },
      get emit() {
        return (i, ...o) => e.emit(i, ...o);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, bl),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ea(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bu(Ah(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Gn)
        return Gn[n](e);
    },
    has(t, n) {
      return n in t || n in Gn;
    }
  })) : e.proxy;
}
const yg = /(?:^|[-_])(\w)/g, Eg = (e) => e.replace(yg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function xa(e, t = !0) {
  return J(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $o(e, t, n = !1) {
  let s = xa(t);
  if (!s && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (s = i[1]);
  }
  if (!s && e && e.parent) {
    const i = (o) => {
      for (const r in o)
        if (o[r] === t)
          return r;
    };
    s = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return s ? Eg(s) : n ? "App" : "Anonymous";
}
function Cf(e) {
  return J(e) && "__vccOpts" in e;
}
const wt = (e, t) => {
  const n = Lh(e, t, ui);
  if (process.env.NODE_ENV !== "production") {
    const s = Es();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function fi(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ve(t) && !X(t) ? ys(t) ? Oe(e, null, [t]) : Oe(e, t) : Oe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ys(n) && (n = [n]), Oe(e, t, n));
}
function xg() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(f) {
      return ve(f) ? f.__isVue ? ["div", e, "VueInstance"] : Ae(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        // avoid debugger accessing value affecting behavior
        a("_value" in f ? f._value : f),
        ">"
      ] : Yn(f) ? [
        "div",
        {},
        ["span", e, nt(f) ? "ShallowReactive" : "Reactive"],
        "<",
        a(f),
        `>${rn(f) ? " (readonly)" : ""}`
      ] : rn(f) ? [
        "div",
        {},
        ["span", e, nt(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...o(f.$)
        ];
    }
  };
  function o(f) {
    const d = [];
    f.type.props && f.props && d.push(r("props", ee(f.props))), f.setupState !== me && d.push(r("setup", f.setupState)), f.data !== me && d.push(r("data", ee(f.data)));
    const h = l(f, "computed");
    h && d.push(r("computed", h));
    const v = l(f, "inject");
    return v && d.push(r("injected", v)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), d;
  }
  function r(f, d) {
    return d = Te({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((h) => [
          "div",
          {},
          ["span", s, h + ": "],
          a(d[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(f, d = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", s, f] : ve(f) ? ["object", { object: d ? ee(f) : f }] : ["span", n, String(f)];
  }
  function l(f, d) {
    const h = f.type;
    if (J(h))
      return;
    const v = {};
    for (const b in f.ctx)
      c(h, b, d) && (v[b] = f.ctx[b]);
    return v;
  }
  function c(f, d, h) {
    const v = f[h];
    if (X(v) && v.includes(d) || ve(v) && d in v || f.extends && c(f.extends, d, h) || f.mixins && f.mixins.some((b) => c(b, d, h)))
      return !0;
  }
  function u(f) {
    return nt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Lr = "3.5.12", on = process.env.NODE_ENV !== "production" ? V : Pe;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ir;
const vl = typeof window < "u" && window.trustedTypes;
if (vl)
  try {
    Ir = /* @__PURE__ */ vl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && on(`Error creating trusted types policy: ${e}`);
  }
const Mf = Ir ? (e) => Ir.createHTML(e) : (e) => e, Og = "http://www.w3.org/2000/svg", Ng = "http://www.w3.org/1998/Math/MathML", tn = typeof document < "u" ? document : null, yl = tn && /* @__PURE__ */ tn.createElement("template"), wg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? tn.createElementNS(Og, e) : t === "mathml" ? tn.createElementNS(Ng, e) : n ? tn.createElement(e, { is: n }) : tn.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => tn.createTextNode(e),
  createComment: (e) => tn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      yl.innerHTML = Mf(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = yl.content;
      if (s === "svg" || s === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Sg = Symbol("_vtc");
function Tg(e, t, n) {
  const s = e[Sg];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const El = Symbol("_vod"), Dg = Symbol("_vsh");
process.env.NODE_ENV;
const Ag = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), kg = /(^|;)\s*display\s*:/;
function Cg(e, t, n) {
  const s = e.style, i = we(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (we(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          n[a] == null && eo(s, a, "");
        }
      else
        for (const r in t)
          n[r] == null && eo(s, r, "");
    for (const r in n)
      r === "display" && (o = !0), eo(s, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = s[Ag];
      r && (n += ";" + r), s.cssText = n, o = kg.test(n);
    }
  } else t && e.removeAttribute("style");
  El in e && (e[El] = o ? s.display : "", e[Dg] && (s.display = "none"));
}
const Mg = /[^\\];\s*$/, xl = /\s*!important$/;
function eo(e, t, n) {
  if (X(n))
    n.forEach((s) => eo(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Mg.test(n) && on(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Lg(e, t);
    xl.test(n) ? e.setProperty(
      Nn(s),
      n.replace(xl, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ol = ["Webkit", "Moz", "ms"], sr = {};
function Lg(e, t) {
  const n = sr[t];
  if (n)
    return n;
  let s = tt(t);
  if (s !== "filter" && s in e)
    return sr[t] = s;
  s = Jn(s);
  for (let i = 0; i < Ol.length; i++) {
    const o = Ol[i] + s;
    if (o in e)
      return sr[t] = o;
  }
  return t;
}
const Nl = "http://www.w3.org/1999/xlink";
function wl(e, t, n, s, i, o = ah(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Nl, t.slice(6, t.length)) : e.setAttributeNS(Nl, t, n) : n == null || o && !xu(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Dn(n) ? String(n) : n
  );
}
function Sl(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Mf(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = xu(n) : n == null && a === "string" ? (n = "", r = !0) : a === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !r && on(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  r && e.removeAttribute(i || t);
}
function Ig(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Pg(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Tl = Symbol("_vei");
function Rg(e, t, n, s, i = null) {
  const o = e[Tl] || (e[Tl] = {}), r = o[t];
  if (s && r)
    r.value = process.env.NODE_ENV !== "production" ? Al(s, t) : s;
  else {
    const [a, l] = Fg(t);
    if (s) {
      const c = o[t] = jg(
        process.env.NODE_ENV !== "production" ? Al(s, t) : s,
        i
      );
      Ig(e, a, c, l);
    } else r && (Pg(e, a, r, l), o[t] = void 0);
  }
}
const Dl = /(?:Once|Passive|Capture)$/;
function Fg(e) {
  let t;
  if (Dl.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Dl); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Nn(e.slice(2)), t];
}
let ir = 0;
const Vg = /* @__PURE__ */ Promise.resolve(), $g = () => ir || (Vg.then(() => ir = 0), ir = Date.now());
function jg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ht(
      Hg(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = $g(), n;
}
function Al(e, t) {
  return J(e) || X(e) ? e : (on(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Pe);
}
function Hg(e, t) {
  if (X(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const kl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wg = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? Tg(e, s, r) : t === "style" ? Cg(e, n, s) : Ei(t) ? io(t) || Rg(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ug(e, t, s, r)) ? (Sl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wl(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !we(s)) ? Sl(e, tt(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), wl(e, t, s, r));
};
function Ug(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && kl(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return kl(t) && we(n) ? !1 : t in e;
}
const Bg = ["ctrl", "shift", "alt", "meta"], zg = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Bg.some((n) => e[`${n}Key`] && !t.includes(n))
}, ss = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const a = zg[t[r]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  });
}, Yg = /* @__PURE__ */ Te({ patchProp: Wg }, wg);
let Cl;
function Kg() {
  return Cl || (Cl = zp(Yg));
}
const Gg = (...e) => {
  const t = Kg().createApp(...e);
  process.env.NODE_ENV !== "production" && (qg(t), Jg(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const i = Qg(s);
    if (!i) return;
    const o = t._component;
    !J(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, Xg(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function Xg(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qg(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => sh(t) || ih(t) || oh(t),
    writable: !1
  });
}
function Jg(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        on(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return on(s), n;
      },
      set() {
        on(s);
      }
    });
  }
}
function Qg(e) {
  if (we(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && on(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && on(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Zg() {
  xg();
}
process.env.NODE_ENV !== "production" && Zg();
/*!
  * shared v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const Dt = typeof window < "u";
let mt, Zn;
if (process.env.NODE_ENV !== "production") {
  const e = Dt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (mt = (t) => {
    e.mark(t);
  }, Zn = (t, n, s) => {
    e.measure(t, n, s), e.clearMarks(n), e.clearMarks(s);
  });
}
const e_ = /\{([0-9a-zA-Z]+)\}/g;
function jo(e, ...t) {
  return t.length === 1 && ae(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(e_, (n, s) => t.hasOwnProperty(s) ? t[s] : "");
}
const Ut = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), t_ = (e, t, n) => n_({ l: e, k: t, s: n }), n_ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Fe = (e) => typeof e == "number" && isFinite(e), s_ = (e) => Oa(e) === "[object Date]", xs = (e) => Oa(e) === "[object RegExp]", Ho = (e) => ne(e) && Object.keys(e).length === 0, $e = Object.assign;
let Ml;
const Hn = () => Ml || (Ml = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ll(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const i_ = Object.prototype.hasOwnProperty;
function go(e, t) {
  return i_.call(e, t);
}
const Se = Array.isArray, Ee = (e) => typeof e == "function", H = (e) => typeof e == "string", ce = (e) => typeof e == "boolean", ae = (e) => e !== null && typeof e == "object", o_ = (e) => ae(e) && Ee(e.then) && Ee(e.catch), Lf = Object.prototype.toString, Oa = (e) => Lf.call(e), ne = (e) => Oa(e) === "[object Object]", r_ = (e) => e == null ? "" : Se(e) || ne(e) && e.toString === Lf ? JSON.stringify(e, null, 2) : String(e);
function Na(e, t = "") {
  return e.reduce((n, s, i) => i === 0 ? n + s : n + t + s, "");
}
const Il = 2;
function a_(e, t = 0, n = e.length) {
  const s = e.split(/\r?\n/);
  let i = 0;
  const o = [];
  for (let r = 0; r < s.length; r++)
    if (i += s[r].length + 1, i >= t) {
      for (let a = r - Il; a <= r + Il || n > i; a++) {
        if (a < 0 || a >= s.length)
          continue;
        const l = a + 1;
        o.push(`${l}${" ".repeat(3 - String(l).length)}|  ${s[a]}`);
        const c = s[a].length;
        if (a === r) {
          const u = t - (i - c) + 1, f = Math.max(1, n > i ? c - u : n - t);
          o.push("   |  " + " ".repeat(u) + "^".repeat(f));
        } else if (a > r) {
          if (n > i) {
            const u = Math.max(Math.min(n - i, c), 1);
            o.push("   |  " + "^".repeat(u));
          }
          i += c + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function An(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Pl = {};
function If(e) {
  Pl[e] || (Pl[e] = !0, An(e));
}
function wa() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, s) {
      const i = e.get(n);
      i && i.push(s) || e.set(n, [s]);
    },
    off(n, s) {
      const i = e.get(n);
      i && i.splice(i.indexOf(s) >>> 0, 1);
    },
    emit(n, s) {
      (e.get(n) || []).slice().map((i) => i(s)), (e.get("*") || []).slice().map((i) => i(n, s));
    }
  };
}
const Li = (e) => !ae(e) || Se(e);
function to(e, t) {
  if (Li(e) || Li(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: s, des: i } = n.pop();
    Object.keys(s).forEach((o) => {
      ae(s[o]) && !ae(i[o]) && (i[o] = Array.isArray(s[o]) ? [] : {}), Li(i[o]) || Li(s[o]) ? i[o] = s[o] : n.push({ src: s[o], des: i[o] });
    });
  }
}
/*!
  * message-compiler v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function l_(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Pr(e, t, n) {
  return { start: e, end: t };
}
const Q = {
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
}, c_ = 17, u_ = {
  // tokenizer error messages
  [Q.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [Q.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [Q.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [Q.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [Q.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [Q.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [Q.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [Q.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [Q.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [Q.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [Q.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [Q.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [Q.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [Q.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [Q.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Ts(e, t, n = {}) {
  const { domain: s, messages: i, args: o } = n, r = process.env.NODE_ENV !== "production" ? jo((i || u_)[e] || "", ...o || []) : e, a = new SyntaxError(String(r));
  return a.code = e, t && (a.location = t), a.domain = s, a;
}
function f_(e) {
  throw e;
}
const d_ = /<\/?[\w\s="/.':;#-\/]+>/, h_ = (e) => d_.test(e), Xt = " ", p_ = "\r", Ze = `
`, g_ = "\u2028", __ = "\u2029";
function m_(e) {
  const t = e;
  let n = 0, s = 1, i = 1, o = 0;
  const r = (A) => t[A] === p_ && t[A + 1] === Ze, a = (A) => t[A] === Ze, l = (A) => t[A] === __, c = (A) => t[A] === g_, u = (A) => r(A) || a(A) || l(A) || c(A), f = () => n, d = () => s, h = () => i, v = () => o, b = (A) => r(A) || l(A) || c(A) ? Ze : t[A], E = () => b(n), _ = () => b(n + o);
  function y() {
    return o = 0, u(n) && (s++, i = 0), r(n) && n++, n++, i++, t[n];
  }
  function N() {
    return r(n + o) && o++, o++, t[n + o];
  }
  function w() {
    n = 0, s = 1, i = 1, o = 0;
  }
  function S(A = 0) {
    o = A;
  }
  function L() {
    const A = n + o;
    for (; A !== n; )
      y();
    o = 0;
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: v,
    charAt: b,
    currentChar: E,
    currentPeek: _,
    next: y,
    peek: N,
    reset: w,
    resetPeek: S,
    skipToPeek: L
  };
}
const hn = void 0, b_ = ".", Rl = "'", v_ = "tokenizer";
function y_(e, t = {}) {
  const n = t.location !== !1, s = m_(e), i = () => s.index(), o = () => l_(s.line(), s.column(), s.index()), r = o(), a = i(), l = {
    currentType: 13,
    offset: a,
    startLoc: r,
    endLoc: r,
    lastType: 13,
    lastOffset: a,
    lastStartLoc: r,
    lastEndLoc: r,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: u } = t;
  function f(p, g, T, ...C) {
    const P = c();
    if (g.column += T, g.offset += T, u) {
      const I = n ? Pr(P.startLoc, g) : null, $ = Ts(p, I, {
        domain: v_,
        args: C
      });
      u($);
    }
  }
  function d(p, g, T) {
    p.endLoc = o(), p.currentType = g;
    const C = { type: g };
    return n && (C.loc = Pr(p.startLoc, p.endLoc)), T != null && (C.value = T), C;
  }
  const h = (p) => d(
    p,
    13
    /* TokenTypes.EOF */
  );
  function v(p, g) {
    return p.currentChar() === g ? (p.next(), g) : (f(Q.EXPECTED_TOKEN, o(), 0, g), "");
  }
  function b(p) {
    let g = "";
    for (; p.currentPeek() === Xt || p.currentPeek() === Ze; )
      g += p.currentPeek(), p.peek();
    return g;
  }
  function E(p) {
    const g = b(p);
    return p.skipToPeek(), g;
  }
  function _(p) {
    if (p === hn)
      return !1;
    const g = p.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g === 95;
  }
  function y(p) {
    if (p === hn)
      return !1;
    const g = p.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function N(p, g) {
    const { currentType: T } = g;
    if (T !== 2)
      return !1;
    b(p);
    const C = _(p.currentPeek());
    return p.resetPeek(), C;
  }
  function w(p, g) {
    const { currentType: T } = g;
    if (T !== 2)
      return !1;
    b(p);
    const C = p.currentPeek() === "-" ? p.peek() : p.currentPeek(), P = y(C);
    return p.resetPeek(), P;
  }
  function S(p, g) {
    const { currentType: T } = g;
    if (T !== 2)
      return !1;
    b(p);
    const C = p.currentPeek() === Rl;
    return p.resetPeek(), C;
  }
  function L(p, g) {
    const { currentType: T } = g;
    if (T !== 7)
      return !1;
    b(p);
    const C = p.currentPeek() === ".";
    return p.resetPeek(), C;
  }
  function A(p, g) {
    const { currentType: T } = g;
    if (T !== 8)
      return !1;
    b(p);
    const C = _(p.currentPeek());
    return p.resetPeek(), C;
  }
  function F(p, g) {
    const { currentType: T } = g;
    if (!(T === 7 || T === 11))
      return !1;
    b(p);
    const C = p.currentPeek() === ":";
    return p.resetPeek(), C;
  }
  function W(p, g) {
    const { currentType: T } = g;
    if (T !== 9)
      return !1;
    const C = () => {
      const I = p.currentPeek();
      return I === "{" ? _(p.peek()) : I === "@" || I === "|" || I === ":" || I === "." || I === Xt || !I ? !1 : I === Ze ? (p.peek(), C()) : q(p, !1);
    }, P = C();
    return p.resetPeek(), P;
  }
  function U(p) {
    b(p);
    const g = p.currentPeek() === "|";
    return p.resetPeek(), g;
  }
  function q(p, g = !0) {
    const T = (P = !1, I = "") => {
      const $ = p.currentPeek();
      return $ === "{" || $ === "@" || !$ ? P : $ === "|" ? !(I === Xt || I === Ze) : $ === Xt ? (p.peek(), T(!0, Xt)) : $ === Ze ? (p.peek(), T(!0, Ze)) : !0;
    }, C = T();
    return g && p.resetPeek(), C;
  }
  function B(p, g) {
    const T = p.currentChar();
    return T === hn ? hn : g(T) ? (p.next(), T) : null;
  }
  function ge(p) {
    const g = p.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36;
  }
  function ke(p) {
    return B(p, ge);
  }
  function te(p) {
    const g = p.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36 || // $
    g === 45;
  }
  function Z(p) {
    return B(p, te);
  }
  function Y(p) {
    const g = p.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function G(p) {
    return B(p, Y);
  }
  function de(p) {
    const g = p.charCodeAt(0);
    return g >= 48 && g <= 57 || // 0-9
    g >= 65 && g <= 70 || // A-F
    g >= 97 && g <= 102;
  }
  function Ce(p) {
    return B(p, de);
  }
  function ze(p) {
    let g = "", T = "";
    for (; g = G(p); )
      T += g;
    return T;
  }
  function We(p) {
    let g = "";
    for (; ; ) {
      const T = p.currentChar();
      if (T === "{" || T === "}" || T === "@" || T === "|" || !T)
        break;
      if (T === Xt || T === Ze)
        if (q(p))
          g += T, p.next();
        else {
          if (U(p))
            break;
          g += T, p.next();
        }
      else
        g += T, p.next();
    }
    return g;
  }
  function je(p) {
    E(p);
    let g = "", T = "";
    for (; g = Z(p); )
      T += g;
    return p.currentChar() === hn && f(Q.UNTERMINATED_CLOSING_BRACE, o(), 0), T;
  }
  function qe(p) {
    E(p);
    let g = "";
    return p.currentChar() === "-" ? (p.next(), g += `-${ze(p)}`) : g += ze(p), p.currentChar() === hn && f(Q.UNTERMINATED_CLOSING_BRACE, o(), 0), g;
  }
  function xt(p) {
    return p !== Rl && p !== Ze;
  }
  function bt(p) {
    E(p), v(p, "'");
    let g = "", T = "";
    for (; g = B(p, xt); )
      g === "\\" ? T += zt(p) : T += g;
    const C = p.currentChar();
    return C === Ze || C === hn ? (f(Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), C === Ze && (p.next(), v(p, "'")), T) : (v(p, "'"), T);
  }
  function zt(p) {
    const g = p.currentChar();
    switch (g) {
      case "\\":
      case "'":
        return p.next(), `\\${g}`;
      case "u":
        return Yt(p, g, 4);
      case "U":
        return Yt(p, g, 6);
      default:
        return f(Q.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, g), "";
    }
  }
  function Yt(p, g, T) {
    v(p, g);
    let C = "";
    for (let P = 0; P < T; P++) {
      const I = Ce(p);
      if (!I) {
        f(Q.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${g}${C}${p.currentChar()}`);
        break;
      }
      C += I;
    }
    return `\\${g}${C}`;
  }
  function Cn(p) {
    return p !== "{" && p !== "}" && p !== Xt && p !== Ze;
  }
  function rs(p) {
    E(p);
    let g = "", T = "";
    for (; g = B(p, Cn); )
      T += g;
    return T;
  }
  function Kt(p) {
    let g = "", T = "";
    for (; g = ke(p); )
      T += g;
    return T;
  }
  function as(p) {
    const g = (T) => {
      const C = p.currentChar();
      return C === "{" || C === "@" || C === "|" || C === "(" || C === ")" || !C || C === Xt ? T : (T += C, p.next(), g(T));
    };
    return g("");
  }
  function dn(p) {
    E(p);
    const g = v(
      p,
      "|"
      /* TokenChars.Pipe */
    );
    return E(p), g;
  }
  function m(p, g) {
    let T = null;
    switch (p.currentChar()) {
      case "{":
        return g.braceNest >= 1 && f(Q.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), p.next(), T = d(
          g,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(p), g.braceNest++, T;
      case "}":
        return g.braceNest > 0 && g.currentType === 2 && f(Q.EMPTY_PLACEHOLDER, o(), 0), p.next(), T = d(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), g.braceNest--, g.braceNest > 0 && E(p), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), T;
      case "@":
        return g.braceNest > 0 && f(Q.UNTERMINATED_CLOSING_BRACE, o(), 0), T = x(p, g) || h(g), g.braceNest = 0, T;
      default: {
        let P = !0, I = !0, $ = !0;
        if (U(p))
          return g.braceNest > 0 && f(Q.UNTERMINATED_CLOSING_BRACE, o(), 0), T = d(g, 1, dn(p)), g.braceNest = 0, g.inLinked = !1, T;
        if (g.braceNest > 0 && (g.currentType === 4 || g.currentType === 5 || g.currentType === 6))
          return f(Q.UNTERMINATED_CLOSING_BRACE, o(), 0), g.braceNest = 0, M(p, g);
        if (P = N(p, g))
          return T = d(g, 4, je(p)), E(p), T;
        if (I = w(p, g))
          return T = d(g, 5, qe(p)), E(p), T;
        if ($ = S(p, g))
          return T = d(g, 6, bt(p)), E(p), T;
        if (!P && !I && !$)
          return T = d(g, 12, rs(p)), f(Q.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, T.value), E(p), T;
        break;
      }
    }
    return T;
  }
  function x(p, g) {
    const { currentType: T } = g;
    let C = null;
    const P = p.currentChar();
    switch ((T === 7 || T === 8 || T === 11 || T === 9) && (P === Ze || P === Xt) && f(Q.INVALID_LINKED_FORMAT, o(), 0), P) {
      case "@":
        return p.next(), C = d(
          g,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), g.inLinked = !0, C;
      case ".":
        return E(p), p.next(), d(
          g,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(p), p.next(), d(
          g,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return U(p) ? (C = d(g, 1, dn(p)), g.braceNest = 0, g.inLinked = !1, C) : L(p, g) || F(p, g) ? (E(p), x(p, g)) : A(p, g) ? (E(p), d(g, 11, Kt(p))) : W(p, g) ? (E(p), P === "{" ? m(p, g) || C : d(g, 10, as(p))) : (T === 7 && f(Q.INVALID_LINKED_FORMAT, o(), 0), g.braceNest = 0, g.inLinked = !1, M(p, g));
    }
  }
  function M(p, g) {
    let T = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (g.braceNest > 0)
      return m(p, g) || h(g);
    if (g.inLinked)
      return x(p, g) || h(g);
    switch (p.currentChar()) {
      case "{":
        return m(p, g) || h(g);
      case "}":
        return f(Q.UNBALANCED_CLOSING_BRACE, o(), 0), p.next(), d(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return x(p, g) || h(g);
      default: {
        if (U(p))
          return T = d(g, 1, dn(p)), g.braceNest = 0, g.inLinked = !1, T;
        if (q(p))
          return d(g, 0, We(p));
        break;
      }
    }
    return T;
  }
  function R() {
    const { currentType: p, offset: g, startLoc: T, endLoc: C } = l;
    return l.lastType = p, l.lastOffset = g, l.lastStartLoc = T, l.lastEndLoc = C, l.offset = i(), l.startLoc = o(), s.currentChar() === hn ? d(
      l,
      13
      /* TokenTypes.EOF */
    ) : M(s, l);
  }
  return {
    nextToken: R,
    currentOffset: i,
    currentPosition: o,
    context: c
  };
}
const E_ = "parser", x_ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function O_(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const s = parseInt(t || n, 16);
      return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�";
    }
  }
}
function N_(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function s(_, y, N, w, ...S) {
    const L = _.currentPosition();
    if (L.offset += w, L.column += w, n) {
      const A = t ? Pr(N, L) : null, F = Ts(y, A, {
        domain: E_,
        args: S
      });
      n(F);
    }
  }
  function i(_, y, N) {
    const w = { type: _ };
    return t && (w.start = y, w.end = y, w.loc = { start: N, end: N }), w;
  }
  function o(_, y, N, w) {
    t && (_.end = y, _.loc && (_.loc.end = N));
  }
  function r(_, y) {
    const N = _.context(), w = i(3, N.offset, N.startLoc);
    return w.value = y, o(w, _.currentOffset(), _.currentPosition()), w;
  }
  function a(_, y) {
    const N = _.context(), { lastOffset: w, lastStartLoc: S } = N, L = i(5, w, S);
    return L.index = parseInt(y, 10), _.nextToken(), o(L, _.currentOffset(), _.currentPosition()), L;
  }
  function l(_, y) {
    const N = _.context(), { lastOffset: w, lastStartLoc: S } = N, L = i(4, w, S);
    return L.key = y, _.nextToken(), o(L, _.currentOffset(), _.currentPosition()), L;
  }
  function c(_, y) {
    const N = _.context(), { lastOffset: w, lastStartLoc: S } = N, L = i(9, w, S);
    return L.value = y.replace(x_, O_), _.nextToken(), o(L, _.currentOffset(), _.currentPosition()), L;
  }
  function u(_) {
    const y = _.nextToken(), N = _.context(), { lastOffset: w, lastStartLoc: S } = N, L = i(8, w, S);
    return y.type !== 11 ? (s(_, Q.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), L.value = "", o(L, w, S), {
      nextConsumeToken: y,
      node: L
    }) : (y.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, Mt(y)), L.value = y.value || "", o(L, _.currentOffset(), _.currentPosition()), {
      node: L
    });
  }
  function f(_, y) {
    const N = _.context(), w = i(7, N.offset, N.startLoc);
    return w.value = y, o(w, _.currentOffset(), _.currentPosition()), w;
  }
  function d(_) {
    const y = _.context(), N = i(6, y.offset, y.startLoc);
    let w = _.nextToken();
    if (w.type === 8) {
      const S = u(_);
      N.modifier = S.node, w = S.nextConsumeToken || _.nextToken();
    }
    switch (w.type !== 9 && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(w)), w = _.nextToken(), w.type === 2 && (w = _.nextToken()), w.type) {
      case 10:
        w.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(w)), N.key = f(_, w.value || "");
        break;
      case 4:
        w.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(w)), N.key = l(_, w.value || "");
        break;
      case 5:
        w.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(w)), N.key = a(_, w.value || "");
        break;
      case 6:
        w.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(w)), N.key = c(_, w.value || "");
        break;
      default: {
        s(_, Q.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const S = _.context(), L = i(7, S.offset, S.startLoc);
        return L.value = "", o(L, S.offset, S.startLoc), N.key = L, o(N, S.offset, S.startLoc), {
          nextConsumeToken: w,
          node: N
        };
      }
    }
    return o(N, _.currentOffset(), _.currentPosition()), {
      node: N
    };
  }
  function h(_) {
    const y = _.context(), N = y.currentType === 1 ? _.currentOffset() : y.offset, w = y.currentType === 1 ? y.endLoc : y.startLoc, S = i(2, N, w);
    S.items = [];
    let L = null;
    do {
      const W = L || _.nextToken();
      switch (L = null, W.type) {
        case 0:
          W.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(W)), S.items.push(r(_, W.value || ""));
          break;
        case 5:
          W.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(W)), S.items.push(a(_, W.value || ""));
          break;
        case 4:
          W.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(W)), S.items.push(l(_, W.value || ""));
          break;
        case 6:
          W.value == null && s(_, Q.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Mt(W)), S.items.push(c(_, W.value || ""));
          break;
        case 7: {
          const U = d(_);
          S.items.push(U.node), L = U.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 13 && y.currentType !== 1);
    const A = y.currentType === 1 ? y.lastOffset : _.currentOffset(), F = y.currentType === 1 ? y.lastEndLoc : _.currentPosition();
    return o(S, A, F), S;
  }
  function v(_, y, N, w) {
    const S = _.context();
    let L = w.items.length === 0;
    const A = i(1, y, N);
    A.cases = [], A.cases.push(w);
    do {
      const F = h(_);
      L || (L = F.items.length === 0), A.cases.push(F);
    } while (S.currentType !== 13);
    return L && s(_, Q.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), o(A, _.currentOffset(), _.currentPosition()), A;
  }
  function b(_) {
    const y = _.context(), { offset: N, startLoc: w } = y, S = h(_);
    return y.currentType === 13 ? S : v(_, N, w, S);
  }
  function E(_) {
    const y = y_(_, $e({}, e)), N = y.context(), w = i(0, N.offset, N.startLoc);
    return t && w.loc && (w.loc.source = _), w.body = b(y), e.onCacheKey && (w.cacheKey = e.onCacheKey(_)), N.currentType !== 13 && s(y, Q.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, _[N.offset] || ""), o(w, y.currentOffset(), y.currentPosition()), w;
  }
  return { parse: E };
}
function Mt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function w_(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) };
}
function Fl(e, t) {
  for (let n = 0; n < e.length; n++)
    Sa(e[n], t);
}
function Sa(e, t) {
  switch (e.type) {
    case 1:
      Fl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Fl(e.items, t);
      break;
    case 6: {
      Sa(e.key, t), t.helper(
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
function S_(e, t = {}) {
  const n = w_(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Sa(e.body, n);
  const s = n.context();
  e.helpers = Array.from(s.helpers);
}
function T_(e) {
  const t = e.body;
  return t.type === 2 ? Vl(t) : t.cases.forEach((n) => Vl(n)), e;
}
function Vl(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const s = e.items[n];
      if (!(s.type === 3 || s.type === 9) || s.value == null)
        break;
      t.push(s.value);
    }
    if (t.length === e.items.length) {
      e.static = Na(t);
      for (let n = 0; n < e.items.length; n++) {
        const s = e.items[n];
        (s.type === 3 || s.type === 9) && delete s.value;
      }
    }
  }
}
const D_ = "minifier";
function ps(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      ps(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let s = 0; s < n.length; s++)
        ps(n[s]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let s = 0; s < n.length; s++)
        ps(n[s]);
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
      ps(t.key), t.k = t.key, delete t.key, t.modifier && (ps(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw Ts(Q.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: D_,
          args: [e.type]
        });
  }
  delete e.type;
}
const A_ = "parser";
function k_(e, t) {
  const { sourceMap: n, filename: s, breakLineCode: i, needIndent: o } = t, r = t.location !== !1, a = {
    filename: s,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: o,
    indentLevel: 0
  };
  r && e.loc && (a.source = e.loc.source);
  const l = () => a;
  function c(E, _) {
    a.code += E;
  }
  function u(E, _ = !0) {
    const y = _ ? i : "";
    c(o ? y + "  ".repeat(E) : y);
  }
  function f(E = !0) {
    const _ = ++a.indentLevel;
    E && u(_);
  }
  function d(E = !0) {
    const _ = --a.indentLevel;
    E && u(_);
  }
  function h() {
    u(a.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: f,
    deindent: d,
    newline: h,
    helper: (E) => `_${E}`,
    needIndent: () => a.needIndent
  };
}
function C_(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Os(e, t.key), t.modifier ? (e.push(", "), Os(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function M_(e, t) {
  const { helper: n, needIndent: s } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(s());
  const i = t.items.length;
  for (let o = 0; o < i && (Os(e, t.items[o]), o !== i - 1); o++)
    e.push(", ");
  e.deindent(s()), e.push("])");
}
function L_(e, t) {
  const { helper: n, needIndent: s } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(s());
    const i = t.cases.length;
    for (let o = 0; o < i && (Os(e, t.cases[o]), o !== i - 1); o++)
      e.push(", ");
    e.deindent(s()), e.push("])");
  }
}
function I_(e, t) {
  t.body ? Os(e, t.body) : e.push("null");
}
function Os(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      I_(e, t);
      break;
    case 1:
      L_(e, t);
      break;
    case 2:
      M_(e, t);
      break;
    case 6:
      C_(e, t);
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
        throw Ts(Q.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: A_,
          args: [t.type]
        });
  }
}
const P_ = (e, t = {}) => {
  const n = H(t.mode) ? t.mode : "normal", s = H(t.filename) ? t.filename : "message.intl", i = !!t.sourceMap, o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = k_(e, {
    mode: n,
    filename: s,
    sourceMap: i,
    breakLineCode: o,
    needIndent: r
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(r), a.length > 0 && (l.push(`const { ${Na(a.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), Os(l, e), l.deindent(r), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function R_(e, t = {}) {
  const n = $e({}, t), s = !!n.jit, i = !!n.minify, o = n.optimize == null ? !0 : n.optimize, a = N_(n).parse(e);
  return s ? (o && T_(a), i && ps(a), { ast: a, code: "" }) : (S_(a, n), P_(a, n));
}
/*!
  * core-base v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function F_() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Hn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function or(e) {
  return (n) => V_(n, e);
}
function V_(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const s = n, i = s.c || s.cases;
    return e.plural(i.reduce((o, r) => [
      ...o,
      $l(e, r)
    ], []));
  } else
    return $l(e, n);
}
function $l(e, t) {
  const n = t.s || t.static;
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const s = (t.i || t.items).reduce((i, o) => [...i, Rr(e, o)], []);
    return e.normalize(s);
  }
}
function Rr(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3: {
      const s = t;
      return s.v || s.value;
    }
    case 9: {
      const s = t;
      return s.v || s.value;
    }
    case 4: {
      const s = t;
      return e.interpolate(e.named(s.k || s.key));
    }
    case 5: {
      const s = t;
      return e.interpolate(e.list(s.i != null ? s.i : s.index));
    }
    case 6: {
      const s = t, i = s.m || s.modifier;
      return e.linked(Rr(e, s.k || s.key), i ? Rr(e, i) : void 0, e.type);
    }
    case 7: {
      const s = t;
      return s.v || s.value;
    }
    case 8: {
      const s = t;
      return s.v || s.value;
    }
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const $_ = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function j_(e, t) {
  t && h_(e) && An(jo($_, { source: e }));
}
const H_ = (e) => e;
let Ii = /* @__PURE__ */ Object.create(null);
const Sn = (e) => ae(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function W_(e, t = {}) {
  let n = !1;
  const s = t.onError || f_;
  return t.onError = (i) => {
    n = !0, s(i);
  }, { ...R_(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function U_(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && H(e)) {
    const n = ce(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && j_(e, n);
    const i = (t.onCacheKey || H_)(e), o = Ii[i];
    if (o)
      return o;
    const { ast: r, detectError: a } = W_(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = or(r);
    return a ? l : Ii[i] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Sn(e))
      return An(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const s = Ii[n];
      return s || (Ii[n] = or(e));
    } else
      return or(e);
  }
}
let di = null;
function B_(e) {
  di = e;
}
function z_(e, t, n) {
  di && di.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Y_ = /* @__PURE__ */ K_("function:translate");
function K_(e) {
  return (t) => di && di.emit(e, t);
}
const Ke = {
  INVALID_ARGUMENT: c_,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, G_ = 24;
function sn(e) {
  return Ts(e, null, process.env.NODE_ENV !== "production" ? { messages: X_ } : void 0);
}
const X_ = {
  [Ke.INVALID_ARGUMENT]: "Invalid arguments",
  [Ke.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ke.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ke.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ke.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ke.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ke.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Ta(e, t) {
  return t.locale != null ? jl(t.locale) : jl(e.locale);
}
let rr;
function jl(e) {
  if (H(e))
    return e;
  if (Ee(e)) {
    if (e.resolvedOnce && rr != null)
      return rr;
    if (e.constructor.name === "Function") {
      const t = e();
      if (o_(t))
        throw sn(Ke.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return rr = t;
    } else
      throw sn(Ke.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw sn(Ke.NOT_SUPPORT_LOCALE_TYPE);
}
function q_(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Se(t) ? t : ae(t) ? Object.keys(t) : H(t) ? [t] : [n]
  ])];
}
function Pf(e, t, n) {
  const s = H(n) ? n : hi, i = e;
  i.__localeChainCache || (i.__localeChainCache = /* @__PURE__ */ new Map());
  let o = i.__localeChainCache.get(s);
  if (!o) {
    o = [];
    let r = [n];
    for (; Se(r); )
      r = Hl(o, r, t);
    const a = Se(t) || !ne(t) ? t : t.default ? t.default : null;
    r = H(a) ? [a] : a, Se(r) && Hl(o, r, !1), i.__localeChainCache.set(s, o);
  }
  return o;
}
function Hl(e, t, n) {
  let s = !0;
  for (let i = 0; i < t.length && ce(s); i++) {
    const o = t[i];
    H(o) && (s = J_(e, t[i], n));
  }
  return s;
}
function J_(e, t, n) {
  let s;
  const i = t.split("-");
  do {
    const o = i.join("-");
    s = Q_(e, o, n), i.splice(-1, 1);
  } while (i.length && s === !0);
  return s;
}
function Q_(e, t, n) {
  let s = !1;
  if (!e.includes(t) && (s = !0, t)) {
    s = t[t.length - 1] !== "!";
    const i = t.replace(/!/g, "");
    e.push(i), (Se(n) || ne(n)) && n[i] && (s = n[i]);
  }
  return s;
}
const kn = [];
kn[
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
kn[
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
kn[
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
kn[
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
kn[
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
kn[
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
kn[
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
const Z_ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function em(e) {
  return Z_.test(e);
}
function tm(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function nm(e) {
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
function sm(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : em(t) ? tm(t) : "*" + t;
}
function im(e) {
  const t = [];
  let n = -1, s = 0, i = 0, o, r, a, l, c, u, f;
  const d = [];
  d[
    0
    /* Actions.APPEND */
  ] = () => {
    r === void 0 ? r = a : r += a;
  }, d[
    1
    /* Actions.PUSH */
  ] = () => {
    r !== void 0 && (t.push(r), r = void 0);
  }, d[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    d[
      0
      /* Actions.APPEND */
    ](), i++;
  }, d[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (i > 0)
      i--, s = 4, d[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (i = 0, r === void 0 || (r = sm(r), r === !1))
        return !1;
      d[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const v = e[n + 1];
    if (s === 5 && v === "'" || s === 6 && v === '"')
      return n++, a = "\\" + v, d[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; s !== null; )
    if (n++, o = e[n], !(o === "\\" && h())) {
      if (l = nm(o), f = kn[s], c = f[l] || f.l || 8, c === 8 || (s = c[0], c[1] !== void 0 && (u = d[c[1]], u && (a = o, u() === !1))))
        return;
      if (s === 7)
        return t;
    }
}
const Wl = /* @__PURE__ */ new Map();
function om(e, t) {
  return ae(e) ? e[t] : null;
}
function rm(e, t) {
  if (!ae(e))
    return null;
  let n = Wl.get(t);
  if (n || (n = im(t), n && Wl.set(t, n)), !n)
    return null;
  const s = n.length;
  let i = e, o = 0;
  for (; o < s; ) {
    const r = i[n[o]];
    if (r === void 0 || Ee(i))
      return null;
    i = r, o++;
  }
  return i;
}
const at = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, am = 8, lm = {
  [at.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [at.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [at.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [at.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [at.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [at.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [at.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function es(e, ...t) {
  return jo(lm[e], ...t);
}
const cm = "10.0.4", Wo = -1, hi = "en-US", _o = "", Ul = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function um() {
  return {
    upper: (e, t) => t === "text" && H(e) ? e.toUpperCase() : t === "vnode" && ae(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && H(e) ? e.toLowerCase() : t === "vnode" && ae(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && H(e) ? Ul(e) : t === "vnode" && ae(e) && "__v_isVNode" in e ? Ul(e.children) : e
  };
}
let Rf;
function fm(e) {
  Rf = e;
}
let Ff;
function dm(e) {
  Ff = e;
}
let Vf;
function hm(e) {
  Vf = e;
}
let $f = null;
const pm = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  $f = e;
}, gm = /* @__NO_SIDE_EFFECTS__ */ () => $f;
let jf = null;
const Bl = (e) => {
  jf = e;
}, _m = () => jf;
let zl = 0;
function mm(e = {}) {
  const t = Ee(e.onWarn) ? e.onWarn : An, n = H(e.version) ? e.version : cm, s = H(e.locale) || Ee(e.locale) ? e.locale : hi, i = Ee(s) ? hi : s, o = Se(e.fallbackLocale) || ne(e.fallbackLocale) || H(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, r = ne(e.messages) ? e.messages : { [i]: {} }, a = ne(e.datetimeFormats) ? e.datetimeFormats : { [i]: {} }, l = ne(e.numberFormats) ? e.numberFormats : { [i]: {} }, c = $e({}, e.modifiers || {}, um()), u = e.pluralRules || {}, f = Ee(e.missing) ? e.missing : null, d = ce(e.missingWarn) || xs(e.missingWarn) ? e.missingWarn : !0, h = ce(e.fallbackWarn) || xs(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, b = !!e.unresolving, E = Ee(e.postTranslation) ? e.postTranslation : null, _ = ne(e.processor) ? e.processor : null, y = ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, N = !!e.escapeParameter, w = Ee(e.messageCompiler) ? e.messageCompiler : Rf;
  process.env.NODE_ENV !== "production" && Ee(e.messageCompiler) && If(es(at.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const S = Ee(e.messageResolver) ? e.messageResolver : Ff || om, L = Ee(e.localeFallbacker) ? e.localeFallbacker : Vf || q_, A = ae(e.fallbackContext) ? e.fallbackContext : void 0, F = e, W = ae(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), U = ae(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), q = ae(F.__meta) ? F.__meta : {};
  zl++;
  const B = {
    version: n,
    cid: zl,
    locale: s,
    fallbackLocale: o,
    messages: r,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: v,
    unresolving: b,
    postTranslation: E,
    processor: _,
    warnHtmlMessage: y,
    escapeParameter: N,
    messageCompiler: w,
    messageResolver: S,
    localeFallbacker: L,
    fallbackContext: A,
    onWarn: t,
    __meta: q
  };
  return B.datetimeFormats = a, B.numberFormats = l, B.__datetimeFormatters = W, B.__numberFormatters = U, process.env.NODE_ENV !== "production" && (B.__v_emitter = F.__v_emitter != null ? F.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && z_(B, n, q), B;
}
function Uo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Hf(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Da(e, t, n, s, i) {
  const { missing: o, onWarn: r } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = e.__v_emitter;
    a && a.emit("missing", {
      locale: n,
      key: t,
      type: i,
      groupId: `${i}:${t}`
    });
  }
  if (o !== null) {
    const a = o(e, n, t, i);
    return H(a) ? a : t;
  } else
    return process.env.NODE_ENV !== "production" && Hf(s, t) && r(es(at.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ps(e, t, n) {
  const s = e;
  s.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Wf(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function bm(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let s = n + 1; s < t.length; s++)
    if (Wf(e, t[s]))
      return !0;
  return !1;
}
const Yl = typeof Intl < "u", Uf = {
  dateTimeFormat: Yl && typeof Intl.DateTimeFormat < "u",
  numberFormat: Yl && typeof Intl.NumberFormat < "u"
};
function Kl(e, ...t) {
  const { datetimeFormats: n, unresolving: s, fallbackLocale: i, onWarn: o, localeFallbacker: r } = e, { __datetimeFormatters: a } = e;
  if (process.env.NODE_ENV !== "production" && !Uf.dateTimeFormat)
    return o(es(at.CANNOT_FORMAT_DATE)), _o;
  const [l, c, u, f] = Fr(...t), d = ce(u.missingWarn) ? u.missingWarn : e.missingWarn, h = ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = !!u.part, b = Ta(e, u), E = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    b
  );
  if (!H(l) || l === "")
    return new Intl.DateTimeFormat(b, f).format(c);
  let _ = {}, y, N = null, w = b, S = null;
  const L = "datetime format";
  for (let W = 0; W < E.length; W++) {
    if (y = S = E[W], process.env.NODE_ENV !== "production" && b !== y && Uo(h, l) && o(es(at.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && b !== y) {
      const U = e.__v_emitter;
      U && U.emit("fallback", {
        type: L,
        key: l,
        from: w,
        to: S,
        groupId: `${L}:${l}`
      });
    }
    if (_ = n[y] || {}, N = _[l], ne(N))
      break;
    Da(e, l, y, d, L), w = S;
  }
  if (!ne(N) || !H(y))
    return s ? Wo : l;
  let A = `${y}__${l}`;
  Ho(f) || (A = `${A}__${JSON.stringify(f)}`);
  let F = a.get(A);
  return F || (F = new Intl.DateTimeFormat(y, $e({}, N, f)), a.set(A, F)), v ? F.formatToParts(c) : F.format(c);
}
const Bf = [
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
function Fr(...e) {
  const [t, n, s, i] = e, o = {};
  let r = {}, a;
  if (H(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw sn(Ke.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw sn(Ke.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (s_(t)) {
    if (isNaN(t.getTime()))
      throw sn(Ke.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (Fe(t))
    a = t;
  else
    throw sn(Ke.INVALID_ARGUMENT);
  return H(n) ? o.key = n : ne(n) && Object.keys(n).forEach((l) => {
    Bf.includes(l) ? r[l] = n[l] : o[l] = n[l];
  }), H(s) ? o.locale = s : ne(s) && (r = s), ne(i) && (r = i), [o.key || "", a, o, r];
}
function Gl(e, t, n) {
  const s = e;
  for (const i in n) {
    const o = `${t}__${i}`;
    s.__datetimeFormatters.has(o) && s.__datetimeFormatters.delete(o);
  }
}
function Xl(e, ...t) {
  const { numberFormats: n, unresolving: s, fallbackLocale: i, onWarn: o, localeFallbacker: r } = e, { __numberFormatters: a } = e;
  if (process.env.NODE_ENV !== "production" && !Uf.numberFormat)
    return o(es(at.CANNOT_FORMAT_NUMBER)), _o;
  const [l, c, u, f] = Vr(...t), d = ce(u.missingWarn) ? u.missingWarn : e.missingWarn, h = ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = !!u.part, b = Ta(e, u), E = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    b
  );
  if (!H(l) || l === "")
    return new Intl.NumberFormat(b, f).format(c);
  let _ = {}, y, N = null, w = b, S = null;
  const L = "number format";
  for (let W = 0; W < E.length; W++) {
    if (y = S = E[W], process.env.NODE_ENV !== "production" && b !== y && Uo(h, l) && o(es(at.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && b !== y) {
      const U = e.__v_emitter;
      U && U.emit("fallback", {
        type: L,
        key: l,
        from: w,
        to: S,
        groupId: `${L}:${l}`
      });
    }
    if (_ = n[y] || {}, N = _[l], ne(N))
      break;
    Da(e, l, y, d, L), w = S;
  }
  if (!ne(N) || !H(y))
    return s ? Wo : l;
  let A = `${y}__${l}`;
  Ho(f) || (A = `${A}__${JSON.stringify(f)}`);
  let F = a.get(A);
  return F || (F = new Intl.NumberFormat(y, $e({}, N, f)), a.set(A, F)), v ? F.formatToParts(c) : F.format(c);
}
const zf = [
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
function Vr(...e) {
  const [t, n, s, i] = e, o = {};
  let r = {};
  if (!Fe(t))
    throw sn(Ke.INVALID_ARGUMENT);
  const a = t;
  return H(n) ? o.key = n : ne(n) && Object.keys(n).forEach((l) => {
    zf.includes(l) ? r[l] = n[l] : o[l] = n[l];
  }), H(s) ? o.locale = s : ne(s) && (r = s), ne(i) && (r = i), [o.key || "", a, o, r];
}
function ql(e, t, n) {
  const s = e;
  for (const i in n) {
    const o = `${t}__${i}`;
    s.__numberFormatters.has(o) && s.__numberFormatters.delete(o);
  }
}
const vm = (e) => e, ym = (e) => "", Em = "text", xm = (e) => e.length === 0 ? "" : Na(e), Om = r_;
function Jl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Nm(e) {
  const t = Fe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Fe(e.named.count) || Fe(e.named.n)) ? Fe(e.named.count) ? e.named.count : Fe(e.named.n) ? e.named.n : t : t;
}
function wm(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Sm(e = {}) {
  const t = e.locale, n = Nm(e), s = ae(e.pluralRules) && H(t) && Ee(e.pluralRules[t]) ? e.pluralRules[t] : Jl, i = ae(e.pluralRules) && H(t) && Ee(e.pluralRules[t]) ? Jl : void 0, o = (_) => _[s(n, _.length, i)], r = e.list || [], a = (_) => r[_], l = e.named || {};
  Fe(e.pluralIndex) && wm(n, l);
  const c = (_) => l[_];
  function u(_, y) {
    const N = Ee(e.messages) ? e.messages(_, !!y) : ae(e.messages) ? e.messages[_] : !1;
    return N || (e.parent ? e.parent.message(_) : ym);
  }
  const f = (_) => e.modifiers ? e.modifiers[_] : vm, d = ne(e.processor) && Ee(e.processor.normalize) ? e.processor.normalize : xm, h = ne(e.processor) && Ee(e.processor.interpolate) ? e.processor.interpolate : Om, v = ne(e.processor) && H(e.processor.type) ? e.processor.type : Em, E = {
    list: a,
    named: c,
    plural: o,
    linked: (_, ...y) => {
      const [N, w] = y;
      let S = "text", L = "";
      y.length === 1 ? ae(N) ? (L = N.modifier || L, S = N.type || S) : H(N) && (L = N || L) : y.length === 2 && (H(N) && (L = N || L), H(w) && (S = w || S));
      const A = u(_, !0)(E), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        S === "vnode" && Se(A) && L ? A[0] : A
      );
      return L ? f(L)(F, S) : F;
    },
    message: u,
    type: v,
    interpolate: h,
    normalize: d,
    values: $e({}, r, l)
  };
  return E;
}
const Ql = () => "", yt = (e) => Ee(e);
function Zl(e, ...t) {
  const { fallbackFormat: n, postTranslation: s, unresolving: i, messageCompiler: o, fallbackLocale: r, messages: a } = e, [l, c] = $r(...t), u = ce(c.missingWarn) ? c.missingWarn : e.missingWarn, f = ce(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, d = ce(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, h = !!c.resolvedMessage, v = H(c.default) || ce(c.default) ? ce(c.default) ? o ? l : () => l : c.default : n ? o ? l : () => l : null, b = n || v != null && (H(v) || Ee(v)), E = Ta(e, c);
  d && Tm(c);
  let [_, y, N] = h ? [
    l,
    E,
    a[E] || {}
  ] : Yf(e, l, E, r, f, u), w = _, S = l;
  if (!h && !(H(w) || Sn(w) || yt(w)) && b && (w = v, S = w), !h && (!(H(w) || Sn(w) || yt(w)) || !H(y)))
    return i ? Wo : l;
  if (process.env.NODE_ENV !== "production" && H(w) && e.messageCompiler == null)
    return An(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let L = !1;
  const A = () => {
    L = !0;
  }, F = yt(w) ? w : Kf(e, l, y, w, S, A);
  if (L)
    return w;
  const W = Cm(e, y, N, c), U = Sm(W), q = Dm(e, F, U), B = s ? s(q, l) : q;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ge = {
      timestamp: Date.now(),
      key: H(l) ? l : yt(w) ? w.key : "",
      locale: y || (yt(w) ? w.locale : ""),
      format: H(w) ? w : yt(w) ? w.source : "",
      message: B
    };
    ge.meta = $e({}, e.__meta, /* @__PURE__ */ gm() || {}), Y_(ge);
  }
  return B;
}
function Tm(e) {
  Se(e.list) ? e.list = e.list.map((t) => H(t) ? Ll(t) : t) : ae(e.named) && Object.keys(e.named).forEach((t) => {
    H(e.named[t]) && (e.named[t] = Ll(e.named[t]));
  });
}
function Yf(e, t, n, s, i, o) {
  const { messages: r, onWarn: a, messageResolver: l, localeFallbacker: c } = e, u = c(e, s, n);
  let f = {}, d, h = null, v = n, b = null;
  const E = "translate";
  for (let _ = 0; _ < u.length; _++) {
    if (d = b = u[_], process.env.NODE_ENV !== "production" && n !== d && !Wf(n, d) && Uo(i, t) && a(es(at.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: d
    })), process.env.NODE_ENV !== "production" && n !== d) {
      const S = e.__v_emitter;
      S && S.emit("fallback", {
        type: E,
        key: t,
        from: v,
        to: b,
        groupId: `${E}:${t}`
      });
    }
    f = r[d] || {};
    let y = null, N, w;
    if (process.env.NODE_ENV !== "production" && Dt && (y = window.performance.now(), N = "intlify-message-resolve-start", w = "intlify-message-resolve-end", mt && mt(N)), (h = l(f, t)) === null && (h = f[t]), process.env.NODE_ENV !== "production" && Dt) {
      const S = window.performance.now(), L = e.__v_emitter;
      L && y && h && L.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: h,
        time: S - y,
        groupId: `${E}:${t}`
      }), N && w && mt && Zn && (mt(w), Zn("intlify message resolve", N, w));
    }
    if (H(h) || Sn(h) || yt(h))
      break;
    if (!bm(d, u)) {
      const S = Da(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        d,
        o,
        E
      );
      S !== t && (h = S);
    }
    v = b;
  }
  return [h, d, f];
}
function Kf(e, t, n, s, i, o) {
  const { messageCompiler: r, warnHtmlMessage: a } = e;
  if (yt(s)) {
    const d = s;
    return d.locale = d.locale || n, d.key = d.key || t, d;
  }
  if (r == null) {
    const d = () => s;
    return d.locale = n, d.key = t, d;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && Dt && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", mt && mt(c));
  const f = r(s, Am(e, n, i, s, a, o));
  if (process.env.NODE_ENV !== "production" && Dt) {
    const d = window.performance.now(), h = e.__v_emitter;
    h && l && h.emit("message-compilation", {
      type: "message-compilation",
      message: s,
      time: d - l,
      groupId: `translate:${t}`
    }), c && u && mt && Zn && (mt(u), Zn("intlify message compilation", c, u));
  }
  return f.locale = n, f.key = t, f.source = s, f;
}
function Dm(e, t, n) {
  let s = null, i, o;
  process.env.NODE_ENV !== "production" && Dt && (s = window.performance.now(), i = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", mt && mt(i));
  const r = t(n);
  if (process.env.NODE_ENV !== "production" && Dt) {
    const a = window.performance.now(), l = e.__v_emitter;
    l && s && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: r,
      time: a - s,
      groupId: `translate:${t.key}`
    }), i && o && mt && Zn && (mt(o), Zn("intlify message evaluation", i, o));
  }
  return r;
}
function $r(...e) {
  const [t, n, s] = e, i = {};
  if (!H(t) && !Fe(t) && !yt(t) && !Sn(t))
    throw sn(Ke.INVALID_ARGUMENT);
  const o = Fe(t) ? String(t) : (yt(t), t);
  return Fe(n) ? i.plural = n : H(n) ? i.default = n : ne(n) && !Ho(n) ? i.named = n : Se(n) && (i.list = n), Fe(s) ? i.plural = s : H(s) ? i.default = s : ne(s) && $e(i, s), [o, i];
}
function Am(e, t, n, s, i, o) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: i,
    onError: (r) => {
      if (o && o(r), process.env.NODE_ENV !== "production") {
        const a = km(s), l = `Message compilation error: ${r.message}`, c = r.location && a && a_(a, r.location.start.offset, r.location.end.offset), u = e.__v_emitter;
        u && a && u.emit("compile-error", {
          message: a,
          error: r.message,
          start: r.location && r.location.start.offset,
          end: r.location && r.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${l}
${c}` : l);
      } else
        throw r;
    },
    onCacheKey: (r) => t_(t, n, r)
  };
}
function km(e) {
  if (H(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Cm(e, t, n, s) {
  const { modifiers: i, pluralRules: o, messageResolver: r, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, d = {
    locale: t,
    modifiers: i,
    pluralRules: o,
    messages: (h, v) => {
      let b = r(n, h);
      if (b == null && (u || v)) {
        const [, , E] = Yf(
          u || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          t,
          a,
          l,
          c
        );
        b = r(E, h);
      }
      if (H(b) || Sn(b)) {
        let E = !1;
        const y = Kf(e, h, t, b, h, () => {
          E = !0;
        });
        return E ? Ql : y;
      } else return yt(b) ? b : Ql;
    }
  };
  return e.processor && (d.processor = e.processor), s.list && (d.list = s.list), s.named && (d.named = s.named), Fe(s.plural) && (d.pluralIndex = s.plural), d;
}
F_();
function Mm() {
  return Gf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Gf() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Lm = typeof Proxy == "function", Im = "devtools-plugin:setup", Pm = "plugin:settings:set";
let cs, jr;
function Rm() {
  var e;
  return cs !== void 0 || (typeof window < "u" && window.performance ? (cs = !0, jr = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (cs = !0, jr = globalThis.perf_hooks.performance) : cs = !1), cs;
}
function Fm() {
  return Rm() ? jr.now() : Date.now();
}
class Vm {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const s = {};
    if (t.settings)
      for (const r in t.settings) {
        const a = t.settings[r];
        s[r] = a.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${t.id}`;
    let o = Object.assign({}, s);
    try {
      const r = localStorage.getItem(i), a = JSON.parse(r);
      Object.assign(o, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return o;
      },
      setSettings(r) {
        try {
          localStorage.setItem(i, JSON.stringify(r));
        } catch {
        }
        o = r;
      },
      now() {
        return Fm();
      }
    }, n && n.on(Pm, (r, a) => {
      r === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (r, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (r, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: a,
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
function $m(e, t) {
  const n = e, s = Gf(), i = Mm(), o = Lm && n.enableEarlyProxy;
  if (i && (s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !o))
    i.emit(Im, e, t);
  else {
    const r = o ? new Vm(n, i) : null;
    (s.__VUE_DEVTOOLS_PLUGINS__ = s.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: r
    }), r && t(r.proxiedTarget);
  }
}
/*!
  * vue-i18n v10.0.4
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const jm = "10.0.4";
function Hm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Hn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Hn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Hn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Hn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const vn = {
  FALLBACK_TO_ROOT: am,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  DEPRECATE_TC: 11
}, Wm = {
  [vn.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [vn.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [vn.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [vn.DEPRECATE_TC]: "'tc' and '$tc' has been deprecated in v10. Use 't' or '$t' instead. 'tc' and '$tc’ are going to remove in v11."
};
function Bo(e, ...t) {
  return jo(Wm[e], ...t);
}
const ye = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: G_,
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
function st(e, ...t) {
  return Ts(e, null, process.env.NODE_ENV !== "production" ? { messages: Um, args: t } : void 0);
}
const Um = {
  [ye.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ye.INVALID_ARGUMENT]: "Invalid argument",
  [ye.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ye.NOT_INSTALLED]: "Need to install with `app.use` function",
  [ye.UNEXPECTED_ERROR]: "Unexpected error",
  [ye.REQUIRED_VALUE]: "Required in value: {0}",
  [ye.INVALID_VALUE]: "Invalid value",
  [ye.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ye.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ye.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ye.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Hr = /* @__PURE__ */ Ut("__translateVNode"), Wr = /* @__PURE__ */ Ut("__datetimeParts"), Ur = /* @__PURE__ */ Ut("__numberParts"), ts = /* @__PURE__ */ Ut("__enableEmitter"), pi = /* @__PURE__ */ Ut("__disableEmitter"), Xf = Ut("__setPluralRules"), qf = /* @__PURE__ */ Ut("__injectWithOption"), Br = /* @__PURE__ */ Ut("__dispose");
function gi(e) {
  if (!ae(e))
    return e;
  for (const t in e)
    if (go(e, t))
      if (!t.includes("."))
        ae(e[t]) && gi(e[t]);
      else {
        const n = t.split("."), s = n.length - 1;
        let i = e, o = !1;
        for (let r = 0; r < s; r++) {
          if (n[r] in i || (i[n[r]] = {}), !ae(i[n[r]])) {
            process.env.NODE_ENV !== "production" && An(Bo(vn.IGNORE_OBJ_FLATTEN, {
              key: n[r]
            })), o = !0;
            break;
          }
          i = i[n[r]];
        }
        o || (i[n[s]] = e[t], delete e[t]), ae(i[n[s]]) && gi(i[n[s]]);
      }
  return e;
}
function Aa(e, t) {
  const { messages: n, __i18n: s, messageResolver: i, flatJson: o } = t, r = ne(n) ? n : Se(s) ? {} : { [e]: {} };
  if (Se(s) && s.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: c } = a;
      l ? (r[l] = r[l] || {}, to(c, r[l])) : to(c, r);
    } else
      H(a) && to(JSON.parse(a), r);
  }), i == null && o)
    for (const a in r)
      go(r, a) && gi(r[a]);
  return r;
}
function Jf(e) {
  return e.type;
}
function Qf(e, t, n) {
  let s = ae(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (s = Aa(e.locale.value, {
    messages: s,
    __i18n: n.__i18nGlobal
  }));
  const i = Object.keys(s);
  i.length && i.forEach((o) => {
    e.mergeLocaleMessage(o, s[o]);
  });
  {
    if (ae(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((r) => {
        e.mergeDateTimeFormat(r, t.datetimeFormats[r]);
      });
    }
    if (ae(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((r) => {
        e.mergeNumberFormat(r, t.numberFormats[r]);
      });
    }
  }
}
function ec(e) {
  return Oe(Ss, null, e, 0);
}
const tc = "__INTLIFY_META__", nc = () => [], Bm = () => !1;
let sc = 0;
function ic(e) {
  return (t, n, s, i) => e(n, s, Es() || void 0, i);
}
const zm = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Es();
  let t = null;
  return e && (t = Jf(e)[tc]) ? { [tc]: t } : null;
};
function ka(e = {}) {
  const { __root: t, __injectWithOption: n } = e, s = t === void 0, i = e.flatJson, o = Dt ? Be : ca;
  let r = ce(e.inheritLocale) ? e.inheritLocale : !0;
  const a = o(
    // prettier-ignore
    t && r ? t.locale.value : H(e.locale) ? e.locale : hi
  ), l = o(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : H(e.fallbackLocale) || Se(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value
  ), c = o(Aa(a.value, e)), u = o(ne(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }), f = o(ne(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let d = t ? t.missingWarn : ce(e.missingWarn) || xs(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : ce(e.fallbackWarn) || xs(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : ce(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, E = Ee(e.missing) ? e.missing : null, _ = Ee(e.missing) ? ic(e.missing) : null, y = Ee(e.postTranslation) ? e.postTranslation : null, N = t ? t.warnHtmlMessage : ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter;
  const S = t ? t.modifiers : ne(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || t && t.pluralRules, A;
  A = (() => {
    s && Bl(null);
    const O = {
      version: jm,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: S,
      pluralRules: L,
      missing: _ === null ? void 0 : _,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: N,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    O.datetimeFormats = u.value, O.numberFormats = f.value, O.__datetimeFormatters = ne(A) ? A.__datetimeFormatters : void 0, O.__numberFormatters = ne(A) ? A.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (O.__v_emitter = ne(A) ? A.__v_emitter : void 0);
    const k = mm(O);
    return s && Bl(k), k;
  })(), Ps(A, a.value, l.value);
  function W() {
    return [
      a.value,
      l.value,
      c.value,
      u.value,
      f.value
    ];
  }
  const U = wt({
    get: () => a.value,
    set: (O) => {
      a.value = O, A.locale = a.value;
    }
  }), q = wt({
    get: () => l.value,
    set: (O) => {
      l.value = O, A.fallbackLocale = l.value, Ps(A, a.value, O);
    }
  }), B = wt(() => c.value), ge = /* @__PURE__ */ wt(() => u.value), ke = /* @__PURE__ */ wt(() => f.value);
  function te() {
    return Ee(y) ? y : null;
  }
  function Z(O) {
    y = O, A.postTranslation = O;
  }
  function Y() {
    return E;
  }
  function G(O) {
    O !== null && (_ = ic(O)), E = O, A.missing = _;
  }
  function de(O, k) {
    return O !== "translate" || !k.resolvedMessage;
  }
  const Ce = (O, k, j, K, oe, re) => {
    W();
    let Me;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = t ? _m() : void 0), Me = O(A);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, s || (A.fallbackContext = void 0);
    }
    if (j !== "translate exists" && // for not `te` (e.g `t`)
    Fe(Me) && Me === Wo || j === "translate exists" && !Me) {
      const [Ne, dt] = k();
      if (process.env.NODE_ENV !== "production" && t && H(Ne) && de(j, dt) && (v && (Uo(h, Ne) || Hf(d, Ne)) && An(Bo(vn.FALLBACK_TO_ROOT, {
        key: Ne,
        type: j
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ye } = A;
        Ye && v && Ye.emit("fallback", {
          type: j,
          key: Ne,
          to: "global",
          groupId: `${j}:${Ne}`
        });
      }
      return t && v ? K(t) : oe(Ne);
    } else {
      if (re(Me))
        return Me;
      throw st(ye.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ze(...O) {
    return Ce((k) => Reflect.apply(Zl, null, [k, ...O]), () => $r(...O), "translate", (k) => Reflect.apply(k.t, k, [...O]), (k) => k, (k) => H(k));
  }
  function We(...O) {
    const [k, j, K] = O;
    if (K && !ae(K))
      throw st(ye.INVALID_ARGUMENT);
    return ze(k, j, $e({ resolvedMessage: !0 }, K || {}));
  }
  function je(...O) {
    return Ce((k) => Reflect.apply(Kl, null, [k, ...O]), () => Fr(...O), "datetime format", (k) => Reflect.apply(k.d, k, [...O]), () => _o, (k) => H(k));
  }
  function qe(...O) {
    return Ce((k) => Reflect.apply(Xl, null, [k, ...O]), () => Vr(...O), "number format", (k) => Reflect.apply(k.n, k, [...O]), () => _o, (k) => H(k));
  }
  function xt(O) {
    return O.map((k) => H(k) || Fe(k) || ce(k) ? ec(String(k)) : k);
  }
  const zt = {
    normalize: xt,
    interpolate: (O) => O,
    type: "vnode"
  };
  function Yt(...O) {
    return Ce((k) => {
      let j;
      const K = k;
      try {
        K.processor = zt, j = Reflect.apply(Zl, null, [K, ...O]);
      } finally {
        K.processor = null;
      }
      return j;
    }, () => $r(...O), "translate", (k) => k[Hr](...O), (k) => [ec(k)], (k) => Se(k));
  }
  function Cn(...O) {
    return Ce((k) => Reflect.apply(Xl, null, [k, ...O]), () => Vr(...O), "number format", (k) => k[Ur](...O), nc, (k) => H(k) || Se(k));
  }
  function rs(...O) {
    return Ce((k) => Reflect.apply(Kl, null, [k, ...O]), () => Fr(...O), "datetime format", (k) => k[Wr](...O), nc, (k) => H(k) || Se(k));
  }
  function Kt(O) {
    L = O, A.pluralRules = L;
  }
  function as(O, k) {
    return Ce(() => {
      if (!O)
        return !1;
      const j = H(k) ? k : a.value, K = x(j), oe = A.messageResolver(K, O);
      return Sn(oe) || yt(oe) || H(oe);
    }, () => [O], "translate exists", (j) => Reflect.apply(j.te, j, [O, k]), Bm, (j) => ce(j));
  }
  function dn(O) {
    let k = null;
    const j = Pf(A, l.value, a.value);
    for (let K = 0; K < j.length; K++) {
      const oe = c.value[j[K]] || {}, re = A.messageResolver(oe, O);
      if (re != null) {
        k = re;
        break;
      }
    }
    return k;
  }
  function m(O) {
    const k = dn(O);
    return k ?? (t ? t.tm(O) || {} : {});
  }
  function x(O) {
    return c.value[O] || {};
  }
  function M(O, k) {
    if (i) {
      const j = { [O]: k };
      for (const K in j)
        go(j, K) && gi(j[K]);
      k = j[O];
    }
    c.value[O] = k, A.messages = c.value;
  }
  function R(O, k) {
    c.value[O] = c.value[O] || {};
    const j = { [O]: k };
    if (i)
      for (const K in j)
        go(j, K) && gi(j[K]);
    k = j[O], to(k, c.value[O]), A.messages = c.value;
  }
  function p(O) {
    return u.value[O] || {};
  }
  function g(O, k) {
    u.value[O] = k, A.datetimeFormats = u.value, Gl(A, O, k);
  }
  function T(O, k) {
    u.value[O] = $e(u.value[O] || {}, k), A.datetimeFormats = u.value, Gl(A, O, k);
  }
  function C(O) {
    return f.value[O] || {};
  }
  function P(O, k) {
    f.value[O] = k, A.numberFormats = f.value, ql(A, O, k);
  }
  function I(O, k) {
    f.value[O] = $e(f.value[O] || {}, k), A.numberFormats = f.value, ql(A, O, k);
  }
  sc++, t && Dt && (Xn(t.locale, (O) => {
    r && (a.value = O, A.locale = O, Ps(A, a.value, l.value));
  }), Xn(t.fallbackLocale, (O) => {
    r && (l.value = O, A.fallbackLocale = O, Ps(A, a.value, l.value));
  }));
  const $ = {
    id: sc,
    locale: U,
    fallbackLocale: q,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(O) {
      r = O, O && t && (a.value = t.locale.value, l.value = t.fallbackLocale.value, Ps(A, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: B,
    get modifiers() {
      return S;
    },
    get pluralRules() {
      return L || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(O) {
      d = O, A.missingWarn = d;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(O) {
      h = O, A.fallbackWarn = h;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(O) {
      v = O;
    },
    get fallbackFormat() {
      return b;
    },
    set fallbackFormat(O) {
      b = O, A.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return N;
    },
    set warnHtmlMessage(O) {
      N = O, A.warnHtmlMessage = O;
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(O) {
      w = O, A.escapeParameter = O;
    },
    t: ze,
    getLocaleMessage: x,
    setLocaleMessage: M,
    mergeLocaleMessage: R,
    getPostTranslationHandler: te,
    setPostTranslationHandler: Z,
    getMissingHandler: Y,
    setMissingHandler: G,
    [Xf]: Kt
  };
  return $.datetimeFormats = ge, $.numberFormats = ke, $.rt = We, $.te = as, $.tm = m, $.d = je, $.n = qe, $.getDateTimeFormat = p, $.setDateTimeFormat = g, $.mergeDateTimeFormat = T, $.getNumberFormat = C, $.setNumberFormat = P, $.mergeNumberFormat = I, $[qf] = n, $[Hr] = Yt, $[Wr] = rs, $[Ur] = Cn, process.env.NODE_ENV !== "production" && ($[ts] = (O) => {
    A.__v_emitter = O;
  }, $[pi] = () => {
    A.__v_emitter = void 0;
  }), $;
}
const Zf = "vue-i18n: composer properties", ar = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n DevTools",
  "vue-i18n-resource-inspector": "Vue I18n DevTools",
  "vue-i18n-timeline": "Vue I18n"
}, Ym = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Km = {
  "vue-i18n-timeline": 16764185
};
let zr;
async function Gm(e, t) {
  return new Promise((n, s) => {
    try {
      $m({
        id: "vue-devtools-plugin-vue-i18n",
        label: ar["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Zf],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (i) => {
        zr = i, i.on.visitComponentTree(({ componentInstance: r, treeNode: a }) => {
          Xm(r, a, t);
        }), i.on.inspectComponent(({ componentInstance: r, instanceData: a }) => {
          r.vnode.el && r.vnode.el.__VUE_I18N__ && a && (t.mode === "legacy" ? r.vnode.el.__VUE_I18N__ !== t.global.__composer && oc(a, r.vnode.el.__VUE_I18N__) : oc(a, r.vnode.el.__VUE_I18N__));
        }), i.addInspector({
          id: "vue-i18n-resource-inspector",
          label: ar["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: Ym["vue-i18n-resource-inspector"]
        }), i.on.getInspectorTree((r) => {
          r.app === e && r.inspectorId === "vue-i18n-resource-inspector" && eb(r, t);
        });
        const o = /* @__PURE__ */ new Map();
        i.on.getInspectorState(async (r) => {
          if (r.app === e && r.inspectorId === "vue-i18n-resource-inspector")
            if (i.unhighlightElement(), nb(r, t), r.nodeId === "global") {
              if (!o.has(r.app)) {
                const [a] = await i.getComponentInstances(r.app);
                o.set(r.app, a);
              }
              i.highlightElement(o.get(r.app));
            } else {
              const a = tb(r.nodeId, t);
              a && i.highlightElement(a);
            }
        }), i.on.editInspectorState((r) => {
          r.app === e && r.inspectorId === "vue-i18n-resource-inspector" && ib(r, t);
        }), i.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: ar["vue-i18n-timeline"],
          color: Km["vue-i18n-timeline"]
        }), n(!0);
      });
    } catch (i) {
      console.error(i), s(!1);
    }
  });
}
function ed(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Xm(e, t, n) {
  const s = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== s) {
    const i = {
      label: `i18n (${ed(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(i);
  }
}
function oc(e, t) {
  const n = Zf;
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
    value: Ca(t.messages.value)
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
function Ca(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const s = e[n];
    Ee(s) && "source" in s ? t[n] = Zm(s) : Sn(s) && s.loc && s.loc.source ? t[n] = s.loc.source : ae(s) ? t[n] = Ca(s) : t[n] = s;
  }), t;
}
const qm = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Jm(e) {
  return e.replace(/[<>"&]/g, Qm);
}
function Qm(e) {
  return qm[e] || e;
}
function Zm(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Jm(e.source)}")` : "(?)"}`
    }
  };
}
function eb(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [s, i] of t.__instances) {
    const o = t.mode === "composition" ? i : i.__composer;
    n !== o && e.rootNodes.push({
      id: o.id.toString(),
      label: `${ed(s)} Scope`
    });
  }
}
function tb(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [s, i] of t.__instances.entries())
      if (i.id.toString() === e) {
        n = s;
        break;
      }
  }
  return n;
}
function td(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((s) => s.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function nb(e, t) {
  const n = td(e.nodeId, t);
  return n && (e.state = sb(n)), null;
}
function sb(e) {
  const t = {}, n = "Locale related info", s = [
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
  t[n] = s;
  const i = "Locale messages info", o = [
    {
      type: i,
      key: "messages",
      editable: !1,
      value: Ca(e.messages.value)
    }
  ];
  t[i] = o;
  {
    const r = "Datetime formats info", a = [
      {
        type: r,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[r] = a;
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
function _i(e, t) {
  if (zr) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), zr.addTimelineEvent({
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
function ib(e, t) {
  const n = td(e.nodeId, t);
  if (n) {
    const [s] = e.path;
    s === "locale" && H(e.state.value) ? n.locale.value = e.state.value : s === "fallbackLocale" && (H(e.state.value) || Se(e.state.value) || ae(e.state.value)) ? n.fallbackLocale.value = e.state.value : s === "inheritLocale" && ce(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function ob(e) {
  const t = H(e.locale) ? e.locale : hi, n = H(e.fallbackLocale) || Se(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, s = Ee(e.missing) ? e.missing : void 0, i = ce(e.silentTranslationWarn) || xs(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, o = ce(e.silentFallbackWarn) || xs(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, r = ce(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, l = ne(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Ee(e.postTranslation) ? e.postTranslation : void 0, f = H(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, d = !!e.escapeParameterHtml, h = ce(e.sync) ? e.sync : !0;
  let v = e.messages;
  if (ne(e.sharedMessages)) {
    const S = e.sharedMessages;
    v = Object.keys(S).reduce((A, F) => {
      const W = A[F] || (A[F] = {});
      return $e(W, S[F]), A;
    }, v || {});
  }
  const { __i18n: b, __root: E, __injectWithOption: _ } = e, y = e.datetimeFormats, N = e.numberFormats, w = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: v,
    flatJson: w,
    datetimeFormats: y,
    numberFormats: N,
    missing: s,
    missingWarn: i,
    fallbackWarn: o,
    fallbackRoot: r,
    fallbackFormat: a,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: f,
    escapeParameter: d,
    messageResolver: e.messageResolver,
    inheritLocale: h,
    __i18n: b,
    __root: E,
    __injectWithOption: _
  };
}
function Yr(e = {}) {
  const t = ka(ob(e)), { __extender: n } = e, s = {
    // id
    id: t.id,
    // locale
    get locale() {
      return t.locale.value;
    },
    set locale(i) {
      t.locale.value = i;
    },
    // fallbackLocale
    get fallbackLocale() {
      return t.fallbackLocale.value;
    },
    set fallbackLocale(i) {
      t.fallbackLocale.value = i;
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
    set missing(i) {
      t.setMissingHandler(i);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return ce(t.missingWarn) ? !t.missingWarn : t.missingWarn;
    },
    set silentTranslationWarn(i) {
      t.missingWarn = ce(i) ? !i : i;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return ce(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
    },
    set silentFallbackWarn(i) {
      t.fallbackWarn = ce(i) ? !i : i;
    },
    // modifiers
    get modifiers() {
      return t.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return t.fallbackFormat;
    },
    set formatFallbackMessages(i) {
      t.fallbackFormat = i;
    },
    // postTranslation
    get postTranslation() {
      return t.getPostTranslationHandler();
    },
    set postTranslation(i) {
      t.setPostTranslationHandler(i);
    },
    // sync
    get sync() {
      return t.inheritLocale;
    },
    set sync(i) {
      t.inheritLocale = i;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return t.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(i) {
      t.warnHtmlMessage = i !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return t.escapeParameter;
    },
    set escapeParameterHtml(i) {
      t.escapeParameter = i;
    },
    // pluralizationRules
    get pluralizationRules() {
      return t.pluralRules || {};
    },
    // for internal
    __composer: t,
    // t
    t(...i) {
      return Reflect.apply(t.t, t, [...i]);
    },
    // rt
    rt(...i) {
      return Reflect.apply(t.rt, t, [...i]);
    },
    // tc
    tc(...i) {
      const [o, r, a] = i, l = { plural: 1 };
      let c = null, u = null;
      if (process.env.NODE_ENV !== "production" && If(Bo(vn.DEPRECATE_TC)), !H(o))
        throw st(ye.INVALID_ARGUMENT);
      const f = o;
      return H(r) ? l.locale = r : Fe(r) ? l.plural = r : Se(r) ? c = r : ne(r) && (u = r), H(a) ? l.locale = a : Se(a) ? c = a : ne(a) && (u = a), Reflect.apply(t.t, t, [
        f,
        c || u || {},
        l
      ]);
    },
    // te
    te(i, o) {
      return t.te(i, o);
    },
    // tm
    tm(i) {
      return t.tm(i);
    },
    // getLocaleMessage
    getLocaleMessage(i) {
      return t.getLocaleMessage(i);
    },
    // setLocaleMessage
    setLocaleMessage(i, o) {
      t.setLocaleMessage(i, o);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(i, o) {
      t.mergeLocaleMessage(i, o);
    },
    // d
    d(...i) {
      return Reflect.apply(t.d, t, [...i]);
    },
    // getDateTimeFormat
    getDateTimeFormat(i) {
      return t.getDateTimeFormat(i);
    },
    // setDateTimeFormat
    setDateTimeFormat(i, o) {
      t.setDateTimeFormat(i, o);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(i, o) {
      t.mergeDateTimeFormat(i, o);
    },
    // n
    n(...i) {
      return Reflect.apply(t.n, t, [...i]);
    },
    // getNumberFormat
    getNumberFormat(i) {
      return t.getNumberFormat(i);
    },
    // setNumberFormat
    setNumberFormat(i, o) {
      t.setNumberFormat(i, o);
    },
    // mergeNumberFormat
    mergeNumberFormat(i, o) {
      t.mergeNumberFormat(i, o);
    }
  };
  return s.__extender = n, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (i) => {
    const o = t;
    o[ts] && o[ts](i);
  }, s.__disableEmitter = () => {
    const i = t;
    i[pi] && i[pi]();
  }), s;
}
function rb(e, t, n) {
  return {
    beforeCreate() {
      const s = Es();
      if (!s)
        throw st(ye.UNEXPECTED_ERROR);
      const i = this.$options;
      if (i.i18n) {
        const o = i.i18n;
        if (i.__i18n && (o.__i18n = i.__i18n), o.__root = t, this === this.$root)
          this.$i18n = rc(e, o);
        else {
          o.__injectWithOption = !0, o.__extender = n.__vueI18nExtend, this.$i18n = Yr(o);
          const r = this.$i18n;
          r.__extender && (r.__disposer = r.__extender(this.$i18n));
        }
      } else if (i.__i18n)
        if (this === this.$root)
          this.$i18n = rc(e, i);
        else {
          this.$i18n = Yr({
            __i18n: i.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      i.__i18nGlobal && Qf(t, i, i), this.$t = (...o) => this.$i18n.t(...o), this.$rt = (...o) => this.$i18n.rt(...o), this.$tc = (...o) => this.$i18n.tc(...o), this.$te = (o, r) => this.$i18n.te(o, r), this.$d = (...o) => this.$i18n.d(...o), this.$n = (...o) => this.$i18n.n(...o), this.$tm = (o) => this.$i18n.tm(o), n.__setInstance(s, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const s = this.$i18n;
        this.$el.__VUE_I18N__ = s.__composer;
        const i = this.__v_emitter = wa();
        s.__enableEmitter && s.__enableEmitter(i), i.on("*", _i);
      }
    },
    unmounted() {
      const s = Es();
      if (!s)
        throw st(ye.UNEXPECTED_ERROR);
      const i = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", _i), delete this.__v_emitter), this.$i18n && (i.__disableEmitter && i.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, i.__disposer && (i.__disposer(), delete i.__disposer, delete i.__extender), n.__deleteInstance(s), delete this.$i18n;
    }
  };
}
function rc(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Xf](t.pluralizationRules || e.pluralizationRules);
  const n = Aa(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((s) => e.mergeLocaleMessage(s, n[s])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((s) => e.mergeDateTimeFormat(s, t.datetimeFormats[s])), t.numberFormats && Object.keys(t.numberFormats).forEach((s) => e.mergeNumberFormat(s, t.numberFormats[s])), e;
}
const Ma = {
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
function ab({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((s, i) => [
    ...s,
    // prettier-ignore
    ...i.type === Xe ? i.children : [i]
  ], []) : t.reduce((n, s) => {
    const i = e[s];
    return i && (n[s] = i()), n;
  }, {});
}
function nd() {
  return Xe;
}
const lb = /* @__PURE__ */ it({
  /* eslint-disable */
  name: "i18n-t",
  props: $e({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => Fe(e) || !isNaN(e)
    }
  }, Ma),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: s } = t, i = e.i18n || Bt({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const o = Object.keys(n).filter((f) => f !== "_"), r = {};
      e.locale && (r.locale = e.locale), e.plural !== void 0 && (r.plural = H(e.plural) ? +e.plural : e.plural);
      const a = ab(t, o), l = i[Hr](e.keypath, a, r), c = $e({}, s), u = H(e.tag) || ae(e.tag) ? e.tag : nd();
      return fi(u, c, l);
    };
  }
}), ac = lb;
function cb(e) {
  return Se(e) && !H(e[0]);
}
function sd(e, t, n, s) {
  const { slots: i, attrs: o } = t;
  return () => {
    const r = { part: !0 };
    let a = {};
    e.locale && (r.locale = e.locale), H(e.format) ? r.key = e.format : ae(e.format) && (H(e.format.key) && (r.key = e.format.key), a = Object.keys(e.format).reduce((d, h) => n.includes(h) ? $e({}, d, { [h]: e.format[h] }) : d, {}));
    const l = s(e.value, r, a);
    let c = [r.key];
    Se(l) ? c = l.map((d, h) => {
      const v = i[d.type], b = v ? v({ [d.type]: d.value, index: h, parts: l }) : [d.value];
      return cb(b) && (b[0].key = `${d.type}-${h}`), b;
    }) : H(l) && (c = [l]);
    const u = $e({}, o), f = H(e.tag) || ae(e.tag) ? e.tag : nd();
    return fi(f, u, c);
  };
}
const ub = /* @__PURE__ */ it({
  /* eslint-disable */
  name: "i18n-n",
  props: $e({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ma),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Bt({
      useScope: e.scope,
      __useComponent: !0
    });
    return sd(e, t, zf, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ur](...s)
    ));
  }
}), lc = ub, fb = /* @__PURE__ */ it({
  /* eslint-disable */
  name: "i18n-d",
  props: $e({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ma),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Bt({
      useScope: e.scope,
      __useComponent: !0
    });
    return sd(e, t, Bf, (...s) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Wr](...s)
    ));
  }
}), cc = fb;
function db(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const s = n.__getInstance(t);
    return s != null ? s.__composer : e.global.__composer;
  }
}
function hb(e) {
  const t = (r) => {
    const { instance: a, value: l } = r;
    if (!a || !a.$)
      throw st(ye.UNEXPECTED_ERROR);
    const c = db(e, a.$), u = uc(l);
    return [
      Reflect.apply(c.t, c, [...fc(u)]),
      c
    ];
  };
  return {
    created: (r, a) => {
      const [l, c] = t(a);
      Dt && e.global === c && (r.__i18nWatcher = Xn(c.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), r.__composer = c, r.textContent = l;
    },
    unmounted: (r) => {
      Dt && r.__i18nWatcher && (r.__i18nWatcher(), r.__i18nWatcher = void 0, delete r.__i18nWatcher), r.__composer && (r.__composer = void 0, delete r.__composer);
    },
    beforeUpdate: (r, { value: a }) => {
      if (r.__composer) {
        const l = r.__composer, c = uc(a);
        r.textContent = Reflect.apply(l.t, l, [
          ...fc(c)
        ]);
      }
    },
    getSSRProps: (r) => {
      const [a] = t(r);
      return { textContent: a };
    }
  };
}
function uc(e) {
  if (H(e))
    return { path: e };
  if (ne(e)) {
    if (!("path" in e))
      throw st(ye.REQUIRED_VALUE, "path");
    return e;
  } else
    throw st(ye.INVALID_VALUE);
}
function fc(e) {
  const { path: t, locale: n, args: s, choice: i, plural: o } = e, r = {}, a = s || {};
  return H(n) && (r.locale = n), Fe(i) && (r.plural = i), Fe(o) && (r.plural = o), [t, a, r];
}
function pb(e, t, ...n) {
  const s = ne(n[0]) ? n[0] : {};
  (ce(s.globalInstall) ? s.globalInstall : !0) && ([ac.name, "I18nT"].forEach((o) => e.component(o, ac)), [lc.name, "I18nN"].forEach((o) => e.component(o, lc)), [cc.name, "I18nD"].forEach((o) => e.component(o, cc))), e.directive("t", hb(t));
}
const gb = /* @__PURE__ */ Ut("global-vue-i18n");
function _b(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ce(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, s = ce(e.globalInjection) ? e.globalInjection : !0, i = /* @__PURE__ */ new Map(), [o, r] = mb(e, n), a = /* @__PURE__ */ Ut(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function l(d) {
    return i.get(d) || null;
  }
  function c(d, h) {
    i.set(d, h);
  }
  function u(d) {
    i.delete(d);
  }
  const f = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
    },
    // install plugin
    async install(d, ...h) {
      if (process.env.NODE_ENV !== "production" && (d.__VUE_I18N__ = f), d.__VUE_I18N_SYMBOL__ = a, d.provide(d.__VUE_I18N_SYMBOL__, f), ne(h[0])) {
        const E = h[0];
        f.__composerExtend = E.__composerExtend, f.__vueI18nExtend = E.__vueI18nExtend;
      }
      let v = null;
      !n && s && (v = wb(d, f.global)), __VUE_I18N_FULL_INSTALL__ && pb(d, f, ...h), __VUE_I18N_LEGACY_API__ && n && d.mixin(rb(r, r.__composer, f));
      const b = d.unmount;
      if (d.unmount = () => {
        v && v(), f.dispose(), b();
      }, process.env.NODE_ENV !== "production") {
        if (!await Gm(d, f))
          throw st(ye.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
        const _ = wa();
        if (n) {
          const y = r;
          y.__enableEmitter && y.__enableEmitter(_);
        } else {
          const y = r;
          y[ts] && y[ts](_);
        }
        _.on("*", _i);
      }
    },
    // global accessor
    get global() {
      return r;
    },
    dispose() {
      o.stop();
    },
    // @internal
    __instances: i,
    // @internal
    __getInstance: l,
    // @internal
    __setInstance: c,
    // @internal
    __deleteInstance: u
  };
  return f;
}
function Bt(e = {}) {
  const t = Es();
  if (t == null)
    throw st(ye.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw st(ye.NOT_INSTALLED);
  const n = bb(t), s = yb(n), i = Jf(t), o = vb(e, i);
  if (o === "global")
    return Qf(s, e, i), s;
  if (o === "parent") {
    let l = Eb(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && An(Bo(vn.NOT_FOUND_PARENT_SCOPE)), l = s), l;
  }
  const r = n;
  let a = r.__getInstance(t);
  if (a == null) {
    const l = $e({}, e);
    "__i18n" in i && (l.__i18n = i.__i18n), s && (l.__root = s), a = ka(l), r.__composerExtend && (a[Br] = r.__composerExtend(a)), Ob(r, t, a), r.__setInstance(t, a);
  }
  return a;
}
function mb(e, t, n) {
  const s = lh(), i = __VUE_I18N_LEGACY_API__ && t ? s.run(() => Yr(e)) : s.run(() => ka(e));
  if (i == null)
    throw st(ye.UNEXPECTED_ERROR);
  return [s, i];
}
function bb(e) {
  const t = Qs(e.isCE ? gb : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw st(e.isCE ? ye.NOT_INSTALLED_WITH_PROVIDE : ye.UNEXPECTED_ERROR);
  return t;
}
function vb(e, t) {
  return Ho(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function yb(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Eb(e, t, n = !1) {
  let s = null;
  const i = t.root;
  let o = xb(t, n);
  for (; o != null; ) {
    const r = e;
    if (e.mode === "composition")
      s = r.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = r.__getInstance(o);
      a != null && (s = a.__composer, n && s && !s[qf] && (s = null));
    }
    if (s != null || i === o)
      break;
    o = o.parent;
  }
  return s;
}
function xb(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ob(e, t, n) {
  let s = null;
  Wt(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, s = wa();
      const i = n;
      i[ts] && i[ts](s), s.on("*", _i);
    }
  }, t), Ro(() => {
    const i = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (s && s.off("*", _i), i[pi] && i[pi](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const o = i[Br];
    o && (o(), delete i[Br]);
  }, t);
}
const Nb = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], dc = ["t", "rt", "d", "n", "tm", "te"];
function wb(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Nb.forEach((i) => {
    const o = Object.getOwnPropertyDescriptor(t, i);
    if (!o)
      throw st(ye.UNEXPECTED_ERROR);
    const r = Ae(o.value) ? {
      get() {
        return o.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        o.value.value = a;
      }
    } : {
      get() {
        return o.get && o.get();
      }
    };
    Object.defineProperty(n, i, r);
  }), e.config.globalProperties.$i18n = n, dc.forEach((i) => {
    const o = Object.getOwnPropertyDescriptor(t, i);
    if (!o || !o.value)
      throw st(ye.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${i}`, o);
  }), () => {
    delete e.config.globalProperties.$i18n, dc.forEach((i) => {
      delete e.config.globalProperties[`$${i}`];
    });
  };
}
Hm();
fm(U_);
dm(rm);
hm(Pf);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Hn();
  e.__INTLIFY__ = !0, B_(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function is(...e) {
  return e = e.map((t) => t.replace(/^\/|\/$/g, "")), e.join("/");
}
const Sb = ["fill"], os = /* @__PURE__ */ it({
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
    return (t, n) => (ue(), he("svg", {
      class: "mx-auto block display-inline-block",
      style: ko("width: " + e.width + "px"),
      viewBox: "0 0 120 30",
      xmlns: "http://www.w3.org/2000/svg",
      fill: e.fillColor
    }, n[0] || (n[0] = [
      cg('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>', 3)
    ]), 12, Sb));
  }
}), Tb = { class: "panel panel-white no-margin" }, Db = { class: "panel-heading" }, Ab = { style: { display: "flex", "align-items": "center" } }, kb = {
  class: "panel-title",
  style: { flex: "1" }
}, Cb = { class: "text-default" }, Mb = {
  key: 0,
  class: "panel-body text-center"
}, Lb = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "260px" } }, Ib = {
  key: 1,
  class: "panel-body no-padding",
  style: { height: "300px", "overflow-y": "auto" }
}, Pb = { class: "table text-nowrap table-fixed-header" }, Rb = { style: { position: "sticky", top: "0", "z-index": "1", "background-color": "#fff", "box-shadow": "0 -4px 8px 0px #000" } }, Fb = {
  colspan: "4",
  class: "bg-slate-700"
}, Vb = {
  colspan: "4",
  class: "bg-info-700"
}, $b = {
  width: "150",
  class: "text-center bg-slate"
}, jb = {
  width: "150",
  class: "text-center bg-slate"
}, Hb = {
  width: "150",
  class: "text-center bg-slate"
}, Wb = {
  width: "150",
  class: "text-center bg-slate"
}, Ub = {
  width: "150",
  class: "text-center bg-info"
}, Bb = {
  width: "150",
  class: "text-center bg-info"
}, zb = {
  width: "150",
  class: "text-center bg-info"
}, Yb = {
  width: "150",
  class: "text-center bg-info"
}, Kb = { class: "text-semibold text-center bg-slate-300" }, Gb = { class: "text-semibold text-center bg-slate-300" }, Xb = { class: "text-semibold text-center bg-slate-300" }, qb = { class: "text-semibold text-center bg-slate-300" }, Jb = { class: "text-semibold text-center bg-info-300" }, Qb = { class: "text-semibold text-center bg-info-300" }, Zb = { class: "text-semibold text-center bg-info-300" }, ev = { class: "text-semibold text-center bg-info-300" }, tv = /* @__PURE__ */ it({
  __name: "SaleSummaryByDealer",
  setup(e) {
    const { t } = Bt(), n = Be(!1), s = Be([]), i = async () => {
      var o, r;
      if (!n.value) {
        n.value = !0;
        try {
          const a = is(((o = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : o.api_base_url) || "", "/widgets/sale_summary_by_dealer"), l = (r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_token;
          if (!l)
            throw new Error("API token is missing");
          const c = await window.fetch(a, {
            headers: {
              Authorization: `Bearer ${l}`
            }
          });
          if (!c.ok)
            throw new Error("Failed to fetch data");
          s.value = await c.json();
        } catch (a) {
          console.error(a);
        } finally {
          n.value = !1;
        }
      }
    };
    return Wt(() => {
      i();
    }), (o, r) => (ue(), he("div", Tb, [
      D("div", Db, [
        D("div", Ab, [
          D("h6", kb, [
            D("span", Cb, z(ie(t)("sale_summary_by_dealer.title")), 1)
          ]),
          D("a", {
            href: "#",
            onClick: ss(i, ["prevent"])
          }, r[0] || (r[0] = [
            D("svg", {
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
              D("polyline", { points: "1 4 1 10 7 10" }),
              D("polyline", { points: "23 20 23 14 17 14" }),
              D("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (ue(), he("div", Mb, [
        D("div", Lb, [
          Oe(os, { width: 30 })
        ])
      ])) : (ue(), he("div", Ib, [
        D("table", Pb, [
          D("thead", Rb, [
            D("tr", null, [
              r[1] || (r[1] = D("th", null, null, -1)),
              D("th", Fb, z(ie(t)("sale_summary_by_dealer.current_month")), 1),
              D("th", Vb, z(ie(t)("sale_summary_by_dealer.current_year")), 1)
            ]),
            D("tr", null, [
              D("th", null, [
                rt(z(ie(t)("sale_summary_by_dealer.dealer")), 1),
                r[2] || (r[2] = D("div", {
                  class: "fht-cell",
                  style: { width: "199px" }
                }, null, -1))
              ]),
              D("th", $b, [
                rt(z(ie(t)("sale_summary_by_dealer.evaluations")), 1),
                r[3] || (r[3] = D("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              D("th", jb, [
                rt(z(ie(t)("sale_summary_by_dealer.confirmed_evaluations")), 1),
                r[4] || (r[4] = D("div", {
                  class: "fht-cell",
                  style: { width: "114px" }
                }, null, -1))
              ]),
              D("th", Hb, [
                rt(z(ie(t)("sale_summary_by_dealer.sold")), 1),
                r[5] || (r[5] = D("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              D("th", Wb, [
                rt(z(ie(t)("sale_summary_by_dealer.delivered")), 1),
                r[6] || (r[6] = D("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              D("th", Ub, [
                rt(z(ie(t)("sale_summary_by_dealer.evaluations")), 1),
                r[7] || (r[7] = D("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              D("th", Bb, [
                rt(z(ie(t)("sale_summary_by_dealer.confirmed_evaluations")), 1),
                r[8] || (r[8] = D("div", {
                  class: "fht-cell",
                  style: { width: "114px" }
                }, null, -1))
              ]),
              D("th", zb, [
                rt(z(ie(t)("sale_summary_by_dealer.sold")), 1),
                r[9] || (r[9] = D("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ]),
              D("th", Yb, [
                rt(z(ie(t)("sale_summary_by_dealer.delivered")), 1),
                r[10] || (r[10] = D("div", {
                  class: "fht-cell",
                  style: { width: "110px" }
                }, null, -1))
              ])
            ])
          ]),
          D("tbody", null, [
            (ue(!0), he(Xe, null, Fo(s.value, (a) => (ue(), he("tr", {
              key: a.dealer
            }, [
              D("td", null, z(a.dealer), 1),
              D("td", Kb, z(a.evaluations_current_month_total), 1),
              D("td", Gb, z(a.evaluations_confirmed_current_month_total), 1),
              D("td", Xb, z(a.sold_current_month_total), 1),
              D("td", qb, z(a.delivered_current_month_total), 1),
              D("td", Jb, z(a.evaluations_current_year_total), 1),
              D("td", Qb, z(a.evaluations_confirmed_current_year_total), 1),
              D("td", Zb, z(a.sold_current_year_total), 1),
              D("td", ev, z(a.delivered_current_year_total), 1)
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
function Ti(e) {
  return e + 0.5 | 0;
}
const yn = (e, t, n) => Math.max(Math.min(e, n), t);
function Us(e) {
  return yn(Ti(e * 2.55), 0, 255);
}
function On(e) {
  return yn(Ti(e * 255), 0, 255);
}
function nn(e) {
  return yn(Ti(e / 2.55) / 100, 0, 1);
}
function hc(e) {
  return yn(Ti(e * 100), 0, 100);
}
const vt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Kr = [..."0123456789ABCDEF"], nv = (e) => Kr[e & 15], sv = (e) => Kr[(e & 240) >> 4] + Kr[e & 15], Pi = (e) => (e & 240) >> 4 === (e & 15), iv = (e) => Pi(e.r) && Pi(e.g) && Pi(e.b) && Pi(e.a);
function ov(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & vt[e[1]] * 17,
    g: 255 & vt[e[2]] * 17,
    b: 255 & vt[e[3]] * 17,
    a: t === 5 ? vt[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: vt[e[1]] << 4 | vt[e[2]],
    g: vt[e[3]] << 4 | vt[e[4]],
    b: vt[e[5]] << 4 | vt[e[6]],
    a: t === 9 ? vt[e[7]] << 4 | vt[e[8]] : 255
  })), n;
}
const rv = (e, t) => e < 255 ? t(e) : "";
function av(e) {
  var t = iv(e) ? nv : sv;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + rv(e.a, t) : void 0;
}
const lv = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function id(e, t, n) {
  const s = t * Math.min(n, 1 - n), i = (o, r = (o + e / 30) % 12) => n - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [i(0), i(8), i(4)];
}
function cv(e, t, n) {
  const s = (i, o = (i + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function uv(e, t, n) {
  const s = id(e, 1, 0.5);
  let i;
  for (t + n > 1 && (i = 1 / (t + n), t *= i, n *= i), i = 0; i < 3; i++)
    s[i] *= 1 - t - n, s[i] += t;
  return s;
}
function fv(e, t, n, s, i) {
  return e === i ? (t - n) / s + (t < n ? 6 : 0) : t === i ? (n - e) / s + 2 : (e - t) / s + 4;
}
function La(e) {
  const n = e.r / 255, s = e.g / 255, i = e.b / 255, o = Math.max(n, s, i), r = Math.min(n, s, i), a = (o + r) / 2;
  let l, c, u;
  return o !== r && (u = o - r, c = a > 0.5 ? u / (2 - o - r) : u / (o + r), l = fv(n, s, i, u, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Ia(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(On);
}
function Pa(e, t, n) {
  return Ia(id, e, t, n);
}
function dv(e, t, n) {
  return Ia(uv, e, t, n);
}
function hv(e, t, n) {
  return Ia(cv, e, t, n);
}
function od(e) {
  return (e % 360 + 360) % 360;
}
function pv(e) {
  const t = lv.exec(e);
  let n = 255, s;
  if (!t)
    return;
  t[5] !== s && (n = t[6] ? Us(+t[5]) : On(+t[5]));
  const i = od(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = dv(i, o, r) : t[1] === "hsv" ? s = hv(i, o, r) : s = Pa(i, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: n
  };
}
function gv(e, t) {
  var n = La(e);
  n[0] = od(n[0] + t), n = Pa(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function _v(e) {
  if (!e)
    return;
  const t = La(e), n = t[0], s = hc(t[1]), i = hc(t[2]);
  return e.a < 255 ? `hsla(${n}, ${s}%, ${i}%, ${nn(e.a)})` : `hsl(${n}, ${s}%, ${i}%)`;
}
const pc = {
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
}, gc = {
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
function mv() {
  const e = {}, t = Object.keys(gc), n = Object.keys(pc);
  let s, i, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], i = 0; i < n.length; i++)
      o = n[i], a = a.replace(o, pc[o]);
    o = parseInt(gc[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let Ri;
function bv(e) {
  Ri || (Ri = mv(), Ri.transparent = [0, 0, 0, 0]);
  const t = Ri[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const vv = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function yv(e) {
  const t = vv.exec(e);
  let n = 255, s, i, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      n = t[8] ? Us(r) : yn(r * 255, 0, 255);
    }
    return s = +t[1], i = +t[3], o = +t[5], s = 255 & (t[2] ? Us(s) : yn(s, 0, 255)), i = 255 & (t[4] ? Us(i) : yn(i, 0, 255)), o = 255 & (t[6] ? Us(o) : yn(o, 0, 255)), {
      r: s,
      g: i,
      b: o,
      a: n
    };
  }
}
function Ev(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${nn(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const lr = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, us = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function xv(e, t, n) {
  const s = us(nn(e.r)), i = us(nn(e.g)), o = us(nn(e.b));
  return {
    r: On(lr(s + n * (us(nn(t.r)) - s))),
    g: On(lr(i + n * (us(nn(t.g)) - i))),
    b: On(lr(o + n * (us(nn(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  };
}
function Fi(e, t, n) {
  if (e) {
    let s = La(e);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1)), s = Pa(s), e.r = s[0], e.g = s[1], e.b = s[2];
  }
}
function rd(e, t) {
  return e && Object.assign(t || {}, e);
}
function _c(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = On(e[3]))) : (t = rd(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = On(t.a)), t;
}
function Ov(e) {
  return e.charAt(0) === "r" ? yv(e) : pv(e);
}
class mi {
  constructor(t) {
    if (t instanceof mi)
      return t;
    const n = typeof t;
    let s;
    n === "object" ? s = _c(t) : n === "string" && (s = ov(t) || bv(t) || Ov(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = rd(this._rgb);
    return t && (t.a = nn(t.a)), t;
  }
  set rgb(t) {
    this._rgb = _c(t);
  }
  rgbString() {
    return this._valid ? Ev(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? av(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? _v(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const s = this.rgb, i = t.rgb;
      let o;
      const r = n === o ? 0.5 : n, a = 2 * r - 1, l = s.a - i.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * i.r + 0.5, s.g = 255 & c * s.g + o * i.g + 0.5, s.b = 255 & c * s.b + o * i.b + 0.5, s.a = r * s.a + (1 - r) * i.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = xv(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new mi(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = On(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = Ti(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return Fi(this._rgb, 2, t), this;
  }
  darken(t) {
    return Fi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Fi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Fi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return gv(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function qt() {
}
const Nv = /* @__PURE__ */ (() => {
  let e = 0;
  return () => e++;
})();
function ft(e) {
  return e === null || typeof e > "u";
}
function Ue(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function fe(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function an(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function Lt(e, t) {
  return an(e) ? e : t;
}
function be(e, t) {
  return typeof e > "u" ? t : e;
}
const wv = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, ad = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function xe(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function _e(e, t, n, s) {
  let i, o, r;
  if (Ue(e))
    for (o = e.length, i = 0; i < o; i++)
      t.call(n, e[i], i);
  else if (fe(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(n, e[r[i]], r[i]);
}
function mo(e, t) {
  let n, s, i, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, s = e.length; n < s; ++n)
    if (i = e[n], o = t[n], i.datasetIndex !== o.datasetIndex || i.index !== o.index)
      return !1;
  return !0;
}
function bo(e) {
  if (Ue(e))
    return e.map(bo);
  if (fe(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), s = n.length;
    let i = 0;
    for (; i < s; ++i)
      t[n[i]] = bo(e[n[i]]);
    return t;
  }
  return e;
}
function ld(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function Sv(e, t, n, s) {
  if (!ld(e))
    return;
  const i = t[e], o = n[e];
  fe(i) && fe(o) ? bi(i, o, s) : t[e] = bo(o);
}
function bi(e, t, n) {
  const s = Ue(t) ? t : [
    t
  ], i = s.length;
  if (!fe(e))
    return e;
  n = n || {};
  const o = n.merger || Sv;
  let r;
  for (let a = 0; a < i; ++a) {
    if (r = s[a], !fe(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, u = l.length; c < u; ++c)
      o(l[c], e, r, n);
  }
  return e;
}
function ti(e, t) {
  return bi(e, t, {
    merger: Tv
  });
}
function Tv(e, t, n) {
  if (!ld(e))
    return;
  const s = t[e], i = n[e];
  fe(s) && fe(i) ? ti(s, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = bo(i));
}
const mc = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (e) => e,
  // default resolvers
  x: (e) => e.x,
  y: (e) => e.y
};
function Dv(e) {
  const t = e.split("."), n = [];
  let s = "";
  for (const i of t)
    s += i, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (n.push(s), s = "");
  return n;
}
function Av(e) {
  const t = Dv(e);
  return (n) => {
    for (const s of t) {
      if (s === "")
        break;
      n = n && n[s];
    }
    return n;
  };
}
function vi(e, t) {
  return (mc[t] || (mc[t] = Av(t)))(e);
}
function Ra(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const vo = (e) => typeof e < "u", Tn = (e) => typeof e == "function", bc = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function kv(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const He = Math.PI, Le = 2 * He, yo = Number.POSITIVE_INFINITY, Cv = He / 180, Ve = He / 2, In = He / 4, vc = He * 2 / 3, yc = Math.log10, Ec = Math.sign;
function Mv(e) {
  const t = [], n = Math.sqrt(e);
  let s;
  for (s = 1; s < n; s++)
    e % s === 0 && (t.push(s), t.push(e / s));
  return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t;
}
function Eo(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Wn(e) {
  return e * (He / 180);
}
function Lv(e) {
  return e * (180 / He);
}
function cd(e, t) {
  const n = t.x - e.x, s = t.y - e.y, i = Math.sqrt(n * n + s * s);
  let o = Math.atan2(s, n);
  return o < -0.5 * He && (o += Le), {
    angle: o,
    distance: i
  };
}
function Iv(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Pn(e) {
  return (e % Le + Le) % Le;
}
function xo(e, t, n, s) {
  const i = Pn(e), o = Pn(t), r = Pn(n), a = Pn(o - i), l = Pn(r - i), c = Pn(i - o), u = Pn(i - r);
  return i === o || i === r || s && o === r || a > l && c < u;
}
function Et(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Pv(e) {
  return Et(e, -32768, 32767);
}
function Bs(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s;
}
function Fa(e, t, n) {
  n = n || ((r) => e[r] < t);
  let s = e.length - 1, i = 0, o;
  for (; s - i > 1; )
    o = i + s >> 1, n(o) ? i = o : s = o;
  return {
    lo: i,
    hi: s
  };
}
const Gr = (e, t, n, s) => Fa(e, n, s ? (i) => {
  const o = e[i][t];
  return o < n || o === n && e[i + 1][t] === n;
} : (i) => e[i][t] < n), Rv = (e, t, n) => Fa(e, n, (s) => e[s][t] >= n);
function Fv(e, t, n) {
  let s = 0, i = e.length;
  for (; s < i && e[s] < t; )
    s++;
  for (; i > s && e[i - 1] > n; )
    i--;
  return s > 0 || i < e.length ? e.slice(s, i) : e;
}
const ud = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Vv(e, t) {
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
  }), ud.forEach((n) => {
    const s = "_onData" + Ra(n), i = e[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = i.apply(this, o);
        return e._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function xc(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const s = n.listeners, i = s.indexOf(t);
  i !== -1 && s.splice(i, 1), !(s.length > 0) && (ud.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function $v(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const fd = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function dd(e, t) {
  let n = [], s = !1;
  return function(...i) {
    n = i, s || (s = !0, fd.call(window, () => {
      s = !1, e.apply(t, n);
    }));
  };
}
function jv(e, t) {
  let n;
  return function(...s) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, s)) : e.apply(this, s), t;
  };
}
const hd = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", pt = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, Hv = (e, t, n, s) => e === (s ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t, Vi = (e) => e === 0 || e === 1, Oc = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * Le / n)), Nc = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * Le / n) + 1, ni = {
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
  easeInSine: (e) => -Math.cos(e * Ve) + 1,
  easeOutSine: (e) => Math.sin(e * Ve),
  easeInOutSine: (e) => -0.5 * (Math.cos(He * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => Vi(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => Vi(e) ? e : Oc(e, 0.075, 0.3),
  easeOutElastic: (e) => Vi(e) ? e : Nc(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return Vi(e) ? e : e < 0.5 ? 0.5 * Oc(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * Nc(e * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (e) => 1 - ni.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? ni.easeInBounce(e * 2) * 0.5 : ni.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function pd(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function wc(e) {
  return pd(e) ? e : new mi(e);
}
function cr(e) {
  return pd(e) ? e : new mi(e).saturate(0.5).darken(0.1).hexString();
}
const Wv = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Uv = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Bv(e) {
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
      properties: Uv
    },
    numbers: {
      type: "number",
      properties: Wv
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
function zv(e) {
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
const Sc = /* @__PURE__ */ new Map();
function Yv(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let s = Sc.get(n);
  return s || (s = new Intl.NumberFormat(e, t), Sc.set(n, s)), s;
}
function gd(e, t, n) {
  return Yv(t, n).format(e);
}
const _d = {
  values(e) {
    return Ue(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const s = this.chart.options.locale;
    let i, o = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), o = Kv(e, n);
    }
    const r = yc(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: i,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), gd(e, s, l);
  },
  logarithmic(e, t, n) {
    if (e === 0)
      return "0";
    const s = n[t].significand || e / Math.pow(10, Math.floor(yc(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(s) || t > 0.8 * n.length ? _d.numeric.call(this, e, t, n) : "";
  }
};
function Kv(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var Gv = {
  formatters: _d
};
function Xv(e) {
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
      callback: Gv.formatters.values,
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
const ns = /* @__PURE__ */ Object.create(null), Xr = /* @__PURE__ */ Object.create(null);
function si(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let s = 0, i = n.length; s < i; ++s) {
    const o = n[s];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function ur(e, t, n) {
  return typeof t == "string" ? bi(si(e, t), n) : bi(si(e, ""), t);
}
class qv {
  constructor(t, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, i) => cr(i.backgroundColor), this.hoverBorderColor = (s, i) => cr(i.borderColor), this.hoverColor = (s, i) => cr(i.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return ur(this, t, n);
  }
  get(t) {
    return si(this, t);
  }
  describe(t, n) {
    return ur(Xr, t, n);
  }
  override(t, n) {
    return ur(ns, t, n);
  }
  route(t, n, s, i) {
    const o = si(this, t), r = si(this, s), a = "_" + n;
    Object.defineProperties(o, {
      [a]: {
        value: o[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[i];
          return fe(l) ? Object.assign({}, c, l) : be(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var De = /* @__PURE__ */ new qv({
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
  Bv,
  zv,
  Xv
]);
function Jv(e) {
  return !e || ft(e.size) || ft(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function Tc(e, t, n, s, i) {
  let o = t[i];
  return o || (o = t[i] = e.measureText(i).width, n.push(i)), o > s && (s = o), s;
}
function Rn(e, t, n) {
  const s = e.currentDevicePixelRatio, i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function Dc(e, t) {
  !t && !e || (t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore());
}
function Ac(e, t, n, s) {
  md(e, t, n, s, null);
}
function md(e, t, n, s, i) {
  let o, r, a, l, c, u, f, d;
  const h = t.pointStyle, v = t.rotation, b = t.radius;
  let E = (v || 0) * Cv;
  if (h && typeof h == "object" && (o = h.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, s), e.rotate(E), e.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height), e.restore();
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch (e.beginPath(), h) {
      default:
        i ? e.ellipse(n, s, i / 2, b, 0, 0, Le) : e.arc(n, s, b, 0, Le), e.closePath();
        break;
      case "triangle":
        u = i ? i / 2 : b, e.moveTo(n + Math.sin(E) * u, s - Math.cos(E) * b), E += vc, e.lineTo(n + Math.sin(E) * u, s - Math.cos(E) * b), E += vc, e.lineTo(n + Math.sin(E) * u, s - Math.cos(E) * b), e.closePath();
        break;
      case "rectRounded":
        c = b * 0.516, l = b - c, r = Math.cos(E + In) * l, f = Math.cos(E + In) * (i ? i / 2 - c : l), a = Math.sin(E + In) * l, d = Math.sin(E + In) * (i ? i / 2 - c : l), e.arc(n - f, s - a, c, E - He, E - Ve), e.arc(n + d, s - r, c, E - Ve, E), e.arc(n + f, s + a, c, E, E + Ve), e.arc(n - d, s + r, c, E + Ve, E + He), e.closePath();
        break;
      case "rect":
        if (!v) {
          l = Math.SQRT1_2 * b, u = i ? i / 2 : l, e.rect(n - u, s - l, 2 * u, 2 * l);
          break;
        }
        E += In;
      case "rectRot":
        f = Math.cos(E) * (i ? i / 2 : b), r = Math.cos(E) * b, a = Math.sin(E) * b, d = Math.sin(E) * (i ? i / 2 : b), e.moveTo(n - f, s - a), e.lineTo(n + d, s - r), e.lineTo(n + f, s + a), e.lineTo(n - d, s + r), e.closePath();
        break;
      case "crossRot":
        E += In;
      case "cross":
        f = Math.cos(E) * (i ? i / 2 : b), r = Math.cos(E) * b, a = Math.sin(E) * b, d = Math.sin(E) * (i ? i / 2 : b), e.moveTo(n - f, s - a), e.lineTo(n + f, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r);
        break;
      case "star":
        f = Math.cos(E) * (i ? i / 2 : b), r = Math.cos(E) * b, a = Math.sin(E) * b, d = Math.sin(E) * (i ? i / 2 : b), e.moveTo(n - f, s - a), e.lineTo(n + f, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r), E += In, f = Math.cos(E) * (i ? i / 2 : b), r = Math.cos(E) * b, a = Math.sin(E) * b, d = Math.sin(E) * (i ? i / 2 : b), e.moveTo(n - f, s - a), e.lineTo(n + f, s + a), e.moveTo(n + d, s - r), e.lineTo(n - d, s + r);
        break;
      case "line":
        r = i ? i / 2 : Math.cos(E) * b, a = Math.sin(E) * b, e.moveTo(n - r, s - a), e.lineTo(n + r, s + a);
        break;
      case "dash":
        e.moveTo(n, s), e.lineTo(n + Math.cos(E) * (i ? i / 2 : b), s + Math.sin(E) * b);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function bd(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function Va(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function $a(e) {
  e.restore();
}
function Qv(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), ft(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Zv(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = n - o.actualBoundingBoxAscent, c = n + o.actualBoundingBoxDescent, u = i.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = i.decorationWidth || 2, e.moveTo(r, u), e.lineTo(a, u), e.stroke();
  }
}
function ey(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function Oo(e, t, n, s, i, o = {}) {
  const r = Ue(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, Qv(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && ey(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), ft(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, n, s, o.maxWidth)), e.fillText(c, n, s, o.maxWidth), Zv(e, n, s, c, o), s += Number(i.lineHeight);
  e.restore();
}
function qr(e, t) {
  const { x: n, y: s, w: i, h: o, radius: r } = t;
  e.arc(n + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * He, He, !0), e.lineTo(n, s + o - r.bottomLeft), e.arc(n + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, He, Ve, !0), e.lineTo(n + i - r.bottomRight, s + o), e.arc(n + i - r.bottomRight, s + o - r.bottomRight, r.bottomRight, Ve, 0, !0), e.lineTo(n + i, s + r.topRight), e.arc(n + i - r.topRight, s + r.topRight, r.topRight, 0, -Ve, !0), e.lineTo(n + r.topLeft, s);
}
const ty = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, ny = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function sy(e, t) {
  const n = ("" + e).match(ty);
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
const iy = (e) => +e || 0;
function ja(e, t) {
  const n = {}, s = fe(t), i = s ? Object.keys(t) : t, o = fe(e) ? s ? (r) => be(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of i)
    n[r] = iy(o(r));
  return n;
}
function oy(e) {
  return ja(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ii(e) {
  return ja(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function At(e) {
  const t = oy(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function ut(e, t) {
  e = e || {}, t = t || De.font;
  let n = be(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let s = be(e.style, t.style);
  s && !("" + s).match(ny) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const i = {
    family: be(e.family, t.family),
    lineHeight: sy(be(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: be(e.weight, t.weight),
    string: ""
  };
  return i.string = Jv(i), i;
}
function $i(e, t, n, s) {
  let i, o, r;
  for (i = 0, o = e.length; i < o; ++i)
    if (r = e[i], r !== void 0 && r !== void 0)
      return r;
}
function ry(e, t, n) {
  const { min: s, max: i } = e, o = ad(t, (i - s) / 2), r = (a, l) => n && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(i, o)
  };
}
function Ds(e, t) {
  return Object.assign(Object.create(e), t);
}
function Ha(e, t = [
  ""
], n, s, i = () => e[0]) {
  const o = n || e;
  typeof s > "u" && (s = xd("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: s,
    _getTarget: i,
    override: (a) => Ha([
      a,
      ...e
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return yd(a, l, () => py(l, t, e, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
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
    has(a, l) {
      return Cc(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Cc(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const u = a._storage || (a._storage = i());
      return a[l] = u[l] = c, delete a._keys, !0;
    }
  });
}
function Ns(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: vd(e, s),
    setContext: (o) => Ns(e, o, n, s),
    override: (o) => Ns(e.override(o), t, n, s)
  };
  return new Proxy(i, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return yd(o, r, () => ly(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(e, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, r);
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
    has(o, r) {
      return Reflect.has(e, r);
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
    set(o, r, a) {
      return e[r] = a, delete o[r], !0;
    }
  });
}
function vd(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: s = t.indexable, _allKeys: i = t.allKeys } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: s,
    isScriptable: Tn(n) ? n : () => n,
    isIndexable: Tn(s) ? s : () => s
  };
}
const ay = (e, t) => e ? e + Ra(t) : t, Wa = (e, t) => fe(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function yd(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const s = n();
  return e[t] = s, s;
}
function ly(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: o, _descriptors: r } = e;
  let a = s[t];
  return Tn(a) && r.isScriptable(t) && (a = cy(t, a, e, n)), Ue(a) && a.length && (a = uy(t, a, e, r.isIndexable)), Wa(t, a) && (a = Ns(a, i, o && o[t], r)), a;
}
function cy(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = n;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  a.add(e);
  let l = t(o, r || s);
  return a.delete(e), Wa(e, l) && (l = Ua(i._scopes, i, e, l)), l;
}
function uy(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = n;
  if (typeof o.index < "u" && s(e))
    return t[o.index % t.length];
  if (fe(t[0])) {
    const l = t, c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const f = Ua(c, i, e, u);
      t.push(Ns(f, o, r && r[e], a));
    }
  }
  return t;
}
function Ed(e, t, n) {
  return Tn(e) ? e(t, n) : e;
}
const fy = (e, t) => e === !0 ? t : typeof e == "string" ? vi(t, e) : void 0;
function dy(e, t, n, s, i) {
  for (const o of t) {
    const r = fy(n, o);
    if (r) {
      e.add(r);
      const a = Ed(r._fallback, n, i);
      if (typeof a < "u" && a !== n && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && n !== s)
      return null;
  }
  return !1;
}
function Ua(e, t, n, s) {
  const i = t._rootScopes, o = Ed(t._fallback, n, s), r = [
    ...e,
    ...i
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = kc(a, r, n, o || n, s);
  return l === null || typeof o < "u" && o !== n && (l = kc(a, r, o, l, s), l === null) ? !1 : Ha(Array.from(a), [
    ""
  ], i, o, () => hy(t, n, s));
}
function kc(e, t, n, s, i) {
  for (; n; )
    n = dy(e, t, n, s, i);
  return n;
}
function hy(e, t, n) {
  const s = e._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return Ue(i) && fe(n) ? n : i || {};
}
function py(e, t, n, s) {
  let i;
  for (const o of t)
    if (i = xd(ay(o, e), n), typeof i < "u")
      return Wa(e, i) ? Ua(n, s, e, i) : i;
}
function xd(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const s = n[e];
    if (typeof s < "u")
      return s;
  }
}
function Cc(e) {
  let t = e._keys;
  return t || (t = e._keys = gy(e._scopes)), t;
}
function gy(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const s of Object.keys(n).filter((i) => !i.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Ba() {
  return typeof window < "u" && typeof document < "u";
}
function za(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function No(e, t, n) {
  let s;
  return typeof e == "string" ? (s = parseInt(e, 10), e.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[n])) : s = e, s;
}
const zo = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function _y(e, t) {
  return zo(e).getPropertyValue(t);
}
const my = [
  "top",
  "right",
  "bottom",
  "left"
];
function qn(e, t, n) {
  const s = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const o = my[i];
    s[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const by = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function vy(e, t) {
  const n = e.touches, s = n && n.length ? n[0] : e, { offsetX: i, offsetY: o } = s;
  let r = !1, a, l;
  if (by(i, o, e.target))
    a = i, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function jn(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: s } = t, i = zo(n), o = i.boxSizing === "border-box", r = qn(i, "padding"), a = qn(i, "border", "width"), { x: l, y: c, box: u } = vy(e, n), f = r.left + (u && a.left), d = r.top + (u && a.top);
  let { width: h, height: v } = t;
  return o && (h -= r.width + a.width, v -= r.height + a.height), {
    x: Math.round((l - f) / h * n.width / s),
    y: Math.round((c - d) / v * n.height / s)
  };
}
function yy(e, t, n) {
  let s, i;
  if (t === void 0 || n === void 0) {
    const o = e && za(e);
    if (!o)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = zo(o), l = qn(a, "border", "width"), c = qn(a, "padding");
      t = r.width - c.width - l.width, n = r.height - c.height - l.height, s = No(a.maxWidth, o, "clientWidth"), i = No(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: s || yo,
    maxHeight: i || yo
  };
}
const ji = (e) => Math.round(e * 10) / 10;
function Ey(e, t, n, s) {
  const i = zo(e), o = qn(i, "margin"), r = No(i.maxWidth, e, "clientWidth") || yo, a = No(i.maxHeight, e, "clientHeight") || yo, l = yy(e, t, n);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const d = qn(i, "border", "width"), h = qn(i, "padding");
    c -= h.width + d.width, u -= h.height + d.height;
  }
  return c = Math.max(0, c - o.width), u = Math.max(0, s ? c / s : u - o.height), c = ji(Math.min(c, r, l.maxWidth)), u = ji(Math.min(u, a, l.maxHeight)), c && !u && (u = ji(c / 2)), (t !== void 0 || n !== void 0) && s && l.height && u > l.height && (u = l.height, c = ji(Math.floor(u * s))), {
    width: c,
    height: u
  };
}
function Mc(e, t, n) {
  const s = t || 1, i = Math.floor(e.height * s), o = Math.floor(e.width * s);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (n || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== s || r.height !== i || r.width !== o ? (e.currentDevicePixelRatio = s, r.height = i, r.width = o, e.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const xy = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    Ba() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return e;
}();
function Lc(e, t) {
  const n = _y(e, t), s = n && n.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
const Oy = function(e, t) {
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
    xPlus(n, s) {
      return n - s;
    },
    leftForLtr(n, s) {
      return n - s;
    }
  };
}, Ny = function() {
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
function bs(e, t, n) {
  return e ? Oy(t, n) : Ny();
}
function Od(e, t) {
  let n, s;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, s = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = s);
}
function Nd(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.6
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class wy {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, n, s, i) {
    const o = n.listeners[i], r = n.duration;
    o.forEach((a) => a({
      chart: t,
      initial: n.initial,
      numSteps: r,
      currentStep: Math.min(s - n.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = fd.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (i.draw(), this._notify(i, s, t, "progress")), o.length || (s.running = !1, this._notify(i, s, t, "complete"), s.initial = !1), n += o.length;
    }), this._lastDate = t, n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let s = n.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, n.set(t, s)), s;
  }
  listen(t, n, s) {
    this._getAnims(t).listeners[n].push(s);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n && (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((s, i) => Math.max(s, i._duration), 0), this._refresh());
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
    const s = n.items;
    let i = s.length - 1;
    for (; i >= 0; --i)
      s[i].cancel();
    n.items = [], this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Zt = /* @__PURE__ */ new wy();
const Ic = "transparent", Sy = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const s = wc(e || Ic), i = s.valid && wc(t || Ic);
    return i && i.valid ? i.mix(s, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class Ty {
  constructor(t, n, s, i) {
    const o = n[s];
    i = $i([
      t.to,
      i,
      o,
      t.from
    ]);
    const r = $i([
      t.from,
      o,
      i
    ]);
    this._active = !0, this._fn = t.fn || Sy[t.type || typeof r], this._easing = ni[t.easing] || ni.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = s, this._from = r, this._to = i, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = $i([
        t.to,
        n,
        i,
        t.from
      ]), this._from = $i([
        t.from,
        i,
        n
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const n = t - this._start, s = this._duration, i = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || n < s), !this._active) {
      this._target[i] = a, this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = o;
      return;
    }
    l = n / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[i] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, s) => {
      t.push({
        res: n,
        rej: s
      });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej", s = this._promises || [];
    for (let i = 0; i < s.length; i++)
      s[i][n]();
  }
}
class wd {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!fe(t))
      return;
    const n = Object.keys(De.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const o = t[i];
      if (!fe(o))
        return;
      const r = {};
      for (const a of n)
        r[a] = o[a];
      (Ue(o.properties) && o.properties || [
        i
      ]).forEach((a) => {
        (a === i || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, n) {
    const s = n.options, i = Ay(t, s);
    if (!i)
      return [];
    const o = this._createAnimations(i, s);
    return s.$shared && Dy(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, n) {
    const s = this._properties, i = [], o = t.$animations || (t.$animations = {}), r = Object.keys(n), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const u = n[c];
      let f = o[c];
      const d = s.get(c);
      if (f)
        if (d && f.active()) {
          f.update(d, u, a);
          continue;
        } else
          f.cancel();
      if (!d || !d.duration) {
        t[c] = u;
        continue;
      }
      o[c] = f = new Ty(d, t, c, u), i.push(f);
    }
    return i;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const s = this._createAnimations(t, n);
    if (s.length)
      return Zt.add(this._chart, s), !0;
  }
}
function Dy(e, t) {
  const n = [], s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const o = e[s[i]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function Ay(e, t) {
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
function Pc(e, t) {
  const n = e && e.options || {}, s = n.reverse, i = n.min === void 0 ? t : 0, o = n.max === void 0 ? t : 0;
  return {
    start: s ? o : i,
    end: s ? i : o
  };
}
function ky(e, t, n) {
  if (n === !1)
    return !1;
  const s = Pc(e, n), i = Pc(t, n);
  return {
    top: i.end,
    right: s.end,
    bottom: i.start,
    left: s.start
  };
}
function Cy(e) {
  let t, n, s, i;
  return fe(e) ? (t = e.top, n = e.right, s = e.bottom, i = e.left) : t = n = s = i = e, {
    top: t,
    right: n,
    bottom: s,
    left: i,
    disabled: e === !1
  };
}
function Sd(e, t) {
  const n = [], s = e._getSortedDatasetMetas(t);
  let i, o;
  for (i = 0, o = s.length; i < o; ++i)
    n.push(s[i].index);
  return n;
}
function Rc(e, t, n, s = {}) {
  const i = e.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let u = !1;
  for (r = 0, a = i.length; r < a; ++r) {
    if (l = +i[r], l === n) {
      if (u = !0, s.all)
        continue;
      break;
    }
    c = e.values[l], an(c) && (o || t === 0 || Ec(t) === Ec(c)) && (t += c);
  }
  return !u && !s.all ? 0 : t;
}
function My(e, t) {
  const { iScale: n, vScale: s } = t, i = n.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(e), a = new Array(r.length);
  let l, c, u;
  for (l = 0, c = r.length; l < c; ++l)
    u = r[l], a[l] = {
      [i]: u,
      [o]: e[u]
    };
  return a;
}
function fr(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function Ly(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function Iy(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY
  };
}
function Py(e, t, n) {
  const s = e[t] || (e[t] = {});
  return s[n] || (s[n] = {});
}
function Fc(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const o = e[i.index];
    if (n && o > 0 || !n && o < 0)
      return i.index;
  }
  return null;
}
function Vc(e, t) {
  const { chart: n, _cachedMeta: s } = e, i = n._stacks || (n._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, u = Ly(o, r, s), f = t.length;
  let d;
  for (let h = 0; h < f; ++h) {
    const v = t[h], { [l]: b, [c]: E } = v, _ = v._stacks || (v._stacks = {});
    d = _[c] = Py(i, u, b), d[a] = E, d._top = Fc(d, r, !0, s.type), d._bottom = Fc(d, r, !1, s.type);
    const y = d._visualValues || (d._visualValues = {});
    y[a] = E;
  }
}
function dr(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((s) => n[s].axis === t).shift();
}
function Ry(e, t) {
  return Ds(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Fy(e, t, n) {
  return Ds(e, {
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
function Rs(e, t) {
  const n = e.controller.index, s = e.vScale && e.vScale.axis;
  if (s) {
    t = t || e._parsed;
    for (const i of t) {
      const o = i._stacks;
      if (!o || o[s] === void 0 || o[s][n] === void 0)
        return;
      delete o[s][n], o[s]._visualValues !== void 0 && o[s]._visualValues[n] !== void 0 && delete o[s]._visualValues[n];
    }
  }
}
const hr = (e) => e === "reset" || e === "none", $c = (e, t) => t ? e : Object.assign({}, e), Vy = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: Sd(n, !0),
  values: null
};
class oi {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = fr(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Rs(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, s = this.getDataset(), i = (f, d, h, v) => f === "x" ? d : f === "r" ? v : h, o = n.xAxisID = be(s.xAxisID, dr(t, "x")), r = n.yAxisID = be(s.yAxisID, dr(t, "y")), a = n.rAxisID = be(s.rAxisID, dr(t, "r")), l = n.indexAxis, c = n.iAxisID = i(l, o, r, a), u = n.vAxisID = i(l, r, o, a);
    n.xScale = this.getScaleForId(o), n.yScale = this.getScaleForId(r), n.rScale = this.getScaleForId(a), n.iScale = this.getScaleForId(c), n.vScale = this.getScaleForId(u);
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
    this._data && xc(this._data, this), t._stacked && Rs(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), s = this._data;
    if (fe(n)) {
      const i = this._cachedMeta;
      this._data = My(n, i);
    } else if (s !== n) {
      if (s) {
        xc(s, this);
        const i = this._cachedMeta;
        Rs(i), i._parsed = [];
      }
      n && Object.isExtensible(n) && Vv(n, this), this._syncList = [], this._data = n;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta, s = this.getDataset();
    let i = !1;
    this._dataCheck();
    const o = n._stacked;
    n._stacked = fr(n.vScale, n), n.stack !== s.stack && (i = !0, Rs(n), n.stack = s.stack), this._resyncElements(t), (i || o !== n._stacked) && (Vc(this, n._parsed), n._stacked = fr(n.vScale, n));
  }
  configure() {
    const t = this.chart.config, n = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), n, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, n) {
    const { _cachedMeta: s, _data: i } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && n === i.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], u, f, d;
    if (this._parsing === !1)
      s._parsed = i, s._sorted = !0, d = i;
    else {
      Ue(i[t]) ? d = this.parseArrayData(s, i, t, n) : fe(i[t]) ? d = this.parseObjectData(s, i, t, n) : d = this.parsePrimitiveData(s, i, t, n);
      const h = () => f[a] === null || c && f[a] < c[a];
      for (u = 0; u < n; ++u)
        s._parsed[u + t] = f = d[u], l && (h() && (l = !1), c = f);
      s._sorted = l;
    }
    r && Vc(this, d);
  }
  parsePrimitiveData(t, n, s, i) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), u = o === r, f = new Array(i);
    let d, h, v;
    for (d = 0, h = i; d < h; ++d)
      v = d + s, f[d] = {
        [a]: u || o.parse(c[v], v),
        [l]: r.parse(n[v], v)
      };
    return f;
  }
  parseArrayData(t, n, s, i) {
    const { xScale: o, yScale: r } = t, a = new Array(i);
    let l, c, u, f;
    for (l = 0, c = i; l < c; ++l)
      u = l + s, f = n[u], a[l] = {
        x: o.parse(f[0], u),
        y: r.parse(f[1], u)
      };
    return a;
  }
  parseObjectData(t, n, s, i) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(i);
    let u, f, d, h;
    for (u = 0, f = i; u < f; ++u)
      d = u + s, h = n[d], c[u] = {
        x: o.parse(vi(h, a), d),
        y: r.parse(vi(h, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, s) {
    const i = this.chart, o = this._cachedMeta, r = n[t.axis], a = {
      keys: Sd(i, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return Rc(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, n, s, i) {
    const o = s[n.axis];
    let r = o === null ? NaN : o;
    const a = i && s._stacks[n.axis];
    i && a && (i.values = a, r = Rc(i, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, n) {
    const s = this._cachedMeta, i = s._parsed, o = s._sorted && t === s.iScale, r = i.length, a = this._getOtherScale(t), l = Vy(n, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: f } = Iy(a);
    let d, h;
    function v() {
      h = i[d];
      const b = h[a.axis];
      return !an(h[t.axis]) || u > b || f < b;
    }
    for (d = 0; d < r && !(!v() && (this.updateRangeFromParsed(c, t, h, l), o)); ++d)
      ;
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!v()) {
          this.updateRangeFromParsed(c, t, h, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed, s = [];
    let i, o, r;
    for (i = 0, o = n.length; i < o; ++i)
      r = n[i][t.axis], an(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = n.iScale, i = n.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: i ? "" + i.getLabelForValue(o[i.axis]) : ""
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"), n._clip = Cy(be(this.options.clip, ky(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, n = this.chart, s = this._cachedMeta, i = s.data || [], o = n.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || i.length - a, c = this.options.drawActiveElementsOnTop;
    let u;
    for (s.dataset && s.dataset.draw(t, o, a, l), u = a; u < a + l; ++u) {
      const f = i[u];
      f.hidden || (f.active && c ? r.push(f) : f.draw(t, o));
    }
    for (u = 0; u < r.length; ++u)
      r[u].draw(t, o);
  }
  getStyle(t, n) {
    const s = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, n, s) {
    const i = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Fy(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = i.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Ry(this.chart.getContext(), this.index)), o.dataset = i, o.index = o.datasetIndex = this.index;
    return o.active = !!n, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", s) {
    const i = n === "active", o = this._cachedDataOpts, r = t + "-" + n, a = o[r], l = this.enableOptionSharing && vo(s);
    if (a)
      return $c(a, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), f = i ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), h = Object.keys(De.elements[t]), v = () => this.getContext(s, i, n), b = c.resolveNamedOptions(d, h, v, f);
    return b.$shared && (b.$shared = l, o[r] = Object.freeze($c(b, l))), b;
  }
  _resolveAnimations(t, n, s) {
    const i = this.chart, o = this._cachedDataOpts, r = `animation-${n}`, a = o[r];
    if (a)
      return a;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config, f = u.datasetAnimationScopeKeys(this._type, n), d = u.getOptionScopes(this.getDataset(), f);
      l = u.createResolver(d, this.getContext(t, s, n));
    }
    const c = new wd(i, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || hr(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n), i = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(n, o) || o !== i;
    return this.updateSharedOptions(o, n, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, n, s, i) {
    hr(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s);
  }
  updateSharedOptions(t, n, s) {
    t && !hr(n) && this._resolveAnimations(void 0, n).update(t, s);
  }
  _setStyle(t, n, s, i) {
    t.active = i;
    const o = this.getStyle(n, i);
    this._resolveAnimations(n, s, i).update(t, {
      options: !i && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !0);
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
    const n = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const i = s.length, o = n.length, r = Math.min(o, i);
    r && this.parse(0, r), o > i ? this._insertElements(i, o - i, t) : o < i && this._removeElements(o, i - o);
  }
  _insertElements(t, n, s = !0) {
    const i = this._cachedMeta, o = i.data, r = t + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= r; a--)
        c[a] = c[a - n];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(i._parsed), this.parse(t, n), s && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, s, i) {
  }
  _removeElements(t, n) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const i = s._parsed.splice(t, n);
      s._stacked && Rs(s, i);
    }
    s.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [n, s, i] = t;
      this[n](s, i);
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
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
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
se(oi, "defaults", {}), se(oi, "datasetElementType", null), se(oi, "dataElementType", null);
function $y(e, t, n) {
  let s = 1, i = 1, o = 0, r = 0;
  if (t < Le) {
    const a = e, l = a + t, c = Math.cos(a), u = Math.sin(a), f = Math.cos(l), d = Math.sin(l), h = (N, w, S) => xo(N, a, l, !0) ? 1 : Math.max(w, w * n, S, S * n), v = (N, w, S) => xo(N, a, l, !0) ? -1 : Math.min(w, w * n, S, S * n), b = h(0, c, f), E = h(Ve, u, d), _ = v(He, c, f), y = v(He + Ve, u, d);
    s = (b - _) / 2, i = (E - y) / 2, o = -(b + _) / 2, r = -(E + y) / 2;
  }
  return {
    ratioX: s,
    ratioY: i,
    offsetX: o,
    offsetY: r
  };
}
class zs extends oi {
  constructor(t, n) {
    super(t, n), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, n) {
    const s = this.getDataset().data, i = this._cachedMeta;
    if (this._parsing === !1)
      i._parsed = s;
    else {
      let o = (l) => +s[l];
      if (fe(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +vi(s[c], l);
      }
      let r, a;
      for (r = t, a = t + n; r < a; ++r)
        i._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return Wn(this.options.rotation - 90);
  }
  _getCircumference() {
    return Wn(this.options.circumference);
  }
  _getRotationExtents() {
    let t = Le, n = -Le;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const i = this.chart.getDatasetMeta(s).controller, o = i._getRotation(), r = i._getCircumference();
        t = Math.min(t, o), n = Math.max(n, o + r);
      }
    return {
      rotation: t,
      circumference: n - t
    };
  }
  update(t) {
    const n = this.chart, { chartArea: s } = n, i = this._cachedMeta, o = i.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(wv(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: f } = this._getRotationExtents(), { ratioX: d, ratioY: h, offsetX: v, offsetY: b } = $y(f, u, l), E = (s.width - r) / d, _ = (s.height - r) / h, y = Math.max(Math.min(E, _) / 2, 0), N = ad(this.options.radius, y), w = Math.max(N * l, 0), S = (N - w) / this._getVisibleDatasetWeightTotal();
    this.offsetX = v * N, this.offsetY = b * N, i.total = this.calculateTotal(), this.outerRadius = N - S * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - S * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, n) {
    const s = this.options, i = this._cachedMeta, o = this._getCircumference();
    return n && s.animation.animateRotate || !this.chart.getDataVisibility(t) || i._parsed[t] === null || i.data[t].hidden ? 0 : this.calculateCircumference(i._parsed[t] * o / Le);
  }
  updateElements(t, n, s, i) {
    const o = i === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, u = (a.left + a.right) / 2, f = (a.top + a.bottom) / 2, d = o && c.animateScale, h = d ? 0 : this.innerRadius, v = d ? 0 : this.outerRadius, { sharedOptions: b, includeOptions: E } = this._getSharedOptions(n, i);
    let _ = this._getRotation(), y;
    for (y = 0; y < n; ++y)
      _ += this._circumference(y, o);
    for (y = n; y < n + s; ++y) {
      const N = this._circumference(y, o), w = t[y], S = {
        x: u + this.offsetX,
        y: f + this.offsetY,
        startAngle: _,
        endAngle: _ + N,
        circumference: N,
        outerRadius: v,
        innerRadius: h
      };
      E && (S.options = b || this.resolveDataElementOptions(y, w.active ? "active" : i)), _ += N, this.updateElement(w, y, S, i);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, n = t.data;
    let s = 0, i;
    for (i = 0; i < n.length; i++) {
      const o = t._parsed[i];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(i) && !n[i].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? Le * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, s = this.chart, i = s.data.labels || [], o = gd(n._parsed[t], s.options.locale);
    return {
      label: i[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const s = this.chart;
    let i, o, r, a, l;
    if (!t) {
      for (i = 0, o = s.data.datasets.length; i < o; ++i)
        if (s.isDatasetVisible(i)) {
          r = s.getDatasetMeta(i), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (i = 0, o = t.length; i < o; ++i)
      l = a.resolveDataElementOptions(i), l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let s = 0, i = t.length; s < i; ++s) {
      const o = this.resolveDataElementOptions(s);
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (n += this._getRingWeight(s));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(be(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
se(zs, "id", "doughnut"), se(zs, "defaults", {
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
}), se(zs, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), se(zs, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: s, color: i } } = t.legend.options;
            return n.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: i,
                lineWidth: l.borderWidth,
                pointStyle: s,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, s) {
        s.chart.toggleDataVisibility(n.index), s.chart.update();
      }
    }
  }
});
function Fn() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Ya {
  constructor(t) {
    se(this, "options");
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
    Object.assign(Ya.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Fn();
  }
  parse() {
    return Fn();
  }
  format() {
    return Fn();
  }
  add() {
    return Fn();
  }
  diff() {
    return Fn();
  }
  startOf() {
    return Fn();
  }
  endOf() {
    return Fn();
  }
}
var jy = {
  _date: Ya
};
function Hy(e, t, n, s) {
  const { controller: i, data: o, _sorted: r } = e, a = i._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Rv : Gr;
    if (s) {
      if (i._sharedOptions) {
        const c = o[0], u = typeof c.getRange == "function" && c.getRange(t);
        if (u) {
          const f = l(o, t, n - u), d = l(o, t, n + u);
          return {
            lo: f.lo,
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
function Di(e, t, n, s, i) {
  const o = e.getSortedVisibleDatasetMetas(), r = n[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: u } = o[a], { lo: f, hi: d } = Hy(o[a], t, r, i);
    for (let h = f; h <= d; ++h) {
      const v = u[h];
      v.skip || s(v, c, h);
    }
  }
}
function Wy(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(s, i) {
    const o = t ? Math.abs(s.x - i.x) : 0, r = n ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function pr(e, t, n, s, i) {
  const o = [];
  return !i && !e.isPointInArea(t) || Di(e, n, t, function(a, l, c) {
    !i && !bd(a, e.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Uy(e, t, n, s) {
  let i = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: u } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: f } = cd(r, {
      x: t.x,
      y: t.y
    });
    xo(f, c, u) && i.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Di(e, n, t, o), i;
}
function By(e, t, n, s, i, o) {
  let r = [];
  const a = Wy(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, f, d) {
    const h = u.inRange(t.x, t.y, i);
    if (s && !h)
      return;
    const v = u.getCenterPoint(i);
    if (!(!!o || e.isPointInArea(v)) && !h)
      return;
    const E = a(t, v);
    E < l ? (r = [
      {
        element: u,
        datasetIndex: f,
        index: d
      }
    ], l = E) : E === l && r.push({
      element: u,
      datasetIndex: f,
      index: d
    });
  }
  return Di(e, n, t, c), r;
}
function gr(e, t, n, s, i, o) {
  return !o && !e.isPointInArea(t) ? [] : n === "r" && !s ? Uy(e, t, n, i) : By(e, t, n, s, i, o);
}
function jc(e, t, n, s, i) {
  const o = [], r = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Di(e, n, t, (l, c, u) => {
    l[r] && l[r](t[n], i) && (o.push({
      element: l,
      datasetIndex: c,
      index: u
    }), a = a || l.inRange(t.x, t.y, i));
  }), s && !a ? [] : o;
}
var zy = {
  evaluateInteractionItems: Di,
  modes: {
    index(e, t, n, s) {
      const i = jn(t, e), o = n.axis || "x", r = n.includeInvisible || !1, a = n.intersect ? pr(e, i, o, s, r) : gr(e, i, o, !1, s, r), l = [];
      return a.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = a[0].index, f = c.data[u];
        f && !f.skip && l.push({
          element: f,
          datasetIndex: c.index,
          index: u
        });
      }), l) : [];
    },
    dataset(e, t, n, s) {
      const i = jn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      let a = n.intersect ? pr(e, i, o, s, r) : gr(e, i, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = e.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({
            element: c[u],
            datasetIndex: l,
            index: u
          });
      }
      return a;
    },
    point(e, t, n, s) {
      const i = jn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return pr(e, i, o, s, r);
    },
    nearest(e, t, n, s) {
      const i = jn(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return gr(e, i, o, n.intersect, s, r);
    },
    x(e, t, n, s) {
      const i = jn(t, e);
      return jc(e, i, "x", n.intersect, s);
    },
    y(e, t, n, s) {
      const i = jn(t, e);
      return jc(e, i, "y", n.intersect, s);
    }
  }
};
const Td = [
  "left",
  "top",
  "right",
  "bottom"
];
function Fs(e, t) {
  return e.filter((n) => n.pos === t);
}
function Hc(e, t) {
  return e.filter((n) => Td.indexOf(n.pos) === -1 && n.box.axis === t);
}
function Vs(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n, o = t ? n : s;
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
  });
}
function Yy(e) {
  const t = [];
  let n, s, i, o, r, a;
  for (n = 0, s = (e || []).length; n < s; ++n)
    i = e[n], { position: o, options: { stack: r, stackWeight: a = 1 } } = i, t.push({
      index: n,
      box: i,
      pos: o,
      horizontal: i.isHorizontal(),
      weight: i.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Ky(e) {
  const t = {};
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: o } = n;
    if (!s || !Td.includes(i))
      continue;
    const r = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Gy(e, t) {
  const n = Ky(e), { vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = n[a.stack], u = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = u ? u * s : l && t.availableWidth, a.height = i) : (a.width = s, a.height = u ? u * i : l && t.availableHeight);
  }
  return n;
}
function Xy(e) {
  const t = Yy(e), n = Vs(t.filter((c) => c.box.fullSize), !0), s = Vs(Fs(t, "left"), !0), i = Vs(Fs(t, "right")), o = Vs(Fs(t, "top"), !0), r = Vs(Fs(t, "bottom")), a = Hc(t, "x"), l = Hc(t, "y");
  return {
    fullSize: n,
    leftAndTop: s.concat(o),
    rightAndBottom: i.concat(l).concat(r).concat(a),
    chartArea: Fs(t, "chartArea"),
    vertical: s.concat(i).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Wc(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s]);
}
function Dd(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function qy(e, t, n, s) {
  const { pos: i, box: o } = n, r = e.maxPadding;
  if (!fe(i)) {
    n.size && (e[i] -= n.size);
    const f = s[n.stack] || {
      size: 0,
      count: 1
    };
    f.size = Math.max(f.size, n.horizontal ? o.height : o.width), n.size = f.size / f.count, e[i] += n.size;
  }
  o.getPadding && Dd(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Wc(r, e, "left", "right")), l = Math.max(0, t.outerHeight - Wc(r, e, "top", "bottom")), c = a !== e.w, u = l !== e.h;
  return e.w = a, e.h = l, n.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function Jy(e) {
  const t = e.maxPadding;
  function n(s) {
    const i = Math.max(t[s] - e[s], 0);
    return e[s] += i, i;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function Qy(e, t) {
  const n = t.maxPadding;
  function s(i) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return i.forEach((r) => {
      o[r] = Math.max(t[r], n[r]);
    }), o;
  }
  return s(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ys(e, t, n, s) {
  const i = [];
  let o, r, a, l, c, u;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Qy(a.horizontal, t));
    const { same: f, other: d } = qy(t, n, a, s);
    c |= f && i.length, u = u || d, l.fullSize || i.push(a);
  }
  return c && Ys(i, t, n, s) || u;
}
function Hi(e, t, n, s, i) {
  e.top = n, e.left = t, e.right = t + s, e.bottom = n + i, e.width = s, e.height = i;
}
function Uc(e, t, n, s) {
  const i = n.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = s[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const f = t.w * u, d = c.size || l.height;
      vo(c.start) && (r = c.start), l.fullSize ? Hi(l, i.left, r, n.outerWidth - i.right - i.left, d) : Hi(l, t.left + c.placed, r, f, d), c.start = r, c.placed += f, r = l.bottom;
    } else {
      const f = t.h * u, d = c.size || l.width;
      vo(c.start) && (o = c.start), l.fullSize ? Hi(l, o, i.top, d, n.outerHeight - i.bottom - i.top) : Hi(l, o, t.top + c.placed, d, f), c.start = o, c.placed += f, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var En = {
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
  update(e, t, n, s) {
    if (!e)
      return;
    const i = At(e.options.layout.padding), o = Math.max(t - i.width, 0), r = Math.max(n - i.height, 0), a = Xy(e.boxes), l = a.vertical, c = a.horizontal;
    _e(e.boxes, (b) => {
      typeof b.beforeLayout == "function" && b.beforeLayout();
    });
    const u = l.reduce((b, E) => E.box.options && E.box.options.display === !1 ? b : b + 1, 0) || 1, f = Object.freeze({
      outerWidth: t,
      outerHeight: n,
      padding: i,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / u,
      hBoxMaxHeight: r / 2
    }), d = Object.assign({}, i);
    Dd(d, At(s));
    const h = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: i.left,
      y: i.top
    }, i), v = Gy(l.concat(c), f);
    Ys(a.fullSize, h, f, v), Ys(l, h, f, v), Ys(c, h, f, v) && Ys(l, h, f, v), Jy(h), Uc(a.leftAndTop, h, f, v), h.x += h.w, h.y += h.h, Uc(a.rightAndBottom, h, f, v), e.chartArea = {
      left: h.left,
      top: h.top,
      right: h.left + h.w,
      bottom: h.top + h.h,
      height: h.h,
      width: h.w
    }, _e(a.chartArea, (b) => {
      const E = b.box;
      Object.assign(E, e.chartArea), E.update(h.w, h.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Ad {
  acquireContext(t, n) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, s) {
  }
  removeEventListener(t, n, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, s, i) {
    return n = Math.max(0, n || t.width), s = s || t.height, {
      width: n,
      height: Math.max(0, i ? Math.floor(n / i) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Zy extends Ad {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const no = "$chartjs", eE = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Bc = (e) => e === null || e === "";
function tE(e, t) {
  const n = e.style, s = e.getAttribute("height"), i = e.getAttribute("width");
  if (e[no] = {
    initial: {
      height: s,
      width: i,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Bc(i)) {
    const o = Lc(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (Bc(s))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = Lc(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const kd = xy ? {
  passive: !0
} : !1;
function nE(e, t, n) {
  e && e.addEventListener(t, n, kd);
}
function sE(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, kd);
}
function iE(e, t) {
  const n = eE[e.type] || e.type, { x: s, y: i } = jn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null
  };
}
function wo(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function oE(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || wo(a.addedNodes, s), r = r && !wo(a.removedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
function rE(e, t, n) {
  const s = e.canvas, i = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || wo(a.removedNodes, s), r = r && !wo(a.addedNodes, s);
    r && n();
  });
  return i.observe(document, {
    childList: !0,
    subtree: !0
  }), i;
}
const yi = /* @__PURE__ */ new Map();
let zc = 0;
function Cd() {
  const e = window.devicePixelRatio;
  e !== zc && (zc = e, yi.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function aE(e, t) {
  yi.size || window.addEventListener("resize", Cd), yi.set(e, t);
}
function lE(e) {
  yi.delete(e), yi.size || window.removeEventListener("resize", Cd);
}
function cE(e, t, n) {
  const s = e.canvas, i = s && za(s);
  if (!i)
    return;
  const o = dd((a, l) => {
    const c = i.clientWidth;
    n(a, l), c < i.clientWidth && n();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || o(c, u);
  });
  return r.observe(i), aE(e, o), r;
}
function _r(e, t, n) {
  n && n.disconnect(), t === "resize" && lE(e);
}
function uE(e, t, n) {
  const s = e.canvas, i = dd((o) => {
    e.ctx !== null && n(iE(o, e));
  }, e);
  return nE(s, t, i), i;
}
class fE extends Ad {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (tE(t, n), s) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[no])
      return !1;
    const s = n[no].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      ft(r) ? n.removeAttribute(o) : n.setAttribute(o, r);
    });
    const i = s.style || {};
    return Object.keys(i).forEach((o) => {
      n.style[o] = i[o];
    }), n.width = n.width, delete n[no], !0;
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}), r = {
      attach: oE,
      detach: rE,
      resize: cE
    }[n] || uE;
    i[n] = r(t, n, s);
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}), i = s[n];
    if (!i)
      return;
    ({
      attach: _r,
      detach: _r,
      resize: _r
    }[n] || sE)(t, n, i), s[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, s, i) {
    return Ey(t, n, s, i);
  }
  isAttached(t) {
    const n = t && za(t);
    return !!(n && n.isConnected);
  }
}
function dE(e) {
  return !Ba() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? Zy : fE;
}
var Gi;
let Ai = (Gi = class {
  constructor() {
    se(this, "x");
    se(this, "y");
    se(this, "active", !1);
    se(this, "options");
    se(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: s
    };
  }
  hasValue() {
    return Eo(this.x) && Eo(this.y);
  }
  getProps(t, n) {
    const s = this.$animations;
    if (!n || !s)
      return this;
    const i = {};
    return t.forEach((o) => {
      i[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), i;
  }
}, se(Gi, "defaults", {}), se(Gi, "defaultRoutes"), Gi);
function hE(e, t) {
  const n = e.options.ticks, s = pE(e), i = Math.min(n.maxTicksLimit || s, s), o = n.major.enabled ? _E(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > i)
    return mE(t, c, o, r / i), c;
  const u = gE(o, t, i);
  if (r > 0) {
    let f, d;
    const h = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Wi(t, c, u, ft(h) ? 0 : a - h, a), f = 0, d = r - 1; f < d; f++)
      Wi(t, c, u, o[f], o[f + 1]);
    return Wi(t, c, u, l, ft(h) ? t.length : l + h), c;
  }
  return Wi(t, c, u), c;
}
function pE(e) {
  const t = e.options.offset, n = e._tickSize(), s = e._length / n + (t ? 0 : 1), i = e._maxLength / n;
  return Math.floor(Math.min(s, i));
}
function gE(e, t, n) {
  const s = bE(e), i = t.length / n;
  if (!s)
    return Math.max(i, 1);
  const o = Mv(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > i)
      return l;
  }
  return Math.max(i, 1);
}
function _E(e) {
  const t = [];
  let n, s;
  for (n = 0, s = e.length; n < s; n++)
    e[n].major && t.push(n);
  return t;
}
function mE(e, t, n, s) {
  let i = 0, o = n[0], r;
  for (s = Math.ceil(s), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, o = n[i * s]);
}
function Wi(e, t, n, s, i) {
  const o = be(s, 0), r = Math.min(be(i, e.length), e.length);
  let a = 0, l, c, u;
  for (n = Math.ceil(n), i && (l = i - s, n = l / Math.floor(l / n)), u = o; u < 0; )
    a++, u = Math.round(o + a * n);
  for (c = Math.max(o, 0); c < r; c++)
    c === u && (t.push(e[c]), a++, u = Math.round(o + a * n));
}
function bE(e) {
  const t = e.length;
  let n, s;
  if (t < 2)
    return !1;
  for (s = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== s)
      return !1;
  return s;
}
const vE = (e) => e === "left" ? "right" : e === "right" ? "left" : e, Yc = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n, Kc = (e, t) => Math.min(t || e, e);
function Gc(e, t) {
  const n = [], s = e.length / t, i = e.length;
  let o = 0;
  for (; o < i; o += s)
    n.push(e[Math.floor(o)]);
  return n;
}
function yE(e, t, n) {
  const s = e.ticks.length, i = Math.min(t, s - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(i), c;
  if (!(n && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2, l += i < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function EE(e, t) {
  _e(e, (n) => {
    const s = n.gc, i = s.length / 2;
    let o;
    if (i > t) {
      for (o = 0; o < i; ++o)
        delete n.data[s[o]];
      s.splice(0, i);
    }
  });
}
function $s(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Xc(e, t) {
  if (!e.display)
    return 0;
  const n = ut(e.font, t), s = At(e.padding);
  return (Ue(e.text) ? e.text.length : 1) * n.lineHeight + s.height;
}
function xE(e, t) {
  return Ds(e, {
    scale: t,
    type: "scale"
  });
}
function OE(e, t, n) {
  return Ds(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function NE(e, t, n) {
  let s = hd(e);
  return (n && t !== "right" || !n && t === "right") && (s = vE(s)), s;
}
function wE(e, t, n, s) {
  const { top: i, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: u } = l;
  let f = 0, d, h, v;
  const b = r - i, E = a - o;
  if (e.isHorizontal()) {
    if (h = pt(s, o, a), fe(n)) {
      const _ = Object.keys(n)[0], y = n[_];
      v = u[_].getPixelForValue(y) + b - t;
    } else n === "center" ? v = (c.bottom + c.top) / 2 + b - t : v = Yc(e, n, t);
    d = a - o;
  } else {
    if (fe(n)) {
      const _ = Object.keys(n)[0], y = n[_];
      h = u[_].getPixelForValue(y) - E + t;
    } else n === "center" ? h = (c.left + c.right) / 2 - E + t : h = Yc(e, n, t);
    v = pt(s, r, i), f = n === "left" ? -Ve : Ve;
  }
  return {
    titleX: h,
    titleY: v,
    maxWidth: d,
    rotation: f
  };
}
class Yo extends Ai {
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
    let { _userMin: t, _userMax: n, _suggestedMin: s, _suggestedMax: i } = this;
    return t = Lt(t, Number.POSITIVE_INFINITY), n = Lt(n, Number.NEGATIVE_INFINITY), s = Lt(s, Number.POSITIVE_INFINITY), i = Lt(i, Number.NEGATIVE_INFINITY), {
      min: Lt(t, s),
      max: Lt(n, i),
      minDefined: an(t),
      maxDefined: an(n)
    };
  }
  getMinMax(t) {
    let { min: n, max: s, minDefined: i, maxDefined: o } = this.getUserBounds(), r;
    if (i && o)
      return {
        min: n,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), i || (n = Math.min(n, r.min)), o || (s = Math.max(s, r.max));
    return n = o && n > s ? s : n, s = i && n > s ? n : s, {
      min: Lt(n, Lt(s, n)),
      max: Lt(s, Lt(n, s))
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
    xe(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, n, s) {
    const { beginAtZero: i, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = ry(this, o, i), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Gc(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = hE(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, s;
    this.isHorizontal() ? (n = this.left, s = this.right) : (n = this.top, s = this.bottom, t = !t), this._startPixel = n, this._endPixel = s, this._reversePixels = t, this._length = s - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    xe(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    xe(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    xe(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), xe(this.options[t], [
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
    xe(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let s, i, o;
    for (s = 0, i = t.length; s < i; s++)
      o = t[s], o.label = xe(n.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    xe(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    xe(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, n = t.ticks, s = Kc(this.ticks.length, t.ticks.maxTicksLimit), i = n.minRotation || 0, o = n.maxRotation;
    let r = i, a, l, c;
    if (!this._isVisible() || !n.display || i >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(), f = u.widest.width, d = u.highest.height, h = Et(this.chart.width - f, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : h / (s - 1), f + 6 > a && (a = h / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - $s(t.grid) - n.padding - Xc(t.title, this.chart.options.font), c = Math.sqrt(f * f + d * d), r = Lv(Math.min(Math.asin(Et((u.highest.height + 6) / a, -1, 1)), Math.asin(Et(l / c, -1, 1)) - Math.asin(Et(d / c, -1, 1)))), r = Math.max(i, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    xe(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    xe(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: s, title: i, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Xc(i, n.options.font);
      if (a ? (t.width = this.maxWidth, t.height = $s(o) + l) : (t.height = this.maxHeight, t.width = $s(o) + l), s.display && this.ticks.length) {
        const { first: c, last: u, widest: f, highest: d } = this._getLabelSizes(), h = s.padding * 2, v = Wn(this.labelRotation), b = Math.cos(v), E = Math.sin(v);
        if (a) {
          const _ = s.mirror ? 0 : E * f.width + b * d.height;
          t.height = Math.min(this.maxHeight, t.height + _ + h);
        } else {
          const _ = s.mirror ? 0 : b * f.width + E * d.height;
          t.width = Math.min(this.maxWidth, t.width + _ + h);
        }
        this._calculatePadding(c, u, E, b);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, n, s, i) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, h = 0;
      l ? c ? (d = i * t.width, h = s * n.height) : (d = s * t.height, h = i * n.width) : o === "start" ? h = n.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, h = n.width / 2), this.paddingLeft = Math.max((d - u + r) * this.width / (this.width - u), 0), this.paddingRight = Math.max((h - f + r) * this.width / (this.width - f), 0);
    } else {
      let u = n.height / 2, f = t.height / 2;
      o === "start" ? (u = 0, f = t.height) : o === "end" && (u = n.height, f = 0), this.paddingTop = u + r, this.paddingBottom = f + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    xe(this.options.afterFit, [
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
    let n, s;
    for (n = 0, s = t.length; n < s; n++)
      ft(t[n].label) && (t.splice(n, 1), s--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let s = this.ticks;
      n < s.length && (s = Gc(s, n)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, n, s) {
    const { ctx: i, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(n / Kc(n, s));
    let c = 0, u = 0, f, d, h, v, b, E, _, y, N, w, S;
    for (f = 0; f < n; f += l) {
      if (v = t[f].label, b = this._resolveTickFontOptions(f), i.font = E = b.string, _ = o[E] = o[E] || {
        data: {},
        gc: []
      }, y = b.lineHeight, N = w = 0, !ft(v) && !Ue(v))
        N = Tc(i, _.data, _.gc, N, v), w = y;
      else if (Ue(v))
        for (d = 0, h = v.length; d < h; ++d)
          S = v[d], !ft(S) && !Ue(S) && (N = Tc(i, _.data, _.gc, N, S), w += y);
      r.push(N), a.push(w), c = Math.max(N, c), u = Math.max(w, u);
    }
    EE(o, n);
    const L = r.indexOf(c), A = a.indexOf(u), F = (W) => ({
      width: r[W] || 0,
      height: a[W] || 0
    });
    return {
      first: F(0),
      last: F(n - 1),
      widest: F(L),
      highest: F(A),
      widths: r,
      heights: a
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
    return Pv(this._alignToPixels ? Rn(this.chart, n, 0) : n);
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
      const s = n[t];
      return s.$context || (s.$context = OE(this.getContext(), t, s));
    }
    return this.$context || (this.$context = xE(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, n = Wn(this.labelRotation), s = Math.abs(Math.cos(n)), i = Math.abs(Math.sin(n)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * i ? a / s : l / i : l * i < a * s ? l / s : a / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis, s = this.chart, i = this.options, { grid: o, position: r, border: a } = i, l = o.offset, c = this.isHorizontal(), f = this.ticks.length + (l ? 1 : 0), d = $s(o), h = [], v = a.setContext(this.getContext()), b = v.display ? v.width : 0, E = b / 2, _ = function(Z) {
      return Rn(s, Z, b);
    };
    let y, N, w, S, L, A, F, W, U, q, B, ge;
    if (r === "top")
      y = _(this.bottom), A = this.bottom - d, W = y - E, q = _(t.top) + E, ge = t.bottom;
    else if (r === "bottom")
      y = _(this.top), q = t.top, ge = _(t.bottom) - E, A = y + E, W = this.top + d;
    else if (r === "left")
      y = _(this.right), L = this.right - d, F = y - E, U = _(t.left) + E, B = t.right;
    else if (r === "right")
      y = _(this.left), U = t.left, B = _(t.right) - E, L = y + E, F = this.left + d;
    else if (n === "x") {
      if (r === "center")
        y = _((t.top + t.bottom) / 2 + 0.5);
      else if (fe(r)) {
        const Z = Object.keys(r)[0], Y = r[Z];
        y = _(this.chart.scales[Z].getPixelForValue(Y));
      }
      q = t.top, ge = t.bottom, A = y + E, W = A + d;
    } else if (n === "y") {
      if (r === "center")
        y = _((t.left + t.right) / 2);
      else if (fe(r)) {
        const Z = Object.keys(r)[0], Y = r[Z];
        y = _(this.chart.scales[Z].getPixelForValue(Y));
      }
      L = y - E, F = L - d, U = t.left, B = t.right;
    }
    const ke = be(i.ticks.maxTicksLimit, f), te = Math.max(1, Math.ceil(f / ke));
    for (N = 0; N < f; N += te) {
      const Z = this.getContext(N), Y = o.setContext(Z), G = a.setContext(Z), de = Y.lineWidth, Ce = Y.color, ze = G.dash || [], We = G.dashOffset, je = Y.tickWidth, qe = Y.tickColor, xt = Y.tickBorderDash || [], bt = Y.tickBorderDashOffset;
      w = yE(this, N, l), w !== void 0 && (S = Rn(s, w, de), c ? L = F = U = B = S : A = W = q = ge = S, h.push({
        tx1: L,
        ty1: A,
        tx2: F,
        ty2: W,
        x1: U,
        y1: q,
        x2: B,
        y2: ge,
        width: de,
        color: Ce,
        borderDash: ze,
        borderDashOffset: We,
        tickWidth: je,
        tickColor: qe,
        tickBorderDash: xt,
        tickBorderDashOffset: bt
      }));
    }
    return this._ticksLength = f, this._borderValue = y, h;
  }
  _computeLabelItems(t) {
    const n = this.axis, s = this.options, { position: i, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: u, mirror: f } = o, d = $s(s.grid), h = d + u, v = f ? -u : h, b = -Wn(this.labelRotation), E = [];
    let _, y, N, w, S, L, A, F, W, U, q, B, ge = "middle";
    if (i === "top")
      L = this.bottom - v, A = this._getXAxisLabelAlignment();
    else if (i === "bottom")
      L = this.top + v, A = this._getXAxisLabelAlignment();
    else if (i === "left") {
      const te = this._getYAxisLabelAlignment(d);
      A = te.textAlign, S = te.x;
    } else if (i === "right") {
      const te = this._getYAxisLabelAlignment(d);
      A = te.textAlign, S = te.x;
    } else if (n === "x") {
      if (i === "center")
        L = (t.top + t.bottom) / 2 + h;
      else if (fe(i)) {
        const te = Object.keys(i)[0], Z = i[te];
        L = this.chart.scales[te].getPixelForValue(Z) + h;
      }
      A = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center")
        S = (t.left + t.right) / 2 - h;
      else if (fe(i)) {
        const te = Object.keys(i)[0], Z = i[te];
        S = this.chart.scales[te].getPixelForValue(Z);
      }
      A = this._getYAxisLabelAlignment(d).textAlign;
    }
    n === "y" && (l === "start" ? ge = "top" : l === "end" && (ge = "bottom"));
    const ke = this._getLabelSizes();
    for (_ = 0, y = a.length; _ < y; ++_) {
      N = a[_], w = N.label;
      const te = o.setContext(this.getContext(_));
      F = this.getPixelForTick(_) + o.labelOffset, W = this._resolveTickFontOptions(_), U = W.lineHeight, q = Ue(w) ? w.length : 1;
      const Z = q / 2, Y = te.color, G = te.textStrokeColor, de = te.textStrokeWidth;
      let Ce = A;
      r ? (S = F, A === "inner" && (_ === y - 1 ? Ce = this.options.reverse ? "left" : "right" : _ === 0 ? Ce = this.options.reverse ? "right" : "left" : Ce = "center"), i === "top" ? c === "near" || b !== 0 ? B = -q * U + U / 2 : c === "center" ? B = -ke.highest.height / 2 - Z * U + U : B = -ke.highest.height + U / 2 : c === "near" || b !== 0 ? B = U / 2 : c === "center" ? B = ke.highest.height / 2 - Z * U : B = ke.highest.height - q * U, f && (B *= -1), b !== 0 && !te.showLabelBackdrop && (S += U / 2 * Math.sin(b))) : (L = F, B = (1 - q) * U / 2);
      let ze;
      if (te.showLabelBackdrop) {
        const We = At(te.backdropPadding), je = ke.heights[_], qe = ke.widths[_];
        let xt = B - We.top, bt = 0 - We.left;
        switch (ge) {
          case "middle":
            xt -= je / 2;
            break;
          case "bottom":
            xt -= je;
            break;
        }
        switch (A) {
          case "center":
            bt -= qe / 2;
            break;
          case "right":
            bt -= qe;
            break;
          case "inner":
            _ === y - 1 ? bt -= qe : _ > 0 && (bt -= qe / 2);
            break;
        }
        ze = {
          left: bt,
          top: xt,
          width: qe + We.width,
          height: je + We.height,
          color: te.backdropColor
        };
      }
      E.push({
        label: w,
        font: W,
        textOffset: B,
        options: {
          rotation: b,
          color: Y,
          strokeColor: G,
          strokeWidth: de,
          textAlign: Ce,
          textBaseline: ge,
          translation: [
            S,
            L
          ],
          backdrop: ze
        }
      });
    }
    return E;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-Wn(this.labelRotation))
      return t === "top" ? "left" : "right";
    let i = "center";
    return n.align === "start" ? i = "left" : n.align === "end" ? i = "right" : n.align === "inner" && (i = "inner"), i;
  }
  _getYAxisLabelAlignment(t) {
    const { position: n, ticks: { crossAlign: s, mirror: i, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, u;
    return n === "left" ? i ? (u = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", u += l / 2) : (c = "right", u += l)) : (u = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", u -= l / 2) : (c = "left", u = this.left)) : n === "right" ? i ? (u = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", u -= l / 2) : (c = "left", u -= l)) : (u = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", u += l / 2) : (c = "right", u = this.right)) : c = "right", {
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
    const { ctx: t, options: { backgroundColor: n }, left: s, top: i, width: o, height: r } = this;
    n && (t.save(), t.fillStyle = n, t.fillRect(s, i, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display)
      return 0;
    const i = this.ticks.findIndex((o) => o.value === t);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid, s = this.ctx, i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, u) => {
      !u.width || !u.color || (s.save(), s.lineWidth = u.width, s.strokeStyle = u.color, s.setLineDash(u.borderDash || []), s.lineDashOffset = u.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (n.display)
      for (o = 0, r = i.length; o < r; ++o) {
        const l = i[o];
        n.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), n.drawTicks && a({
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
    const { chart: t, ctx: n, options: { border: s, grid: i } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = i.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, u, f, d;
    this.isHorizontal() ? (c = Rn(t, this.left, r) - r / 2, u = Rn(t, this.right, a) + a / 2, f = d = l) : (f = Rn(t, this.top, r) - r / 2, d = Rn(t, this.bottom, a) + a / 2, c = u = l), n.save(), n.lineWidth = o.width, n.strokeStyle = o.color, n.beginPath(), n.moveTo(c, f), n.lineTo(u, d), n.stroke(), n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, i = this._computeLabelArea();
    i && Va(s, i);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, u = r.textOffset;
      Oo(s, c, 0, u, l, a);
    }
    i && $a(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: s, reverse: i } } = this;
    if (!s.display)
      return;
    const o = ut(s.font), r = At(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || fe(n) ? (l += r.bottom, Ue(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: u, maxWidth: f, rotation: d } = wE(this, l, n, a);
    Oo(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: f,
      rotation: d,
      textAlign: NE(a, n, i),
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
    const t = this.options, n = t.ticks && t.ticks.z || 0, s = be(t.grid && t.grid.z, -1), i = be(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Yo.prototype.draw ? [
      {
        z: n,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: i,
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
    const n = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", i = [];
    let o, r;
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o];
      a[s] === this.id && (!t || a.type === t) && i.push(a);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return ut(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ui {
  constructor(t, n, s) {
    this.type = t, this.scope = n, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let s;
    DE(n) && (s = this.register(n));
    const i = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in i || (i[o] = t, SE(t, r, s), this.override && De.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, s = t.id, i = this.scope;
    s in n && delete n[s], i && s in De[i] && (delete De[i][s], this.override && delete ns[s]);
  }
}
function SE(e, t, n) {
  const s = bi(/* @__PURE__ */ Object.create(null), [
    n ? De.get(n) : {},
    De.get(t),
    e.defaults
  ]);
  De.set(t, s), e.defaultRoutes && TE(t, e.defaultRoutes), e.descriptors && De.describe(t, e.descriptors);
}
function TE(e, t) {
  Object.keys(t).forEach((n) => {
    const s = n.split("."), i = s.pop(), o = [
      e
    ].concat(s).join("."), r = t[n].split("."), a = r.pop(), l = r.join(".");
    De.route(o, i, l, a);
  });
}
function DE(e) {
  return "id" in e && "defaults" in e;
}
class AE {
  constructor() {
    this.controllers = new Ui(oi, "datasets", !0), this.elements = new Ui(Ai, "elements"), this.plugins = new Ui(Object, "plugins"), this.scales = new Ui(Yo, "scales"), this._typedRegistries = [
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
  _each(t, n, s) {
    [
      ...n
    ].forEach((i) => {
      const o = s || this._getRegistryForType(i);
      s || o.isForType(i) || o === this.plugins && i.id ? this._exec(t, o, i) : _e(i, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, n, s) {
    const i = Ra(t);
    xe(s["before" + i], [], s), n[t](s), xe(s["after" + i], [], s);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const s = this._typedRegistries[n];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, n, s) {
    const i = n.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return i;
  }
}
var Rt = /* @__PURE__ */ new AE();
class kE {
  constructor() {
    this._init = [];
  }
  notify(t, n, s, i) {
    n === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = i ? this._descriptors(t).filter(i) : this._descriptors(t), r = this._notify(o, t, n, s);
    return n === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, n, s, i) {
    i = i || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], l = [
        n,
        i,
        o.options
      ];
      if (xe(a, l, r) === !1 && i.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    ft(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const s = t && t.config, i = be(s.options && s.options.plugins, {}), o = CE(s);
    return i === !1 && !n ? [] : LE(t, o, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], s = this._cache, i = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(n, s), t, "stop"), this._notify(i(s, n), t, "start");
  }
}
function CE(e) {
  const t = {}, n = [], s = Object.keys(Rt.plugins.items);
  for (let o = 0; o < s.length; o++)
    n.push(Rt.getPlugin(s[o]));
  const i = e.plugins || [];
  for (let o = 0; o < i.length; o++) {
    const r = i[o];
    n.indexOf(r) === -1 && (n.push(r), t[r.id] = !0);
  }
  return {
    plugins: n,
    localIds: t
  };
}
function ME(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function LE(e, { plugins: t, localIds: n }, s, i) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = ME(s[l], i);
    c !== null && o.push({
      plugin: a,
      options: IE(e.config, {
        plugin: a,
        local: n[l]
      }, c, r)
    });
  }
  return o;
}
function IE(e, { plugin: t, local: n }, s, i) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(s, o);
  return n && t.defaults && r.push(t.defaults), e.createResolver(r, i, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Jr(e, t) {
  const n = De.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function PE(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function RE(e, t) {
  return e === t ? "_index_" : "_value_";
}
function qc(e) {
  if (e === "x" || e === "y" || e === "r")
    return e;
}
function FE(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function Qr(e, ...t) {
  if (qc(e))
    return e;
  for (const n of t) {
    const s = n.axis || FE(n.position) || e.length > 1 && qc(e[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`);
}
function Jc(e, t, n) {
  if (n[t + "AxisID"] === e)
    return {
      axis: t
    };
}
function VE(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((s) => s.xAxisID === e || s.yAxisID === e);
    if (n.length)
      return Jc(e, "x", n[0]) || Jc(e, "y", n[0]);
  }
  return {};
}
function $E(e, t) {
  const n = ns[e.type] || {
    scales: {}
  }, s = t.scales || {}, i = Jr(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!fe(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Qr(r, a, VE(r, e), De.scales[a.type]), c = RE(l, i), u = n.scales || {};
    o[r] = ti(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      u[l],
      u[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || Jr(a, t), u = (ns[a] || {}).scales || {};
    Object.keys(u).forEach((f) => {
      const d = PE(f, l), h = r[d + "AxisID"] || d;
      o[h] = o[h] || /* @__PURE__ */ Object.create(null), ti(o[h], [
        {
          axis: d
        },
        s[h],
        u[f]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    ti(a, [
      De.scales[a.type],
      De.scale
    ]);
  }), o;
}
function Md(e) {
  const t = e.options || (e.options = {});
  t.plugins = be(t.plugins, {}), t.scales = $E(e, t);
}
function Ld(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function jE(e) {
  return e = e || {}, e.data = Ld(e.data), Md(e), e;
}
const Qc = /* @__PURE__ */ new Map(), Id = /* @__PURE__ */ new Set();
function Bi(e, t) {
  let n = Qc.get(e);
  return n || (n = t(), Qc.set(e, n), Id.add(n)), n;
}
const js = (e, t, n) => {
  const s = vi(t, n);
  s !== void 0 && e.add(s);
};
class HE {
  constructor(t) {
    this._config = jE(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Ld(t);
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
    this.clearCache(), Md(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Bi(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return Bi(`${t}.transition.${n}`, () => [
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
    return Bi(`${t}-${n}`, () => [
      [
        `datasets.${t}.elements.${n}`,
        `datasets.${t}`,
        `elements.${n}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id, s = this.type;
    return Bi(`${s}-plugin-${n}`, () => [
      [
        `plugins.${n}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, n) {
    const s = this._scopeCache;
    let i = s.get(t);
    return (!i || n) && (i = /* @__PURE__ */ new Map(), s.set(t, i)), i;
  }
  getOptionScopes(t, n, s) {
    const { options: i, type: o } = this, r = this._cachedScopes(t, s), a = r.get(n);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    n.forEach((u) => {
      t && (l.add(t), u.forEach((f) => js(l, t, f))), u.forEach((f) => js(l, i, f)), u.forEach((f) => js(l, ns[o] || {}, f)), u.forEach((f) => js(l, De, f)), u.forEach((f) => js(l, Xr, f));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Id.has(n) && r.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      ns[n] || {},
      De.datasets[n] || {},
      {
        type: n
      },
      De,
      Xr
    ];
  }
  resolveNamedOptions(t, n, s, i = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Zc(this._resolverCache, t, i);
    let l = r;
    if (UE(r, n)) {
      o.$shared = !1, s = Tn(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Ns(r, s, c);
    }
    for (const c of n)
      o[c] = l[c];
    return o;
  }
  createResolver(t, n, s = [
    ""
  ], i) {
    const { resolver: o } = Zc(this._resolverCache, t, s);
    return fe(n) ? Ns(o, n, void 0, i) : o;
  }
}
function Zc(e, t, n) {
  let s = e.get(t);
  s || (s = /* @__PURE__ */ new Map(), e.set(t, s));
  const i = n.join();
  let o = s.get(i);
  return o || (o = {
    resolver: Ha(t, n),
    subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(i, o)), o;
}
const WE = (e) => fe(e) && Object.getOwnPropertyNames(e).some((t) => Tn(e[t]));
function UE(e, t) {
  const { isScriptable: n, isIndexable: s } = vd(e);
  for (const i of t) {
    const o = n(i), r = s(i), a = (r || o) && e[i];
    if (o && (Tn(a) || WE(a)) || r && Ue(a))
      return !0;
  }
  return !1;
}
var BE = "4.4.6";
const zE = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function eu(e, t) {
  return e === "top" || e === "bottom" || zE.indexOf(e) === -1 && t === "x";
}
function tu(e, t) {
  return function(n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e];
  };
}
function nu(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), xe(n && n.onComplete, [
    e
  ], t);
}
function YE(e) {
  const t = e.chart, n = t.options.animation;
  xe(n && n.onProgress, [
    e
  ], t);
}
function Pd(e) {
  return Ba() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const so = {}, su = (e) => {
  const t = Pd(e);
  return Object.values(so).filter((n) => n.canvas === t).pop();
};
function KE(e, t, n) {
  const s = Object.keys(e);
  for (const i of s) {
    const o = +i;
    if (o >= t) {
      const r = e[i];
      delete e[i], (n > 0 || o > t) && (e[o + n] = r);
    }
  }
}
function GE(e, t, n, s) {
  return !n || e.type === "mouseout" ? null : s ? t : e;
}
function zi(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function XE(e, t) {
  const { xScale: n, yScale: s } = e;
  return n && s ? {
    left: zi(n, t, "left"),
    right: zi(n, t, "right"),
    top: zi(s, t, "top"),
    bottom: zi(s, t, "bottom")
  } : t;
}
var pn;
let As = (pn = class {
  static register(...t) {
    Rt.add(...t), iu();
  }
  static unregister(...t) {
    Rt.remove(...t), iu();
  }
  constructor(t, n) {
    const s = this.config = new HE(n), i = Pd(t), o = su(i);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || dE(i))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(i, r.aspectRatio), l = a && a.canvas, c = l && l.height, u = l && l.width;
    if (this.id = Nv(), this.ctx = a, this.canvas = l, this.width = u, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new kE(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = jv((f) => this.update(f), r.resizeDelay || 0), this._dataChanges = [], so[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Zt.listen(this, "complete", nu), Zt.listen(this, "progress", YE), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: s, height: i, _aspectRatio: o } = this;
    return ft(t) ? n && o ? o : i ? s / i : null : t;
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
    return Rt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Mc(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Dc(this.canvas, this.ctx), this;
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
    const s = this.options, i = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(i, t, n, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Mc(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), xe(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    _e(n, (s, i) => {
      s.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, s = this.scales, i = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    n && (o = o.concat(Object.keys(n).map((r) => {
      const a = n[r], l = Qr(r, a), c = l === "r", u = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), _e(o, (r) => {
      const a = r.options, l = a.id, c = Qr(l, a), u = be(a.type, r.dtype);
      (a.position === void 0 || eu(a.position, c) !== eu(r.dposition)) && (a.position = r.dposition), i[l] = !0;
      let f = null;
      if (l in s && s[l].type === u)
        f = s[l];
      else {
        const d = Rt.getScale(u);
        f = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), s[f.id] = f;
      }
      f.init(a, t);
    }), _e(i, (r, a) => {
      r || delete s[a];
    }), _e(s, (r) => {
      En.configure(this, r, r.options), En.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, s = t.length;
    if (t.sort((i, o) => i.index - o.index), s > n) {
      for (let i = n; i < s; ++i)
        this._destroyDatasetMeta(i);
      t.splice(n, s - n);
    }
    this._sortedMetasets = t.slice(0).sort(tu("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: n } } = this;
    t.length > n.length && delete this._stacks, t.forEach((s, i) => {
      n.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(i);
    });
  }
  buildOrUpdateControllers() {
    const t = [], n = this.data.datasets;
    let s, i;
    for (this._removeUnreferencedMetasets(), s = 0, i = n.length; s < i; s++) {
      const o = n[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Jr(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = Rt.getController(a), { datasetElementType: c, dataElementType: u } = De.datasets[a];
        Object.assign(l, {
          dataElementType: Rt.getElement(u),
          datasetElementType: c && Rt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    _e(this.data.datasets, (t, n) => {
      this.getDatasetMeta(n).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const s = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), i = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: f } = this.getDatasetMeta(c), d = !i && o.indexOf(f) === -1;
      f.buildOrUpdateElements(d), r = Math.max(+f.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), i || _e(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(tu("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    _e(this.scales, (t) => {
      En.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!bc(n, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: o } of n) {
      const r = s === "_removeElements" ? -o : o;
      KE(t, i, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), i = s(0);
    for (let o = 1; o < n; o++)
      if (!bc(i, s(o)))
        return;
    return Array.from(i).map((o) => o.split(",")).map((o) => ({
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
    En.update(this, this.width, this.height, t);
    const n = this.chartArea, s = n.width <= 0 || n.height <= 0;
    this._layers = [], _e(this.boxes, (i) => {
      s && i.position === "chartArea" || (i.configure && i.configure(), this._layers.push(...i._layers()));
    }, this), this._layers.forEach((i, o) => {
      i._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this._updateDataset(n, Tn(t) ? t({
          datasetIndex: n
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, n) {
    const s = this.getDatasetMeta(t), i = {
      meta: s,
      index: t,
      mode: n,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (s.controller._update(n), i.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", i));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Zt.has(this) ? this.attached && !Zt.running(this) && Zt.start(this) : (this.draw(), nu({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: i } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, i);
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
    const n = this._sortedMetasets, s = [];
    let i, o;
    for (i = 0, o = n.length; i < o; ++i) {
      const r = n[i];
      (!t || r.visible) && s.push(r);
    }
    return s;
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
    const n = this.ctx, s = t._clip, i = !s.disabled, o = XE(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (i && Va(n, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), i && $a(n), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return bd(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, s, i) {
    const o = zy.modes[n];
    return typeof o == "function" ? o(this, t, s, i) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t], s = this._metasets;
    let i = s.filter((o) => o && o._dataset === n).pop();
    return i || (i = {
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
    }, s.push(i)), i;
  }
  getContext() {
    return this.$context || (this.$context = Ds(null, {
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
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const s = this.getDatasetMeta(t);
    s.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, s) {
    const i = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, i);
    vo(n) ? (o.data[n].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? i : void 0));
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
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Dc(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete so[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, n = this.platform, s = (o, r) => {
      n.addEventListener(this, o, r), t[o] = r;
    }, i = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    _e(this.options.events, (o) => s(o, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, n = this.platform, s = (l, c) => {
      n.addEventListener(this, l, c), t[l] = c;
    }, i = (l, c) => {
      t[l] && (n.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      i("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, i("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, n.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    _e(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, _e(this._responsiveListeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, n, s) {
    const i = s ? "set" : "remove";
    let o, r, a, l;
    for (n === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + i + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[i + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !mo(s, n) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, n));
  }
  notifyPlugins(t, n, s) {
    return this._plugins.notify(this, t, n, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, n, s) {
    const i = this.options.hover, o = (l, c) => l.filter((u) => !c.some((f) => u.datasetIndex === f.datasetIndex && u.index === f.index)), r = o(n, t), a = s ? t : o(t, n);
    r.length && this.updateHoverStyle(r, i.mode, !1), a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
  }
  _eventHandler(t, n) {
    const s = {
      event: t,
      replay: n,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, i = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, i) === !1)
      return;
    const o = this._handleEvent(t, n, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, i), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, n, s) {
    const { _active: i = [], options: o } = this, r = n, a = this._getActiveElements(t, i, s, r), l = kv(t), c = GE(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, xe(o.onHover, [
      t,
      a,
      this
    ], this), l && xe(o.onClick, [
      t,
      a,
      this
    ], this));
    const u = !mo(a, i);
    return (u || n) && (this._active = a, this._updateHoverStyles(a, i, n)), this._lastEvent = c, u;
  }
  _getActiveElements(t, n, s, i) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return n;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, i);
  }
}, se(pn, "defaults", De), se(pn, "instances", so), se(pn, "overrides", ns), se(pn, "registry", Rt), se(pn, "version", BE), se(pn, "getChart", su), pn);
function iu() {
  return _e(As.instances, (e) => e._plugins.invalidate());
}
function qE(e, t, n) {
  const { startAngle: s, pixelMargin: i, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = i / a;
  e.beginPath(), e.arc(o, r, a, s - c, n + c), l > i ? (c = i / l, e.arc(o, r, l, n + c, s - c, !0)) : e.arc(o, r, i, n + Ve, s - Ve), e.closePath(), e.clip();
}
function JE(e) {
  return ja(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function QE(e, t, n, s) {
  const i = JE(e.options.borderRadius), o = (n - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (n - Math.min(o, l)) * s / 2;
    return Et(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(i.outerStart),
    outerEnd: a(i.outerEnd),
    innerStart: Et(i.innerStart, 0, r),
    innerEnd: Et(i.innerEnd, 0, r)
  };
}
function fs(e, t, n, s) {
  return {
    x: n + e * Math.cos(t),
    y: s + e * Math.sin(t)
  };
}
function So(e, t, n, s, i, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = t, f = Math.max(t.outerRadius + s + n - c, 0), d = u > 0 ? u + s + n + c : 0;
  let h = 0;
  const v = i - l;
  if (s) {
    const te = u > 0 ? u - s : 0, Z = f > 0 ? f - s : 0, Y = (te + Z) / 2, G = Y !== 0 ? v * Y / (Y + s) : v;
    h = (v - G) / 2;
  }
  const b = Math.max(1e-3, v * f - n / He) / f, E = (v - b) / 2, _ = l + E + h, y = i - E - h, { outerStart: N, outerEnd: w, innerStart: S, innerEnd: L } = QE(t, d, f, y - _), A = f - N, F = f - w, W = _ + N / A, U = y - w / F, q = d + S, B = d + L, ge = _ + S / q, ke = y - L / B;
  if (e.beginPath(), o) {
    const te = (W + U) / 2;
    if (e.arc(r, a, f, W, te), e.arc(r, a, f, te, U), w > 0) {
      const de = fs(F, U, r, a);
      e.arc(de.x, de.y, w, U, y + Ve);
    }
    const Z = fs(B, y, r, a);
    if (e.lineTo(Z.x, Z.y), L > 0) {
      const de = fs(B, ke, r, a);
      e.arc(de.x, de.y, L, y + Ve, ke + Math.PI);
    }
    const Y = (y - L / d + (_ + S / d)) / 2;
    if (e.arc(r, a, d, y - L / d, Y, !0), e.arc(r, a, d, Y, _ + S / d, !0), S > 0) {
      const de = fs(q, ge, r, a);
      e.arc(de.x, de.y, S, ge + Math.PI, _ - Ve);
    }
    const G = fs(A, _, r, a);
    if (e.lineTo(G.x, G.y), N > 0) {
      const de = fs(A, W, r, a);
      e.arc(de.x, de.y, N, _ - Ve, W);
    }
  } else {
    e.moveTo(r, a);
    const te = Math.cos(W) * f + r, Z = Math.sin(W) * f + a;
    e.lineTo(te, Z);
    const Y = Math.cos(U) * f + r, G = Math.sin(U) * f + a;
    e.lineTo(Y, G);
  }
  e.closePath();
}
function ZE(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    So(e, t, n, s, l, i);
    for (let c = 0; c < o; ++c)
      e.fill();
    isNaN(a) || (l = r + (a % Le || Le));
  }
  return So(e, t, n, s, l, i), e.fill(), l;
}
function e0(e, t, n, s, i) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: u, borderDash: f, borderDashOffset: d } = l, h = l.borderAlign === "inner";
  if (!c)
    return;
  e.setLineDash(f || []), e.lineDashOffset = d, h ? (e.lineWidth = c * 2, e.lineJoin = u || "round") : (e.lineWidth = c, e.lineJoin = u || "bevel");
  let v = t.endAngle;
  if (o) {
    So(e, t, n, s, v, i);
    for (let b = 0; b < o; ++b)
      e.stroke();
    isNaN(a) || (v = r + (a % Le || Le));
  }
  h && qE(e, t, v), o || (So(e, t, n, s, v, i), e.stroke());
}
class Un extends Ai {
  constructor(n) {
    super();
    se(this, "circumference");
    se(this, "endAngle");
    se(this, "fullCircles");
    se(this, "innerRadius");
    se(this, "outerRadius");
    se(this, "pixelMargin");
    se(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, n && Object.assign(this, n);
  }
  inRange(n, s, i) {
    const o = this.getProps([
      "x",
      "y"
    ], i), { angle: r, distance: a } = cd(o, {
      x: n,
      y: s
    }), { startAngle: l, endAngle: c, innerRadius: u, outerRadius: f, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), h = (this.options.spacing + this.options.borderWidth) / 2, v = be(d, c - l), b = xo(r, l, c) && l !== c, E = v >= Le || b, _ = Bs(a, u + h, f + h);
    return E && _;
  }
  getCenterPoint(n) {
    const { x: s, y: i, startAngle: o, endAngle: r, innerRadius: a, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], n), { offset: c, spacing: u } = this.options, f = (o + r) / 2, d = (a + l + u + c) / 2;
    return {
      x: s + Math.cos(f) * d,
      y: i + Math.sin(f) * d
    };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: s, circumference: i } = this, o = (s.offset || 0) / 4, r = (s.spacing || 0) / 2, a = s.circular;
    if (this.pixelMargin = s.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > Le ? Math.floor(i / Le) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    n.save();
    const l = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(l) * o, Math.sin(l) * o);
    const c = 1 - Math.sin(Math.min(He, i || 0)), u = o * c;
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, ZE(n, this, u, r, a), e0(n, this, u, r, a), n.restore();
  }
}
se(Un, "id", "arc"), se(Un, "defaults", {
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
}), se(Un, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), se(Un, "descriptors", {
  _scriptable: !0,
  _indexable: (n) => n !== "borderDash"
});
const ou = (e, t) => {
  let { boxHeight: n = t, boxWidth: s = t } = e;
  return e.usePointStyle && (n = Math.min(n, t), s = e.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: n,
    itemHeight: Math.max(t, n)
  };
}, t0 = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class ru extends Ai {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, n, s) {
    this.maxWidth = t, this.maxHeight = n, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = xe(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (n = n.filter((s) => t.filter(s, this.chart.data))), t.sort && (n = n.sort((s, i) => t.sort(s, i, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n;
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, i = ut(s.font), o = i.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = ou(s, o);
    let c, u;
    n.font = i.string, this.isHorizontal() ? (c = this.maxWidth, u = this._fitRows(r, o, a, l) + 10) : (u = this.maxHeight, c = this._fitCols(r, i, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(u, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, n, s, i) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], u = i + a;
    let f = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, h = -u;
    return this.legendItems.forEach((v, b) => {
      const E = s + n / 2 + o.measureText(v.text).width;
      (b === 0 || c[c.length - 1] + E + 2 * a > r) && (f += u, c[c.length - (b > 0 ? 0 : 1)] = 0, h += u, d++), l[b] = {
        left: 0,
        top: h,
        row: d,
        width: E,
        height: i
      }, c[c.length - 1] += E + a;
    }), f;
  }
  _fitCols(t, n, s, i) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], u = r - t;
    let f = a, d = 0, h = 0, v = 0, b = 0;
    return this.legendItems.forEach((E, _) => {
      const { itemWidth: y, itemHeight: N } = n0(s, n, o, E, i);
      _ > 0 && h + N + 2 * a > u && (f += d + a, c.push({
        width: d,
        height: h
      }), v += d + a, b++, d = h = 0), l[_] = {
        left: v,
        top: h,
        col: b,
        width: y,
        height: N
      }, d = Math.max(d, y), h += N + a;
    }), f += d, c.push({
      width: d,
      height: h
    }), f;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: s, labels: { padding: i }, rtl: o } } = this, r = bs(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = pt(s, this.left + i, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row && (a = c.row, l = pt(s, this.left + i, this.right - this.lineWidths[a])), c.top += this.top + t + i, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + i;
    } else {
      let a = 0, l = pt(s, this.top + t + i, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a && (a = c.col, l = pt(s, this.top + t + i, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + i, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + i;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Va(t, this), this._draw(), $a(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: s, ctx: i } = this, { align: o, labels: r } = t, a = De.color, l = bs(t.rtl, this.left, this.width), c = ut(r.font), { padding: u } = r, f = c.size, d = f / 2;
    let h;
    this.drawTitle(), i.textAlign = l.textAlign("left"), i.textBaseline = "middle", i.lineWidth = 0.5, i.font = c.string;
    const { boxWidth: v, boxHeight: b, itemHeight: E } = ou(r, f), _ = function(L, A, F) {
      if (isNaN(v) || v <= 0 || isNaN(b) || b < 0)
        return;
      i.save();
      const W = be(F.lineWidth, 1);
      if (i.fillStyle = be(F.fillStyle, a), i.lineCap = be(F.lineCap, "butt"), i.lineDashOffset = be(F.lineDashOffset, 0), i.lineJoin = be(F.lineJoin, "miter"), i.lineWidth = W, i.strokeStyle = be(F.strokeStyle, a), i.setLineDash(be(F.lineDash, [])), r.usePointStyle) {
        const U = {
          radius: b * Math.SQRT2 / 2,
          pointStyle: F.pointStyle,
          rotation: F.rotation,
          borderWidth: W
        }, q = l.xPlus(L, v / 2), B = A + d;
        md(i, U, q, B, r.pointStyleWidth && v);
      } else {
        const U = A + Math.max((f - b) / 2, 0), q = l.leftForLtr(L, v), B = ii(F.borderRadius);
        i.beginPath(), Object.values(B).some((ge) => ge !== 0) ? qr(i, {
          x: q,
          y: U,
          w: v,
          h: b,
          radius: B
        }) : i.rect(q, U, v, b), i.fill(), W !== 0 && i.stroke();
      }
      i.restore();
    }, y = function(L, A, F) {
      Oo(i, F.text, L, A + E / 2, c, {
        strikethrough: F.hidden,
        textAlign: l.textAlign(F.textAlign)
      });
    }, N = this.isHorizontal(), w = this._computeTitleHeight();
    N ? h = {
      x: pt(o, this.left + u, this.right - s[0]),
      y: this.top + u + w,
      line: 0
    } : h = {
      x: this.left + u,
      y: pt(o, this.top + w + u, this.bottom - n[0].height),
      line: 0
    }, Od(this.ctx, t.textDirection);
    const S = E + u;
    this.legendItems.forEach((L, A) => {
      i.strokeStyle = L.fontColor, i.fillStyle = L.fontColor;
      const F = i.measureText(L.text).width, W = l.textAlign(L.textAlign || (L.textAlign = r.textAlign)), U = v + d + F;
      let q = h.x, B = h.y;
      l.setWidth(this.width), N ? A > 0 && q + U + u > this.right && (B = h.y += S, h.line++, q = h.x = pt(o, this.left + u, this.right - s[h.line])) : A > 0 && B + S > this.bottom && (q = h.x = q + n[h.line].width + u, h.line++, B = h.y = pt(o, this.top + w + u, this.bottom - n[h.line].height));
      const ge = l.x(q);
      if (_(ge, B, L), q = Hv(W, q + v + d, N ? q + U : this.right, t.rtl), y(l.x(q), B, L), N)
        h.x += U + u;
      else if (typeof L.text != "string") {
        const ke = c.lineHeight;
        h.y += Rd(L, ke) + u;
      } else
        h.y += S;
    }), Nd(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, n = t.title, s = ut(n.font), i = At(n.padding);
    if (!n.display)
      return;
    const o = bs(t.rtl, this.left, this.width), r = this.ctx, a = n.position, l = s.size / 2, c = i.top + l;
    let u, f = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), u = this.top + c, f = pt(t.align, f, this.right - d);
    else {
      const v = this.columnSizes.reduce((b, E) => Math.max(b, E.height), 0);
      u = c + pt(t.align, this.top, this.bottom - v - t.labels.padding - this._computeTitleHeight());
    }
    const h = pt(a, f, f + d);
    r.textAlign = o.textAlign(hd(a)), r.textBaseline = "middle", r.strokeStyle = n.color, r.fillStyle = n.color, r.font = s.string, Oo(r, n.text, h, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, n = ut(t.font), s = At(t.padding);
    return t.display ? n.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, n) {
    let s, i, o;
    if (Bs(t, this.left, this.right) && Bs(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (i = o[s], Bs(t, i.left, i.left + i.width) && Bs(n, i.top, i.top + i.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!o0(t.type, n))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem, o = t0(i, s);
      i && !o && xe(n.onLeave, [
        t,
        i,
        this
      ], this), this._hoveredItem = s, s && !o && xe(n.onHover, [
        t,
        s,
        this
      ], this);
    } else s && xe(n.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function n0(e, t, n, s, i) {
  const o = s0(s, e, t, n), r = i0(i, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function s0(e, t, n, s) {
  let i = e.text;
  return i && typeof i != "string" && (i = i.reduce((o, r) => o.length > r.length ? o : r)), t + n.size / 2 + s.measureText(i).width;
}
function i0(e, t, n) {
  let s = e;
  return typeof t.text != "string" && (s = Rd(t, n)), s;
}
function Rd(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function o0(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var Ka = {
  id: "legend",
  _element: ru,
  start(e, t, n) {
    const s = e.legend = new ru({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    En.configure(e, s, n), En.addBox(e, s);
  },
  stop(e) {
    En.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const s = e.legend;
    En.configure(e, s, n), s.options = n;
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
      const s = t.datasetIndex, i = n.chart;
      i.isDatasetVisible(s) ? (i.hide(s), t.hidden = !0) : (i.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets, { labels: { usePointStyle: n, pointStyle: s, textAlign: i, color: o, useBorderRadius: r, borderRadius: a } } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0), u = At(c.borderWidth);
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
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
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
const Ks = {
  average(e) {
    if (!e.length)
      return !1;
    let t, n, s = /* @__PURE__ */ new Set(), i = 0, o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const a = e[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), i += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, l) => a + l) / s.size,
      y: i / o
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let n = t.x, s = t.y, i = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), u = Iv(t, c);
        u < i && (i = u, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      n = l.x, s = l.y;
    }
    return {
      x: n,
      y: s
    };
  }
};
function It(e, t) {
  return t && (Ue(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function en(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function r0(e, t) {
  const { element: n, datasetIndex: s, index: i } = t, o = e.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(i);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(i),
    raw: e.data.datasets[s].data[i],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: i,
    datasetIndex: s,
    element: n
  };
}
function au(e, t) {
  const n = e.chart.ctx, { body: s, footer: i, title: o } = e, { boxWidth: r, boxHeight: a } = t, l = ut(t.bodyFont), c = ut(t.titleFont), u = ut(t.footerFont), f = o.length, d = i.length, h = s.length, v = At(t.padding);
  let b = v.height, E = 0, _ = s.reduce((w, S) => w + S.before.length + S.lines.length + S.after.length, 0);
  if (_ += e.beforeBody.length + e.afterBody.length, f && (b += f * c.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom), _) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    b += h * w + (_ - h) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  d && (b += t.footerMarginTop + d * u.lineHeight + (d - 1) * t.footerSpacing);
  let y = 0;
  const N = function(w) {
    E = Math.max(E, n.measureText(w).width + y);
  };
  return n.save(), n.font = c.string, _e(e.title, N), n.font = l.string, _e(e.beforeBody.concat(e.afterBody), N), y = t.displayColors ? r + 2 + t.boxPadding : 0, _e(s, (w) => {
    _e(w.before, N), _e(w.lines, N), _e(w.after, N);
  }), y = 0, n.font = u.string, _e(e.footer, N), n.restore(), E += v.width, {
    width: E,
    height: b
  };
}
function a0(e, t) {
  const { y: n, height: s } = t;
  return n < s / 2 ? "top" : n > e.height - s / 2 ? "bottom" : "center";
}
function l0(e, t, n, s) {
  const { x: i, width: o } = s, r = n.caretSize + n.caretPadding;
  if (e === "left" && i + o + r > t.width || e === "right" && i - o - r < 0)
    return !0;
}
function c0(e, t, n, s) {
  const { x: i, width: o } = n, { width: r, chartArea: { left: a, right: l } } = e;
  let c = "center";
  return s === "center" ? c = i <= (a + l) / 2 ? "left" : "right" : i <= o / 2 ? c = "left" : i >= r - o / 2 && (c = "right"), l0(c, e, t, n) && (c = "center"), c;
}
function lu(e, t, n) {
  const s = n.yAlign || t.yAlign || a0(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || c0(e, t, n, s),
    yAlign: s
  };
}
function u0(e, t) {
  let { x: n, width: s } = e;
  return t === "right" ? n -= s : t === "center" && (n -= s / 2), n;
}
function f0(e, t, n) {
  let { y: s, height: i } = e;
  return t === "top" ? s += n : t === "bottom" ? s -= i + n : s -= i / 2, s;
}
function cu(e, t, n, s) {
  const { caretSize: i, caretPadding: o, cornerRadius: r } = e, { xAlign: a, yAlign: l } = n, c = i + o, { topLeft: u, topRight: f, bottomLeft: d, bottomRight: h } = ii(r);
  let v = u0(t, a);
  const b = f0(t, l, c);
  return l === "center" ? a === "left" ? v += c : a === "right" && (v -= c) : a === "left" ? v -= Math.max(u, d) + i : a === "right" && (v += Math.max(f, h) + i), {
    x: Et(v, 0, s.width - t.width),
    y: Et(b, 0, s.height - t.height)
  };
}
function Yi(e, t, n) {
  const s = At(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - s.right : e.x + s.left;
}
function uu(e) {
  return It([], en(e));
}
function d0(e, t, n) {
  return Ds(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function fu(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const Fd = {
  beforeTitle: qt,
  title(e) {
    if (e.length > 0) {
      const t = e[0], n = t.chart.data.labels, s = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: qt,
  beforeBody: qt,
  beforeLabel: qt,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return ft(n) || (t += n), t;
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
  afterLabel: qt,
  afterBody: qt,
  beforeFooter: qt,
  footer: qt,
  afterFooter: qt
};
function ot(e, t, n, s) {
  const i = e[t].call(n, s);
  return typeof i > "u" ? Fd[t].call(n, s) : i;
}
class Zr extends Ai {
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
    const n = this.chart, s = this.options.setContext(this.getContext()), i = s.enabled && n.options.animation && s.animations, o = new wd(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = d0(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: s } = n, i = ot(s, "beforeTitle", this, t), o = ot(s, "title", this, t), r = ot(s, "afterTitle", this, t);
    let a = [];
    return a = It(a, en(i)), a = It(a, en(o)), a = It(a, en(r)), a;
  }
  getBeforeBody(t, n) {
    return uu(ot(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: s } = n, i = [];
    return _e(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = fu(s, o);
      It(r.before, en(ot(a, "beforeLabel", this, o))), It(r.lines, ot(a, "label", this, o)), It(r.after, en(ot(a, "afterLabel", this, o))), i.push(r);
    }), i;
  }
  getAfterBody(t, n) {
    return uu(ot(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: s } = n, i = ot(s, "beforeFooter", this, t), o = ot(s, "footer", this, t), r = ot(s, "afterFooter", this, t);
    let a = [];
    return a = It(a, en(i)), a = It(a, en(o)), a = It(a, en(r)), a;
  }
  _createItems(t) {
    const n = this._active, s = this.chart.data, i = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = n.length; l < c; ++l)
      a.push(r0(this.chart, n[l]));
    return t.filter && (a = a.filter((u, f, d) => t.filter(u, f, d, s))), t.itemSort && (a = a.sort((u, f) => t.itemSort(u, f, s))), _e(a, (u) => {
      const f = fu(t.callbacks, u);
      i.push(ot(f, "labelColor", this, u)), o.push(ot(f, "labelPointStyle", this, u)), r.push(ot(f, "labelTextColor", this, u));
    }), this.labelColors = i, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, n) {
    const s = this.options.setContext(this.getContext()), i = this._active;
    let o, r = [];
    if (!i.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = Ks[s.position].call(this, i, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = au(this, s), c = Object.assign({}, a, l), u = lu(this.chart, s, c), f = cu(s, c, u, this.chart);
      this.xAlign = u.xAlign, this.yAlign = u.yAlign, o = {
        opacity: 1,
        x: f.x,
        y: f.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: n
    });
  }
  drawCaret(t, n, s, i) {
    const o = this.getCaretPosition(t, s, i);
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, n, s) {
    const { xAlign: i, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: f } = ii(a), { x: d, y: h } = t, { width: v, height: b } = n;
    let E, _, y, N, w, S;
    return o === "center" ? (w = h + b / 2, i === "left" ? (E = d, _ = E - r, N = w + r, S = w - r) : (E = d + v, _ = E + r, N = w - r, S = w + r), y = E) : (i === "left" ? _ = d + Math.max(l, u) + r : i === "right" ? _ = d + v - Math.max(c, f) - r : _ = this.caretX, o === "top" ? (N = h, w = N - r, E = _ - r, y = _ + r) : (N = h + b, w = N + r, E = _ + r, y = _ - r), S = N), {
      x1: E,
      x2: _,
      x3: y,
      y1: N,
      y2: w,
      y3: S
    };
  }
  drawTitle(t, n, s) {
    const i = this.title, o = i.length;
    let r, a, l;
    if (o) {
      const c = bs(s.rtl, this.x, this.width);
      for (t.x = Yi(this, s.titleAlign, s), n.textAlign = c.textAlign(s.titleAlign), n.textBaseline = "middle", r = ut(s.titleFont), a = s.titleSpacing, n.fillStyle = s.titleColor, n.font = r.string, l = 0; l < o; ++l)
        n.fillText(i[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, s, i, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, u = ut(o.bodyFont), f = Yi(this, "left", o), d = i.x(f), h = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, v = n.y + h;
    if (o.usePointStyle) {
      const b = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, E = i.leftForLtr(d, c) + c / 2, _ = v + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ac(t, b, E, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Ac(t, b, E, _);
    } else {
      t.lineWidth = fe(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const b = i.leftForLtr(d, c), E = i.leftForLtr(i.xPlus(d, 1), c - 2), _ = ii(r.borderRadius);
      Object.values(_).some((y) => y !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, qr(t, {
        x: b,
        y: v,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), qr(t, {
        x: E,
        y: v + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(b, v, c, l), t.strokeRect(b, v, c, l), t.fillStyle = r.backgroundColor, t.fillRect(E, v + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, n, s) {
    const { body: i } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: u } = s, f = ut(s.bodyFont);
    let d = f.lineHeight, h = 0;
    const v = bs(s.rtl, this.x, this.width), b = function(F) {
      n.fillText(F, v.x(t.x + h), t.y + d / 2), t.y += d + o;
    }, E = v.textAlign(r);
    let _, y, N, w, S, L, A;
    for (n.textAlign = r, n.textBaseline = "middle", n.font = f.string, t.x = Yi(this, E, s), n.fillStyle = s.bodyColor, _e(this.beforeBody, b), h = a && E !== "right" ? r === "center" ? c / 2 + u : c + 2 + u : 0, w = 0, L = i.length; w < L; ++w) {
      for (_ = i[w], y = this.labelTextColors[w], n.fillStyle = y, _e(_.before, b), N = _.lines, a && N.length && (this._drawColorBox(n, t, w, v, s), d = Math.max(f.lineHeight, l)), S = 0, A = N.length; S < A; ++S)
        b(N[S]), d = f.lineHeight;
      _e(_.after, b);
    }
    h = 0, d = f.lineHeight, _e(this.afterBody, b), t.y -= o;
  }
  drawFooter(t, n, s) {
    const i = this.footer, o = i.length;
    let r, a;
    if (o) {
      const l = bs(s.rtl, this.x, this.width);
      for (t.x = Yi(this, s.footerAlign, s), t.y += s.footerMarginTop, n.textAlign = l.textAlign(s.footerAlign), n.textBaseline = "middle", r = ut(s.footerFont), n.fillStyle = s.footerColor, n.font = r.string, a = 0; a < o; ++a)
        n.fillText(i[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, n, s, i) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: u } = s, { topLeft: f, topRight: d, bottomLeft: h, bottomRight: v } = ii(i.cornerRadius);
    n.fillStyle = i.backgroundColor, n.strokeStyle = i.borderColor, n.lineWidth = i.borderWidth, n.beginPath(), n.moveTo(a + f, l), r === "top" && this.drawCaret(t, n, s, i), n.lineTo(a + c - d, l), n.quadraticCurveTo(a + c, l, a + c, l + d), r === "center" && o === "right" && this.drawCaret(t, n, s, i), n.lineTo(a + c, l + u - v), n.quadraticCurveTo(a + c, l + u, a + c - v, l + u), r === "bottom" && this.drawCaret(t, n, s, i), n.lineTo(a + h, l + u), n.quadraticCurveTo(a, l + u, a, l + u - h), r === "center" && o === "left" && this.drawCaret(t, n, s, i), n.lineTo(a, l + f), n.quadraticCurveTo(a, l, a + f, l), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, s = this.$animations, i = s && s.x, o = s && s.y;
    if (i || o) {
      const r = Ks[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = au(this, t), l = Object.assign({}, r, this._size), c = lu(n, t, l), u = cu(t, l, c, n);
      (i._to !== u.x || o._to !== u.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(n);
    const i = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = At(n.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, i, n), Od(t, n.textDirection), o.y += r.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), Nd(t, n.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const s = this._active, i = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !mo(s, i), r = this._positionChanged(i, n);
    (o || r) && (this._active = i, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, s = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options, o = this._active || [], r = this._getActiveElements(t, o, n, s), a = this._positionChanged(r, t), l = n || !mo(r, o) || a;
    return l && (this._active = r, (i.enabled || i.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, n))), l;
  }
  _getActiveElements(t, n, s, i) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!i)
      return n.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, n) {
    const { caretX: s, caretY: i, options: o } = this, r = Ks[o.position].call(this, t, n);
    return r !== !1 && (s !== r.x || i !== r.y);
  }
}
se(Zr, "positioners", Ks);
var Ga = {
  id: "tooltip",
  _element: Zr,
  positioners: Ks,
  afterInit(e, t, n) {
    n && (e.tooltip = new Zr({
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
    callbacks: Fd
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
const Ko = {
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
}, lt = /* @__PURE__ */ Object.keys(Ko);
function du(e, t) {
  return e - t;
}
function hu(e, t) {
  if (ft(t))
    return null;
  const n = e._adapter, { parser: s, round: i, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), an(r) || (r = typeof s == "string" ? n.parse(r, s) : n.parse(r)), r === null ? null : (i && (r = i === "week" && (Eo(o) || o === !0) ? n.startOf(r, "isoWeek", o) : n.startOf(r, i)), +r);
}
function pu(e, t, n, s) {
  const i = lt.length;
  for (let o = lt.indexOf(e); o < i - 1; ++o) {
    const r = Ko[lt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= s)
      return lt[o];
  }
  return lt[i - 1];
}
function h0(e, t, n, s, i) {
  for (let o = lt.length - 1; o >= lt.indexOf(n); o--) {
    const r = lt[o];
    if (Ko[r].common && e._adapter.diff(i, s, r) >= t - 1)
      return r;
  }
  return lt[n ? lt.indexOf(n) : 0];
}
function p0(e) {
  for (let t = lt.indexOf(e) + 1, n = lt.length; t < n; ++t)
    if (Ko[lt[t]].common)
      return lt[t];
}
function gu(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: s, hi: i } = Fa(n, t), o = n[s] >= t ? n[s] : n[i];
    e[o] = !0;
  }
}
function g0(e, t, n, s) {
  const i = e._adapter, o = +i.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +i.add(a, 1, s))
    l = n[a], l >= 0 && (t[l].major = !0);
  return t;
}
function _u(e, t, n) {
  const s = [], i = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], i[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !n ? s : g0(e, s, i, n);
}
class To extends Yo {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const s = t.time || (t.time = {}), i = this._adapter = new jy._date(t.adapters.date);
    i.init(n), ti(s.displayFormats, i.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
    return t === void 0 ? null : hu(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, n = this._adapter, s = t.time.unit || "day";
    let { min: i, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (i = Math.min(i, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), i = an(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s), o = an(o) && !isNaN(o) ? o : +n.endOf(Date.now(), s) + 1, this.min = Math.min(i, o - 1), this.max = Math.max(i + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (n = t[0], s = t[t.length - 1]), {
      min: n,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, n = t.time, s = t.ticks, i = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0], this.max = this._userMax || i[i.length - 1]);
    const o = this.min, r = this.max, a = Fv(i, o, r);
    return this._unit = n.unit || (s.autoSkip ? pu(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : h0(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : p0(this._unit), this.initOffsets(i), t.reverse && a.reverse(), _u(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0, s = 0, i, o;
    this.options.offset && t.length && (i = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - i : n = (this.getDecimalForValue(t[1]) - i) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    n = Et(n, 0, r), s = Et(s, 0, r), this._offsets = {
      start: n,
      end: s,
      factor: 1 / (n + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, n = this.min, s = this.max, i = this.options, o = i.time, r = o.unit || pu(o.minUnit, n, s, this._getLabelCapacity(n)), a = be(i.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Eo(l) || l === !0, u = {};
    let f = n, d, h;
    if (c && (f = +t.startOf(f, "isoWeek", l)), f = +t.startOf(f, c ? "day" : r), t.diff(s, n, r) > 1e5 * a)
      throw new Error(n + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const v = i.ticks.source === "data" && this.getDataTimestamps();
    for (d = f, h = 0; d < s; d = +t.add(d, a, r), h++)
      gu(u, d, v);
    return (d === s || i.bounds === "ticks" || h === 1) && gu(u, d, v), Object.keys(u).sort(du).map((b) => +b);
  }
  getLabelForValue(t) {
    const n = this._adapter, s = this.options.time;
    return s.tooltipFormat ? n.format(t, s.tooltipFormat) : n.format(t, s.displayFormats.datetime);
  }
  format(t, n) {
    const i = this.options.time.displayFormats, o = this._unit, r = n || i[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, n, s, i) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return xe(r, [
        t,
        n,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && a[l], f = c && a[c], d = s[n], h = c && f && d && d.major;
    return this._adapter.format(t, i || (h ? f : u));
  }
  generateTickLabels(t) {
    let n, s, i;
    for (n = 0, s = t.length; n < s; ++n)
      i = t[n], i.label = this._tickFormatFunction(i.value, n, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + s) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks, s = this.ctx.measureText(t).width, i = Wn(this.isHorizontal() ? n.maxRotation : n.minRotation), o = Math.cos(i), r = Math.sin(i), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const n = this.options.time, s = n.displayFormats, i = s[n.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, _u(this, [
      t
    ], this._majorUnit), i), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], n, s;
    if (t.length)
      return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return this._cache.data = i[0].controller.getAllParsedValues(this);
    for (n = 0, s = i.length; n < s; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, s;
    if (t.length)
      return t;
    const i = this.getLabels();
    for (n = 0, s = i.length; n < s; ++n)
      t.push(hu(this, i[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return $v(t.sort(du));
  }
}
se(To, "id", "time"), se(To, "defaults", {
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
function Ki(e, t, n) {
  let s = 0, i = e.length - 1, o, r, a, l;
  n ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = Gr(e, "pos", t)), { pos: o, time: a } = e[s], { pos: r, time: l } = e[i]) : (t >= e[s].time && t <= e[i].time && ({ lo: s, hi: i } = Gr(e, "time", t)), { time: o, pos: a } = e[s], { time: r, pos: l } = e[i]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class mu extends To {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = Ki(n, this.min), this._tableRange = Ki(n, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: s } = this, i = [], o = [];
    let r, a, l, c, u;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= n && c <= s && i.push(c);
    if (i.length < 2)
      return [
        {
          time: n,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (r = 0, a = i.length; r < a; ++r)
      u = i[r + 1], l = i[r - 1], c = i[r], Math.round((u + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, n = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(n) || s.length === 1) && s.push(n), s.sort((i, o) => i - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const n = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return n.length && s.length ? t = this.normalize(n.concat(s)) : t = n.length ? n : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Ki(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, s = this.getDecimalForPixel(t) / n.factor - n.end;
    return Ki(this._table, s * this._tableRange + this._minPos, !0);
  }
}
se(mu, "id", "timeseries"), se(mu, "defaults", To.defaults);
const Vd = {
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
}, _0 = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, m0 = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Vd,
  ..._0
}, b0 = Lr[0] === "2" ? (e, t) => Object.assign(e, {
  attrs: t
}) : (e, t) => Object.assign(e, t);
function ds(e) {
  return vs(e) ? ee(e) : e;
}
function v0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return vs(t) ? new Proxy(e, {}) : e;
}
function y0(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function $d(e, t) {
  e.labels = t;
}
function jd(e, t, n) {
  const s = [];
  e.datasets = t.map((i) => {
    const o = e.datasets.find((r) => r[n] === i[n]);
    return !o || !i.data || s.includes(o) ? {
      ...i
    } : (s.push(o), Object.assign(o, i), o);
  });
}
function E0(e, t) {
  const n = {
    labels: [],
    datasets: []
  };
  return $d(n, e.labels), jd(n, e.datasets, t), n;
}
const x0 = /* @__PURE__ */ it({
  props: m0,
  setup(e, t) {
    let { expose: n, slots: s } = t;
    const i = Be(null), o = ca(null);
    n({
      chart: o
    });
    const r = () => {
      if (!i.value) return;
      const { type: c, data: u, options: f, plugins: d, datasetIdKey: h } = e, v = E0(u, h), b = v0(v, u);
      o.value = new As(i.value, {
        type: c,
        data: b,
        options: {
          ...f
        },
        plugins: d
      });
    }, a = () => {
      const c = ee(o.value);
      c && (e.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, e.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(e.updateMode);
    };
    return Wt(r), Ro(a), Xn([
      () => e.options,
      () => e.data
    ], (c, u) => {
      let [f, d] = c, [h, v] = u;
      const b = ee(o.value);
      if (!b)
        return;
      let E = !1;
      if (f) {
        const _ = ds(f), y = ds(h);
        _ && _ !== y && (y0(b, _), E = !0);
      }
      if (d) {
        const _ = ds(d.labels), y = ds(v.labels), N = ds(d.datasets), w = ds(v.datasets);
        _ !== y && ($d(b.config.data, _), E = !0), N && N !== w && (jd(b.config.data, N, e.datasetIdKey), E = !0);
      }
      E && Ku(() => {
        l(b);
      });
    }, {
      deep: !0
    }), () => fi("canvas", {
      role: "img",
      ariaLabel: e.ariaLabel,
      ariaDescribedby: e.ariaDescribedby,
      ref: i
    }, [
      fi("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function O0(e, t) {
  return As.register(t), /* @__PURE__ */ it({
    props: Vd,
    setup(n, s) {
      let { expose: i } = s;
      const o = ca(null), r = (a) => {
        o.value = a == null ? void 0 : a.chart;
      };
      return i({
        chart: o
      }), () => fi(x0, b0({
        ref: r
      }, {
        type: e,
        ...n
      }));
    }
  });
}
const Xa = /* @__PURE__ */ O0("doughnut", zs), N0 = { class: "panel panel-white no-margin" }, w0 = { class: "panel-heading" }, S0 = { style: { display: "flex", "align-items": "center" } }, T0 = {
  class: "panel-title",
  style: { flex: "1" }
}, D0 = { class: "text-default" }, A0 = {
  key: 0,
  class: "panel-body text-center"
}, k0 = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "300px" } }, C0 = {
  key: 1,
  class: "panel-body"
}, M0 = /* @__PURE__ */ it({
  __name: "ConfirmedEvaluations",
  setup(e) {
    const { t } = Bt();
    As.register(Un, Ga, Ka);
    const n = Be(!1), s = Be({
      less_than_30_days: 0,
      less_than_60_days: 0,
      more_than_60_days: 0
    }), i = async () => {
      var a, l;
      if (!n.value) {
        n.value = !0;
        try {
          const c = is(((a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_base_url) || "", "/widgets/confirmed_evaluations"), u = (l = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : l.api_token;
          if (!u)
            throw new Error("API token is missing");
          const f = await window.fetch(c, {
            headers: {
              Authorization: `Bearer ${u}`
            }
          });
          if (!f.ok)
            throw new Error("Failed to fetch data");
          s.value = await f.json();
        } catch (c) {
          console.error(c);
        } finally {
          n.value = !1;
        }
      }
    };
    Wt(() => {
      i();
    });
    const o = wt(() => ({
      labels: ["0 - 30", "31 - 60", "> 60"],
      datasets: [
        {
          data: [
            s.value.less_than_30_days || 0,
            s.value.less_than_60_days || 0,
            s.value.more_than_60_days || 0
          ],
          backgroundColor: ["#91cf50", "#ffbf00", "#f90000"]
        }
      ]
    })), r = {
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "bottom"
        }
      }
    };
    return (a, l) => (ue(), he("div", N0, [
      D("div", w0, [
        D("div", S0, [
          D("h6", T0, [
            D("span", D0, z(ie(t)("confirmed_evaluations.title")), 1)
          ]),
          D("a", {
            href: "#",
            onClick: ss(i, ["prevent"])
          }, l[0] || (l[0] = [
            D("svg", {
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
              D("polyline", { points: "1 4 1 10 7 10" }),
              D("polyline", { points: "23 20 23 14 17 14" }),
              D("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (ue(), he("div", A0, [
        D("div", k0, [
          Oe(os, { width: 30 })
        ])
      ])) : (ue(), he("div", C0, [
        Oe(ie(Xa), {
          data: o.value,
          options: r
        }, null, 8, ["data"])
      ]))
    ]));
  }
}), L0 = { class: "panel panel-white no-margin" }, I0 = { class: "panel-heading" }, P0 = { style: { display: "flex", "align-items": "center" } }, R0 = {
  class: "panel-title",
  style: { flex: "1" }
}, F0 = { class: "text-default" }, V0 = {
  key: 0,
  class: "panel-body text-center"
}, $0 = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "300px" } }, j0 = {
  key: 1,
  class: "panel-body"
}, H0 = /* @__PURE__ */ it({
  __name: "ActiveVehicles",
  setup(e) {
    const { t } = Bt();
    As.register(Un, Ga, Ka);
    const n = Be(!1), s = Be({
      activated: 0,
      ready_for_activation: 0,
      other: 0,
      total: 0
    }), i = async () => {
      var a, l;
      if (!n.value) {
        n.value = !0;
        try {
          const c = is(((a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_base_url) || "", "/widgets/active_vehicles"), u = (l = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : l.api_token;
          if (!u)
            throw new Error("API token is missing");
          const f = await window.fetch(c, {
            headers: {
              Authorization: `Bearer ${u}`
            }
          });
          if (!f.ok)
            throw new Error("Failed to fetch data");
          s.value = await f.json();
        } catch (c) {
          console.error(c);
        } finally {
          n.value = !1;
        }
      }
    };
    Wt(() => {
      i();
    });
    const o = wt(() => ({
      labels: [t("active_vehicles.activated"), t("active_vehicles.ready_for_activation"), t("active_vehicles.other")],
      datasets: [
        {
          data: [
            s.value.activated || 0,
            s.value.ready_for_activation || 0,
            s.value.other || 0
          ],
          backgroundColor: ["#91cf50", "#ffbf00", "#f90000"]
        }
      ]
    })), r = {
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "bottom"
        }
      }
    };
    return (a, l) => (ue(), he("div", L0, [
      D("div", I0, [
        D("div", P0, [
          D("h6", R0, [
            D("span", F0, z(ie(t)("active_vehicles.title")), 1)
          ]),
          D("a", {
            href: "#",
            onClick: ss(i, ["prevent"])
          }, l[0] || (l[0] = [
            D("svg", {
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
              D("polyline", { points: "1 4 1 10 7 10" }),
              D("polyline", { points: "23 20 23 14 17 14" }),
              D("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (ue(), he("div", V0, [
        D("div", $0, [
          Oe(os, { width: 30 })
        ])
      ])) : (ue(), he("div", j0, [
        Oe(ie(Xa), {
          data: o.value,
          options: r
        }, null, 8, ["data"])
      ]))
    ]));
  }
}), W0 = { class: "panel panel-white no-margin" }, U0 = { class: "panel-heading" }, B0 = { style: { display: "flex", "align-items": "center" } }, z0 = {
  class: "panel-title",
  style: { flex: "1" }
}, Y0 = { class: "text-default" }, K0 = {
  key: 0,
  class: "panel-body text-center"
}, G0 = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "300px" } }, X0 = {
  key: 1,
  class: "panel-body"
}, q0 = /* @__PURE__ */ it({
  __name: "StockAge",
  setup(e) {
    const { t } = Bt();
    As.register(Un, Ga, Ka);
    const n = Be(!1), s = Be({
      less_than_60: 0,
      less_than_90: 0,
      more_than_90: 0
    }), i = async () => {
      var a, l;
      if (!n.value) {
        n.value = !0;
        try {
          const c = is(((a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_base_url) || "", "/widgets/stock_age"), u = (l = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : l.api_token;
          if (!u)
            throw new Error("API token is missing");
          const f = await window.fetch(c, {
            headers: {
              Authorization: `Bearer ${u}`
            }
          });
          if (!f.ok)
            throw new Error("Failed to fetch data");
          s.value = await f.json();
        } catch (c) {
          console.error(c);
        } finally {
          n.value = !1;
        }
      }
    };
    Wt(() => {
      i();
    });
    const o = wt(() => ({
      labels: ["0 - 60", "61 - 90", "> 90"],
      datasets: [
        {
          data: [
            s.value.less_than_60 || 0,
            s.value.less_than_90 || 0,
            s.value.more_than_90 || 0
          ],
          backgroundColor: ["#91cf50", "#ffbf00", "#f90000"]
        }
      ]
    })), r = {
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "bottom"
        }
      }
    };
    return (a, l) => (ue(), he("div", W0, [
      D("div", U0, [
        D("div", B0, [
          D("h6", z0, [
            D("span", Y0, z(ie(t)("stock_age.title")), 1)
          ]),
          D("a", {
            href: "#",
            onClick: ss(i, ["prevent"])
          }, l[0] || (l[0] = [
            D("svg", {
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
              D("polyline", { points: "1 4 1 10 7 10" }),
              D("polyline", { points: "23 20 23 14 17 14" }),
              D("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (ue(), he("div", K0, [
        D("div", G0, [
          Oe(os, { width: 30 })
        ])
      ])) : (ue(), he("div", X0, [
        Oe(ie(Xa), {
          data: o.value,
          options: r
        }, null, 8, ["data"])
      ]))
    ]));
  }
}), J0 = { class: "panel panel-white no-margin" }, Q0 = { class: "panel-heading" }, Z0 = { style: { display: "flex", "align-items": "center" } }, ex = {
  class: "panel-title",
  style: { flex: "1" }
}, tx = { class: "text-default" }, nx = { class: "panel-heading-meta" }, sx = {
  key: 0,
  class: "panel-body text-center"
}, ix = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "229px" } }, ox = {
  key: 1,
  class: "panel-body no-padding"
}, rx = { class: "table" }, ax = {
  width: "180",
  class: "text-center"
}, lx = {
  width: "180",
  class: "text-center"
}, cx = { class: "text-center" }, ux = { class: "text-center" }, fx = { class: "text-center" }, dx = { class: "text-center" }, hx = { class: "text-center" }, px = { class: "text-center" }, gx = { class: "text-center" }, _x = { class: "text-center" }, mx = { class: "text-center" }, bx = { class: "text-center" }, vx = /* @__PURE__ */ it({
  __name: "SummaryByPhase",
  setup(e) {
    const { t } = Bt(), n = Be(!1), s = Be({
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
    }), i = async () => {
      var r, a;
      if (!n.value) {
        n.value = !0;
        try {
          const l = is(((r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_base_url) || "", "/widgets/summary_by_phase"), c = (a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_token;
          if (!c)
            throw new Error("API token is missing");
          const u = await window.fetch(l, {
            headers: {
              Authorization: `Bearer ${c}`
            }
          });
          if (!u.ok)
            throw new Error("Failed to fetch data");
          s.value = await u.json();
        } catch (l) {
          console.error(l);
        } finally {
          n.value = !1;
        }
      }
    }, o = wt(() => Object.values(s.value).reduce((r, a) => r + a.total, 0));
    return Wt(() => {
      i();
    }), (r, a) => (ue(), he("div", J0, [
      D("div", Q0, [
        D("div", Z0, [
          D("h6", ex, [
            D("span", tx, z(ie(t)("summary_by_phase.title")), 1)
          ]),
          D("div", nx, [
            D("span", null, [
              rt(z(ie(t)("summary_by_phase.heading_total")) + ": ", 1),
              D("strong", null, z(o.value), 1)
            ])
          ]),
          D("a", {
            href: "#",
            onClick: ss(i, ["prevent"])
          }, a[0] || (a[0] = [
            D("svg", {
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
              D("polyline", { points: "1 4 1 10 7 10" }),
              D("polyline", { points: "23 20 23 14 17 14" }),
              D("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (ue(), he("div", sx, [
        D("div", ix, [
          Oe(os, { width: 30 })
        ])
      ])) : (ue(), he("div", ox, [
        D("table", rx, [
          D("thead", null, [
            D("tr", null, [
              D("th", null, z(ie(t)("summary_by_phase.phase")), 1),
              D("th", ax, z(ie(t)("summary_by_phase.total")), 1),
              D("th", lx, z(ie(t)("summary_by_phase.average")), 1)
            ])
          ]),
          D("tbody", null, [
            D("tr", null, [
              D("td", null, z(ie(t)("summary_by_phase.evaluations")), 1),
              D("td", cx, z(s.value.evaluations.total), 1),
              D("td", ux, z(s.value.evaluations.average), 1)
            ]),
            D("tr", null, [
              D("td", null, z(ie(t)("summary_by_phase.confirmed_evaluations")), 1),
              D("td", fx, z(s.value.confirmed_evaluations.total), 1),
              D("td", dx, z(s.value.confirmed_evaluations.average), 1)
            ]),
            D("tr", null, [
              D("td", null, z(ie(t)("summary_by_phase.vehicles_in_preparation")), 1),
              D("td", hx, z(s.value.vehicles_in_preparation.total), 1),
              D("td", px, z(s.value.vehicles_in_preparation.average), 1)
            ]),
            D("tr", null, [
              D("td", null, z(ie(t)("summary_by_phase.vehicles_in_sales")), 1),
              D("td", gx, z(s.value.vehicles_in_sale.total), 1),
              D("td", _x, z(s.value.vehicles_in_sale.average), 1)
            ]),
            D("tr", null, [
              D("td", null, z(ie(t)("summary_by_phase.vehicles_for_delivery")), 1),
              D("td", mx, z(s.value.vehicles_for_delivery.total), 1),
              D("td", bx, z(s.value.vehicles_for_delivery.average), 1)
            ])
          ])
        ])
      ]))
    ]));
  }
}), yx = { class: "panel panel-white no-margin" }, Ex = { class: "panel-heading" }, xx = { style: { display: "flex", "align-items": "center" } }, Ox = {
  class: "panel-title",
  style: { flex: "1" }
}, Nx = { class: "text-default" }, wx = { class: "panel-heading-meta" }, Sx = {
  key: 0,
  class: "panel-body text-center"
}, Tx = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "229px" } }, Dx = {
  key: 1,
  class: "panel-body no-padding"
}, Ax = { class: "table" }, kx = {
  width: "180",
  class: "text-right"
}, Cx = ["href"], Mx = /* @__PURE__ */ it({
  __name: "PreparationPhaseSummary",
  setup(e) {
    const { t } = Bt(), n = Be(!1), s = Be({
      vehicles: [],
      total: 0
    }), i = async () => {
      var r, a;
      if (!n.value) {
        n.value = !0;
        try {
          const l = is(((r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_base_url) || "", "/widgets/preparation_phase_summary"), c = (a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_token;
          if (!c)
            throw new Error("API token is missing");
          const u = await window.fetch(l, {
            headers: {
              Authorization: `Bearer ${c}`
            }
          });
          if (!u.ok)
            throw new Error("Failed to fetch data");
          s.value = await u.json();
        } catch (l) {
          console.error(l);
        } finally {
          n.value = !1;
        }
      }
    }, o = (r) => r.days <= 60 ? "text-success" : r.days <= 90 ? "text-warning" : "text-danger";
    return Wt(() => {
      i();
    }), (r, a) => (ue(), he("div", yx, [
      D("div", Ex, [
        D("div", xx, [
          D("h6", Ox, [
            D("span", Nx, z(ie(t)("preparation_phase_summary.title")), 1)
          ]),
          D("div", wx, [
            D("span", null, [
              rt(z(ie(t)("preparation_phase_summary.heading_total")) + ": ", 1),
              D("strong", null, z(s.value.total), 1)
            ])
          ]),
          D("a", {
            href: "#",
            onClick: ss(i, ["prevent"])
          }, a[0] || (a[0] = [
            D("svg", {
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
              D("polyline", { points: "1 4 1 10 7 10" }),
              D("polyline", { points: "23 20 23 14 17 14" }),
              D("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (ue(), he("div", Sx, [
        D("div", Tx, [
          Oe(os, { width: 30 })
        ])
      ])) : (ue(), he("div", Dx, [
        D("table", Ax, [
          D("thead", null, [
            D("tr", null, [
              D("th", null, z(ie(t)("preparation_phase_summary.vehicle")), 1),
              D("th", kx, z(ie(t)("preparation_phase_summary.days")), 1)
            ])
          ]),
          D("tbody", null, [
            (ue(!0), he(Xe, null, Fo(s.value.vehicles, (l) => (ue(), he("tr", {
              key: `preparation_summary_vehicle_${l.id}`
            }, [
              D("td", null, [
                D("a", {
                  href: `/sto2.php?w=priprema_vozila&d=edit&ID=${l.id}`
                }, z(l.title), 9, Cx)
              ]),
              D("td", {
                class: Oi(["text-right", o(l)])
              }, z(l.days), 3)
            ]))), 128))
          ])
        ])
      ]))
    ]));
  }
}), Lx = { class: "panel panel-white no-margin" }, Ix = { class: "panel-heading" }, Px = { style: { display: "flex", "align-items": "center" } }, Rx = {
  class: "panel-title",
  style: { flex: "1" }
}, Fx = { class: "text-default" }, Vx = { class: "panel-heading-meta" }, $x = {
  key: 0,
  class: "panel-body text-center"
}, jx = { style: { display: "flex", "justify-content": "center", "align-items": "center", "min-height": "234px" } }, Hx = {
  key: 1,
  class: "panel-body no-padding"
}, Wx = { class: "table" }, Ux = ["href"], Bx = { class: "text-size-small no-margin" }, zx = { class: "text-right" }, Yx = /* @__PURE__ */ it({
  __name: "PlannedDeliveries",
  setup(e) {
    const { t } = Bt(), n = Be(!1), s = Be({
      vehicles: [],
      total: 0,
      soon_total: 0
    }), i = async () => {
      var r, a;
      if (!n.value) {
        n.value = !0;
        try {
          const l = is(((r = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : r.api_base_url) || "", "/widgets/planned_deliveries"), c = (a = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : a.api_token;
          if (!c)
            throw new Error("API token is missing");
          const u = await window.fetch(l, {
            headers: {
              Authorization: `Bearer ${c}`
            }
          });
          if (!u.ok)
            throw new Error("Failed to fetch data");
          s.value = await u.json();
        } catch (l) {
          console.error(l);
        } finally {
          n.value = !1;
        }
      }
    }, o = (r) => {
      const a = new Date(r), l = a.getDate().toString().padStart(2, "0"), c = (a.getMonth() + 1).toString().padStart(2, "0"), u = a.getFullYear(), f = a.getHours().toString().padStart(2, "0"), d = a.getMinutes().toString().padStart(2, "0");
      return `${l}.${c}.${u}. ${f}:${d}`;
    };
    return Wt(() => {
      i();
    }), (r, a) => (ue(), he("div", Lx, [
      D("div", Ix, [
        D("div", Px, [
          D("h6", Rx, [
            D("span", Fx, z(ie(t)("planned_deliveries.title")), 1)
          ]),
          D("div", Vx, [
            D("span", null, [
              rt(z(ie(t)("planned_deliveries.heading_soon_total")) + ": ", 1),
              D("strong", null, z(s.value.soon_total), 1),
              rt(" / " + z(ie(t)("planned_deliveries.heading_total")) + ": ", 1),
              D("strong", null, z(s.value.total), 1)
            ])
          ]),
          D("a", {
            href: "#",
            onClick: ss(i, ["prevent"])
          }, a[0] || (a[0] = [
            D("svg", {
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
              D("polyline", { points: "1 4 1 10 7 10" }),
              D("polyline", { points: "23 20 23 14 17 14" }),
              D("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" })
            ], -1)
          ]))
        ])
      ]),
      n.value ? (ue(), he("div", $x, [
        D("div", jx, [
          Oe(os, { width: 30 })
        ])
      ])) : (ue(), he("div", Hx, [
        D("table", Wx, [
          D("tbody", null, [
            (ue(!0), he(Xe, null, Fo(s.value.vehicles, (l) => (ue(), he("tr", {
              key: `planned_delivery_vehicle_${l.id}`
            }, [
              D("td", null, [
                D("a", {
                  href: `/sto2.php?w=predaja_vozila&d=edit&ID=${l.id}`,
                  class: "display-block mb-5"
                }, z(l.title), 9, Ux),
                D("p", Bx, z(l.sold_by ? l.sold_by : l.created_by), 1)
              ]),
              D("td", zx, z(o(l.planned_delivery)), 1)
            ]))), 128))
          ])
        ])
      ]))
    ]));
  }
}), Kx = {
  sale_summary_by_dealer: {
    columns: 12,
    component: tv
  },
  confirmed_evaluations: {
    columns: 4,
    component: M0
  },
  active_vehicles: {
    columns: 4,
    component: H0
  },
  stock_age: {
    columns: 4,
    component: q0
  },
  summary_by_phase: {
    columns: 4,
    component: vx
  },
  preparation_phase_summary: {
    columns: 4,
    component: Mx
  },
  planned_deliveries: {
    columns: 4,
    component: Yx
  }
}, Gx = { class: "widget-canvas" }, Xx = /* @__PURE__ */ it({
  __name: "WidgetCanvas",
  props: {
    widgets: {}
  },
  setup(e) {
    const t = e, n = wt(() => t.widgets.map((s) => {
      const i = Kx[s];
      return i ? { name: s, ...i } : (console.error(`Widget "${s}" not found`), null);
    }).filter(Boolean));
    return (s, i) => (ue(), he("div", Gx, [
      (ue(!0), he(Xe, null, Fo(n.value, (o) => (ue(), rg(mp(o == null ? void 0 : o.component), {
        key: o == null ? void 0 : o.name,
        class: Oi(`widget col-${o == null ? void 0 : o.columns}`)
      }, null, 8, ["class"]))), 128))
    ]));
  }
}), qx = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Jx = /* @__PURE__ */ qx(Xx, [["__scopeId", "data-v-7e03751d"]]), Qx = { class: "content" }, Zx = /* @__PURE__ */ it({
  __name: "App",
  setup(e) {
    var n;
    const t = Be(((n = window == null ? void 0 : window.DASHBOARD_STATE) == null ? void 0 : n.widgets) || []);
    return (s, i) => (ue(), he("div", Qx, [
      Oe(Jx, { widgets: t.value }, null, 8, ["widgets"])
    ]));
  }
}), eO = {
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
}, tO = {
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
}, nO = {
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
}, sO = {
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
}, iO = {
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
}, oO = {
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
}, rO = {
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
}, aO = {
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
var bu;
const lO = _b({
  locale: ((bu = window.DASHBOARD_STATE) == null ? void 0 : bu.locale) || "hr",
  fallbackLocale: "en",
  messages: {
    en: eO,
    hr: tO,
    si: nO,
    rs: sO,
    ba: iO,
    me: oO,
    rks: rO,
    mk: aO
  }
}), Hd = Gg(Zx);
Hd.use(lO);
Hd.mount("#widgetsRoot");
